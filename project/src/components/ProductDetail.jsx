import { useState, useEffect  } from "react";
import { Star, ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ReviewSection } from "./ReviewSection";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export function ProductDetail({ product, onAddToCart, user }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [averageRating, setAverageRating] = useState(product.rating || 0);
  const [reviewCount, setReviewCount] = useState(product.reviews || 0);

  const images = product.detailImages && product.detailImages.length > 0 
    ? product.detailImages 
    : product.mainImage 
    ? [product.mainImage] 
    : [];

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const discountedPrice = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsSnapshot = await getDocs(collection(db, "reviews"));
      const productReviews = reviewsSnapshot.docs
        .map(doc => doc.data())
        .filter(r => r.productId === product.id);

      if (productReviews.length > 0) {
        const avg = productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
        setAverageRating(avg);
        setReviewCount(productReviews.length);
      }
    };

    fetchReviews();
  }, [product.id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            {images.length > 0 ? (
              <ImageWithFallback
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                이미지 없음
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  selectedImage === idx ? 'border-blue-600' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(idx)}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary">{product.category}</Badge>
            {product.badge && (
              <Badge className="bg-red-500 hover:bg-red-600">{product.badge}</Badge>
            )}
          </div>

          <h1 className="mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {averageRating.toFixed(1)} ({reviewCount} 리뷰)
            </span>
          </div>

          <Separator className="my-4" />

          <div className="mb-6">
            {product.discount > 0 && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 line-through">
                  {product.price.toLocaleString()}원
                </span>
                <Badge className="bg-orange-500 hover:bg-orange-600">
                  {product.discount}% 할인
                </Badge>
              </div>
            )}
            <div className="text-blue-600 text-3xl">
              {discountedPrice.toLocaleString()}원
            </div>
          </div>

          <Separator className="my-4" />

          {/* Quantity Selector */}
          <div className="mb-6">
            <p className="mb-2 text-gray-700">수량</p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="w-16 text-center">{quantity}</div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-4">
            <Button
              className="flex-1"
              size="lg"
              onClick={() => onAddToCart(product, quantity)}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              장바구니 담기
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          <Button className="w-full" size="lg" variant="secondary">
            바로 구매하기
          </Button>

          <Separator className="my-6" />

          {/* Delivery Info */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">배송</span>
              <span>{product.delivery}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span></span>
              <span>30,000원 이상 구매 시 무료배송</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">배송기간</span>
              <span>{product.shippingPeriod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">반품/교환</span>
              <span>{product.returnPolicy}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Tabs: Description & Reviews */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="description" className="flex-1">상품설명</TabsTrigger>
          <TabsTrigger value="reviews" className="flex-1">리뷰 ({reviewCount})</TabsTrigger>
          {/* <TabsTrigger value="qna" className="flex-1">Q&A</TabsTrigger>*/}
        </TabsList>

        <TabsContent value="description" className="py-8">
          <div className="prose max-w-none">
            <h3>상품 상세 정보</h3>
            <p>{product.description || "상품 상세 정보가 없습니다."}</p>

            {product.features && product.features.length > 0 && (
              <>
                <h3>주요 특징</h3>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="py-8">
          <ReviewSection
            productId={product.id}
            reviews={product.reviews}
            rating={product.rating}
            user={user} 
          />
        </TabsContent>

        {/*
        <TabsContent value="qna" className="py-8">
          <div className="text-center py-12 text-gray-500">
            아직 등록된 질문이 없습니다.
          </div>
        </TabsContent>
          */}
      </Tabs>
    </div>
  );
}
