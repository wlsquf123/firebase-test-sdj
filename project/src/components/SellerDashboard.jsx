import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { CustomLabel } from "./ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

export function SellerDashboard({ products, onAddProduct, onUpdateProduct, onDeleteProduct, user }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    images: [],
    description: "",
    badge: "",
    stock: 0,
    status: "판매중",
    discount: 0,
    delivery: "",
    shippingPeriod: "",
    returnPolicy: "",
  });

  const isSeller = user?.isSeller === true;
  if (!user) return <div className="text-center py-8">Loading...</div>;
  if (!isSeller) return <div className="text-center py-8 text-red-600">⚠ 판매자만 접근 가능합니다.</div>;

  const handleEditClick = (product) => {
    setEditingProductId(product.id);
    const mainImage = product.images?.[0] || "";
    const detailImages = product.images?.slice(1) || [];
    setFormData({
      name: product.name || "",
      category: product.category || "",
      price: Number(product.price) || 0,
      images: [mainImage, ...detailImages],
      description: product.description || "",
      badge: product.badge || "",
      stock: Number(product.stock) || 0,
      discount: Number(product.discount) || 0,
      status: product.status || "판매중",
      delivery: product.delivery || "",
      shippingPeriod: product.shippingPeriod || "",
      returnPolicy: product.returnPolicy || "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async () => {
      if (!formData.name && !formData.category) {
        alert("상품명, 카테고리는 필수 입력입니다.");
        return;
      }
      if (!formData.name) {
        alert("상품명은 필수 입력입니다.");
        return;
      }
      if (!formData.category) {
        alert("카테고리는 필수 입력입니다.");
        return;
      }
      if (formData.price < 100) {
        alert("가격은 100원 이상이어야 합니다.");
        return;
      }
      if (formData.discount >= 100) {
        alert("할인율은 100% 미만이어야 합니다.");
        return;
      }
      if (!formData.delivery) {
        alert("배송은 필수 선택입니다.");
        return;
      }
      if (!formData.shippingPeriod) {
        alert("배송기간은 필수 선택입니다.");
        return;
      }
      if (!formData.returnPolicy) {
        alert("반품/교환은 필수 선택입니다.");
        return;
      }
      
      const productData = {
        ...formData,
        id: editingProductId || Date.now(),
        rating: 0,
        sellerEmail: user.email,
        createdAt: new Date(),
      };
  
      if (editingProductId) {
        onUpdateProduct(productData);
        setEditingProductId(null);
      } else {
          onAddProduct(productData);  // <= 여기서 Firestore 저장이 되어야 함
        }
  
      setIsDialogOpen(false);
      setFormData({
        name: "",
        category: "",
        price: "",
        images: [],
        description: "",
        badge: "",
        stock: 0,
        status: "판매중",
        discount: 0,
        delivery: "",
        shippingPeriod: "",
        returnPolicy: "",
      });
    }

  const deliveryOptions = ["무료배송", "유료배송"];
  const shippingPeriodOptions = ["1-2일", "2-3일", "3-5일"];
  const returnPolicyOptions = ["7일 이내", "30일 이내", "교환 불가"];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* CardHeader */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>판매 수</CardTitle></CardHeader>
          <CardContent>{products.filter(p => p.sellerEmail === user.email).length}개</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>인기 상품 TOP3</CardTitle></CardHeader>
          <CardContent>
            {products
              .filter(p => p.sellerEmail === user.email)
              .sort((a,b) => (b.soldQuantity || 0) - (a.soldQuantity || 0))
              .slice(0,3)
              .map(p => <div key={p.id}>{p.name} ({p.soldQuantity || 0}개)</div>)
            }
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>총 매출</CardTitle></CardHeader><CardContent>
            {products
              .filter(p => p.sellerEmail === user.email)
              .reduce((sum, p) => sum + (p.price * (p.soldQuantity || 0)), 0)
              .toLocaleString()}원
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>총 고객</CardTitle></CardHeader><CardContent>
            {new Set(
              products
                .filter(p => p.sellerEmail === user.email)
                .flatMap(p => p.customers || [])
            ).size}명
          </CardContent>
        </Card>
      </div>

      {/* 판매자 대시보드 */}
      <div className="flex items-center justify-between mb-8">
        <h1>판매자 대시보드</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild onClick={() => {
            setEditingProductId(null);
              setFormData({
                name: "",
                category: "",
                price: "",
                images: [],
                description: "",
                badge: "",
                stock: 0,
                status: "판매중",
                discount: 0,
                delivery: "",
                shippingPeriod: "",
                returnPolicy: "",
              });
          }}>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />상품 추가</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>상품 수정</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="flex flex-col">
                <CustomLabel>상품명</CustomLabel>
                <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1"></Input>
              </div>
              <div className="flex flex-col">
                <CustomLabel>카테고리</CustomLabel>
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="mt-1 w-full border rounded px-3 py-2">
                  <option value="">선택</option>
                  <option value="전자기기">전자기기</option>
                  <option value="음식">음식</option>
                  <option value="패션">패션</option>
                  <option value="홈&리빙">홈&리빙</option>
                  <option value="뷰티">뷰티</option>
                  <option value="스포츠">스포츠</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <CustomLabel>가격</CustomLabel>
                  <Input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })} className="mt-1"></Input>
                </div>
                <div className="flex flex-col">
                  <CustomLabel>할인율 (%)</CustomLabel>
                  <Input type="number" value={formData.discount} onChange={(e) => setFormData({ ...formData, discount: Number(e.target.value) })} className="mt-1"></Input>
                  {formData.discount > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      할인 적용가: {(formData.price * (1 - formData.discount / 100)).toLocaleString()}원
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <CustomLabel>재고</CustomLabel>
                  <Input type="number" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })} className="mt-1"></Input>
              </div>
              <div className="flex flex-col">
                <CustomLabel>상세정보</CustomLabel>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="mt-1 w-full border rounded px-3 py-2 resize-none" rows={4}></textarea>
              </div>
              <div className="flex flex-col">
                <CustomLabel>배지 (선택)</CustomLabel>
                <Input value={formData.badge} onChange={(e) => setFormData({ ...formData, badge: e.target.value })} className="mt-1"></Input>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <CustomLabel>배송</CustomLabel>
                  <div className="flex gap-2 mt-1">
                    {deliveryOptions.map(option => (
                      <Button
                        key={option}
                        variant={formData.delivery === option ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({ ...formData, delivery: option })}
                        >
                          {option}
                        </Button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <CustomLabel>배송기간</CustomLabel>
                  <div className="flex gap-2 mt-1">
                    {shippingPeriodOptions.map(option => (
                      <Button
                        key={option}
                        variant={formData.shippingPeriod === option ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({ ...formData, shippingPeriod: option })}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <CustomLabel>반품/교환</CustomLabel>
                  <div className="flex gap-2 mt-1">
                    {returnPolicyOptions.map(option => (
                      <Button
                        key={option}
                        variant={formData.returnPolicy === option ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({ ...formData, returnPolicy: option })}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4" onClick={handleSubmit}>등록</Button>
            </div>
            </DialogContent>
          </Dialog>
      </div>
      
      { /* 내 상품 목록 */}
      <Card>
        <CardHeader><CardTitle>내 상품 목록</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow>
              <TableHead>ID</TableHead>
              <TableHead>상품명</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>가격</TableHead>
              <TableHead>할인/프로모션</TableHead>
              <TableHead>고객</TableHead>
              <TableHead>재고</TableHead>
              <TableHead>상품 상태</TableHead>
              <TableHead>관리</TableHead>
            </TableRow></TableHeader>

            <TableBody>
              {products.filter(p => p.sellerEmail === user.email).map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.discount > 0 ? `${(p.price * (1 - p.discount / 100)).toLocaleString()}원` : `${p.price.toLocaleString()}원`}</TableCell>
                  <TableCell>{p.discount ? `${p.discount}%` : "-"}</TableCell>
                  <TableCell>{(p.customers || []).length}명</TableCell>
                  <TableCell >{p.stock === 0 ? (<span className="text-red-600 font-semibold">품절</span>) : (`${p.stock}개`)}</TableCell>
                  <TableCell><Badge variant={p.stock === 0 ? "destructive" : "default"}>{p.stock === 0 ? "품절" : "판매중"}</Badge></TableCell>

                  { /* 관리 */}
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" onClick={() => handleEditClick(p)}><Edit className="w-4 h-4"></Edit></Button>
                      <Button size="icon" variant="destructive" onClick={() => onDeleteProduct(p.id)}><Trash2 className="w-4 h-4"></Trash2></Button>
                    </div>
                  </TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
