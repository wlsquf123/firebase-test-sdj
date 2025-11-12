import { useState, useEffect } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export function ProductCard({ product, onAddToCart, onProductClick }) {
  const [rating, setRating] = useState(product.rating || 0);
  const [reviewsCount, setReviewsCount] = useState(product.reviews || 0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsRef = collection(db, "reviews");
        const q = query(reviewsRef, where("productId", "==", product.id));
        const querySnapshot = await getDocs(q);
        const reviews = querySnapshot.docs.map(doc => doc.data());
        setReviewsCount(reviews.length);

        if (reviews.length > 0) {
          const avgRating =
            reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length;
          setRating(avgRating);
        }
      } catch (error) {
        console.error("리뷰 불러오기 실패:", error);
      }
    };

    fetchReviews();
  }, [product.id]);

  const discountedPrice = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div 
        className="relative overflow-hidden aspect-square bg-gray-100"
        onClick={() => onProductClick(product)}
      >
        <ImageWithFallback
          src={product.mainImage}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
            {product.badge}
          </Badge>
        )}

        {product.discount > 0 && (
          <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600">
            -{product.discount}%
          </Badge>
        )}
      </div>

      <CardContent className="p-4" onClick={() => onProductClick(product)}>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviewsCount})</span>
        </div>

        <div className="flex items-baseline gap-2">
          {product.discount > 0 ? (
            <>
              <span className="text-red-500 font-semibold">
                {discountedPrice.toLocaleString()}원
              </span>
              <span className="text-sm text-gray-400 line-through">
                {product.price.toLocaleString()}원
              </span>
            </>
          ) : (
            <span className="text-red-500 font-semibold">{product.price.toLocaleString()}원</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          장바구니 담기
        </Button>
      </CardFooter>
    </Card>
  );
}
