import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import { Signup } from "./components/signup";
import { Login } from "./components/Login";
import { MyPage } from "./components/MyPage";
import { Product } from "./components/ProductCard";
import { OrderHistory } from "./components/OrderHistory";
import { AdminDashboard } from "./components/AdminDashboard";
import { SellerDashboard } from "./components/SellerDashboard";
import { CustomerService } from "./components/CustomerService";
import { Notices } from "./components/Notices";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ForgotPassword } from "./components/ForgotPassword";
import { Button } from "./components/ui/button";
import FAQ from "./components/FAQ";
import ShippingGuide from "./components/ShippingGuide";
import ReturnPolicy from "./components/ReturnPolicy";
import TermsOfService from "./components/TermsOfService";
import ScrollToTop from "./components/ui/ScrollToTop";

// firebase import
import app from "./firebase";
import { db } from "./firebase";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

// URL 경로를 Page 타입으로 변환하는 함수
function getPageFromPath(pathname, search) {
  if (pathname === "/" || pathname === "") return { page: "landing" };
  if (pathname === "/home") return { page: "home" };
  if (pathname === "/product") {
    const params = new URLSearchParams(search);
    const productId = params.get("id");
    return { page: "product", productId: productId || undefined };
  }
  if (pathname === "/cart") return { page: "cart" };
  if (pathname === "/signup") return { page: "signup" };
  if (pathname === "/login") return { page: "login" };
  if (pathname === "/forgot-password") return { page: "forgot-password" };
  if (pathname === "/mypage") return { page: "mypage" };
  if (pathname === "/orders") return { page: "orders" };
  if (pathname === "/admin") return { page: "admin" };
  if (pathname === "/seller") return { page: "seller" };
  if (pathname === "/customer-service") return { page: "customer-service" };
  if (pathname === "/faq") return { page: "faq" };
  if (pathname === "/notices") return { page: "notices" };
  if (pathname === "/shipping") return { page: "shipping" };
  if (pathname === "/returns") return { page: "returns" };
  if (pathname === "/terms") return { page: "terms" };
  return { page: "landing" };
}

function getPathFromPage(page, productId) {
  if (page === "landing") return "/";
  if (page === "product" && productId) return `/product?id=${productId}`;
  if (page === "home") return "/home";
  if (page === "cart") return "/cart";
  if (page === "signup") return "/signup";
  if (page === "login") return "/login";
  if (page === "forgot-password") return "/forgot-password";
  if (page === "mypage") return "/mypage";
  if (page === "orders") return "/orders";
  if (page === "admin") return "/admin";
  if (page === "seller") return "/seller";
  if (page === "customer-service") return "/customer-service";
  if (page === "faq") return "/faq";
  if (page === "notices") return "/notices";
  if (page === "shipping") return "/shipping";
  if (page === "returns") return "/returns";
  if (page === "terms") return "/terms";
  return "/";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nextProductId, setNextProductId] = useState(1);
  const [user, setUser] = useState(null); 
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser(null);
        
        const protectedPages = [ "mypage", "cart", "orders", "admin", "seller" ];

        if (protectedPages.includes(currentPage)) {
          toast.warning("권한이 없습니다. 로그인해주세요");
        }
        return;
      }
  
      // 로그인된 사용자 Firestore 조회
      const fetchUserData = async () => {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          const userData = userDoc.exists() ? userDoc.data() : {};
          setUser({ ...currentUser, name: userData.name || currentUser.displayName || currentUser.email, isAdmin: userData.isAdmin || false, isSeller: userData.isSeller || false  });
  
          if (currentPage === "login") handleNavigate("home"); // 로그인 상태이면 로그인 페이지 접근 금지
        } catch (error) {
          console.error("유저 권한 불러오기 실패:", error);
          setUser(currentUser); // 권한 체크 실패 시 최소 정보 유지
        }
      };
  
      fetchUserData();
    });
  
    return () => unsubscribe();
  }, [auth, currentPage]);

  useEffect(() => {
    const { page, productId } = getPageFromPath(window.location.pathname, window.location.search);
    setCurrentPage(page);
    
    if (page === 'product' && productId) {
      const product = products.find(p => String(p.id) === String(productId));
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, []);

  useEffect(() => {
    if (currentPage === "product") {
      const { productId } = getPageFromPath(window.location.pathname, window.location.search);
      if (productId && products.length > 0) {
        const product = products.find(p => String(p.id) === String(productId));
        if (product) {
          setSelectedProduct(product);
        }
      }
    }
  }, [products, currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const { page, productId } = getPageFromPath(window.location.pathname, window.location.search);
      setCurrentPage(page);
      if (page === "product" && productId && products.length > 0) {
        const product = products.find((p) => p.id === productId);
        if (product) setSelectedProduct(product);
      } else {
        setSelectedProduct(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const fetchedProducts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setProducts(fetchedProducts);
        setNextProductId(fetchedProducts.length + 1);
    };
    fetchProducts();
  }, []);
  

  const handleNavigate = (page, productId) => {
    const protectedPages = ["mypage", "cart", "orders", "admin", "seller"];
  
    // 로그인 안 된 상태 + 보호된 페이지 접근 시
    if (!user && protectedPages.includes(page)) {
      toast.warning(
        <div className="flex flex-col gap-2">
        <span>로그인이 필요합니다.</span>
        <Button onClick={() => handleNavigate('home')} variant="outline" size="sm">
          로그인하러 가기
        </Button>
      </div>
      );
      return; // 이동 막기 (현재 위치 유지)
    }
  
    const path = getPathFromPage(page, productId);
    window.history.pushState({}, "", path);
    setCurrentPage(page);
  
    if (page !== "product") setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    const path = getPathFromPage("product", product.id);
    window.history.pushState({}, "", path);
    setCurrentPage("product");
  };

  const handleAddToCart = async (product, quantity = 1) => {
    if (!user) {
      toast.error("로그인이 필요합니다.");
      return;
    }
  
    const existingItem = cartItems.find(item => item.productId === product.id);
    if (existingItem) {
      const itemRef = doc(db, "carts", existingItem.id);
      await updateDoc(itemRef, { quantity: existingItem.quantity + quantity });
      setCartItems(prev => prev.map(item => item.id === existingItem.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      const newItem = {
        userId: user.uid,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image || "",
        quantity,
        selected: true,
      };
      const docRef = await addDoc(collection(db, "carts"), newItem);
      setCartItems(prev => [...prev, { ...newItem, id: docRef.id }]);
    }
  
    toast.success(`${product.name} 장바구니에 추가되었습니다.`);
  };

  const handleUpdateQuantity = async (id, quantity) => {
    if (quantity < 1) return;
    const itemRef = doc(db, "carts", id);
    await updateDoc(itemRef, { quantity });
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveItem = async (id) => {
    await deleteDoc(doc(db, "carts", id));
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success("장바구니에서 제거되었습니다.");
  };

  const handleToggleSelect = async (id) => {
    const item = cartItems.find(item => item.id === id);
    if (!item) return;
    const itemRef = doc(db, "carts", id);
    await updateDoc(itemRef, { selected: !item.selected });
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, selected: !i.selected } : i));
  };

  const handleToggleSelectAll = async () => {
    const allSelected = cartItems.every(item => item.selected);
    await Promise.all(cartItems.map(item => updateDoc(doc(db, "carts", item.id), { selected: !allSelected })));
    setCartItems(prev => prev.map(item => ({ ...item, selected: !allSelected })));
  };

  const handleCheckout = async () => {
    const selectedItems = cartItems.filter(item => item.selected);
    if (selectedItems.length === 0) {
      toast.error("주문할 상품을 선택해주세요.");
      return;
    }

    await Promise.all(selectedItems.map(item => deleteDoc(doc(db, "carts", item.id))));
    setCartItems(prev => prev.filter(item => !item.selected));
    toast.success("주문이 완료되었습니다!");
    handleNavigate("orders");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast.success("로그인 되었습니다.");
    handleNavigate("home");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('로그아웃 되었습니다.');
      handleNavigate('landing');
    } catch (error) {
      console.error('로그아웃 오류:', error);
      toast.error('로그아웃에 실패했습니다.');
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      const docRef = await addDoc(collection(db, "products"), productData);
      setProducts([...products, { ...productData, id: docRef.id }]);
      toast.success("상품이 등록되었습니다.");
    } catch (error) {
      console.error("상품 추가 오류:", error);
      toast.error("상품 추가에 실패했습니다.");
    }
  };

  const handleUpdateProduct = async (product) => {
    try {
      const docRef = doc(db, "products", product.id);
      await updateDoc(docRef, product);
      setProducts(products.map(p => (p.id === product.id ? product : p)));
      toast.success("상품이 수정되었습니다.");
    } catch (error) {
      console.error("상품 수정 오류:", error);
      toast.error("상품 수정에 실패했습니다.");
    }
  };
  

  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter(p => p.id !== id));
      toast.success("상품이 삭제되었습니다.");
    } catch (error) {
      console.error("상품 삭제 오류:", error);
      toast.error("상품 삭제에 실패했습니다.");
    }
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop currentPage={currentPage} />
      {currentPage !== "landing" && 
       currentPage !== 'login' && 
       currentPage !== 'signup' && 
       currentPage !== 'forgot-password' && 
       currentPage !== 'notices' && 
       currentPage !== 'faq' && 
       currentPage !== 'customer-service' && 
       currentPage !== 'shipping' && 
       currentPage !== 'returns' && 
       currentPage !== 'terms' && (
        <Header
          onNavigate={handleNavigate}
          cartItemCount={cartItemCount}
          currentPage={currentPage}
          onLogout={handleLogout}
          user={user}
        />
      )}

      <main>
        {currentPage === "landing" && (
          <LandingPage onGetStarted={() => handleNavigate("home")} 
                       onNavigateToLogin={() => handleNavigate("login")}
                       onNavigateTosignup={() => handleNavigate("signup")}
                       onNavigate={handleNavigate}
                    />
        )}
        {currentPage === "home" && (
          <ProductList products={products} 
                       onAddToCart={handleAddToCart} 
                       onProductClick={handleProductClick}
                    />
        )}
        {currentPage === "product" && selectedProduct && (
          <ProductDetail product={selectedProduct} 
                         onAddToCart={handleAddToCart} 
                         onBack={() => handleNavigate("home")}
                         user={user}
                    />
        )}
        {currentPage === "product" && !selectedProduct && (
          <div className="text-center py-12 text-gray-500">
            상품 정보를 불러오는 중입니다...
          </div>
        )}
        
        {currentPage === "cart" && (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onToggleSelect={handleToggleSelect}
            onToggleSelectAll={handleToggleSelectAll}
            onCheckout={handleCheckout}
            handleNavigate={handleNavigate}
            user={user}
          />
        )}
        {currentPage === "signup" && <Signup onNavigate={handleNavigate} />}
        {currentPage === "login" && <Login onLogin={handleLogin} />}
        {currentPage === "forgot-password" && <ForgotPassword />}
        {currentPage === "orders" && <OrderHistory />}
        {currentPage === "admin" && (
          <AdminDashboard
            products={products}
            setProducts={setProducts}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            user={user}
          />
        )}
        {currentPage === "seller" && (
          <SellerDashboard
            products={products}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            user={user}
          />
        )}
        {currentPage === "customer-service" && <CustomerService onNavigate={handleNavigate} />}
        {currentPage === "faq" && <FAQ  />}
        {currentPage === "notices" && <Notices />}
        {currentPage === "shipping" && <ShippingGuide />}
        {currentPage === "returns" && <ReturnPolicy />}
        {currentPage === "terms" && <TermsOfService />}
        {currentPage === "mypage" && <MyPage user={user} onNavigate={handleNavigate} onLogout={handleLogout} />}
      </main>

      {currentPage !== "landing" && (
        <footer className="bg-white border-t mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    S
                  </div>
                  <span className="text-xl">쇼피</span>
                </div>
                <p className="text-sm text-gray-600">다양한 상품을 합리적인 가격에 만나보세요.</p>
              </div>

              <div>
                <h3 className="mb-4">고객센터</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><button onClick={() => handleNavigate("notices")} className="hover:text-blue-600">공지사항</button></li>
                  <li><button onClick={() => handleNavigate("faq")} className="hover:text-blue-600">자주 묻는 질문</button></li>
                  <li><button onClick={() => handleNavigate("customer-service")} className="hover:text-blue-600">1:1 문의</button></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4">쇼핑 정보</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><button onClick={() => handleNavigate("shipping")} className="hover:text-blue-600">배송 안내</button></li>
                  <li><button onClick={() => handleNavigate("returns")} className="hover:text-blue-600">교환/반품 안내</button></li>
                  <li><button onClick={() => handleNavigate("terms")} className="hover:text-blue-600">이용약관</button></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4">회사 정보</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>대표: 신동준</li>
                  <li>사업자등록번호: 123-45-67890</li>
                  <li>이메일: tlsehdwns0320@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
              © 2025 쇼피 (Shopi). All rights reserved.
            </div>
          </div>
        </footer>
      )}

      <Toaster position="top-center" richColors />
    </div>
  );
}
