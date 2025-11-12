import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Search } from "lucide-react";

export function ProductList({ products, onAddToCart, onProductClick }) {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortOption, setSortOption] = useState("기본");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["전체", "전자기기", "음식", "패션", "홈&리빙", "뷰티", "스포츠", "기타"];
  const sortOptions = ["기본", "가격 낮은순", "가격 높은순", "최신순"];

  // 카테고리 필터 + 검색어 필터
  const filteredProducts = products
    .filter(p => selectedCategory === "전체" || p.category === selectedCategory)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    
    // 정렬 적용
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch(sortOption) {
        case "가격 낮은순":
          return a.price - b.price;
          case "가격 높은순":
        return b.price - a.price;
        case "최신순":
          return b.id - a.id;
          default:
            return 0;
          }
        });

        const scrollToSection = (sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        };
        
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
          <div>
            <h1 className="mb-4">쇼피에 오신 것을 환영합니다</h1>
            <p className="text-xl mb-6">다양한 상품을 합리적인 가격에 만나보세요</p>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection("product-list")}>
              지금 쇼핑하기
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className= "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* 검색창 */}
        <div className="relative inline-block w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="상품명으로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-3 py-2 w-full pl-10"
        />
        </div>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="whitespace-nowrap" id="product-list">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
          
        {/* 정렬 박스 */}
        <div className="flex items-center gap-2">
          <label className="text-gray-600">정렬:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded px-2 py-1"
          >
            {sortOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onProductClick={onProductClick}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">해당 카테고리에 상품이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
