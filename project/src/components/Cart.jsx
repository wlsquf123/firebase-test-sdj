import { useState, useEffect } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase";


export function Cart({cartItems, setCartItems, onUpdateQuantity, onRemoveItem, onToggleSelect, onToggleSelectAll, onCheckout, handleNavigate, user  }) {

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;
  
      const snapshot = await getDocs(collection(db, "carts"));
      const items = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(item => item.userId === auth.currentUser.uid);
        setCartItems(items);
    };
  
    fetchCart();
  }, [user]);

  const selectedItems = cartItems.filter(item => item.selected);
  const totalPrice = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = totalPrice >= 30000 ? 0 : 3000;
  const finalPrice = totalPrice + deliveryFee;

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8">장바구니</h1>

      {cartItems.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <p className="text-gray-500 mb-4">장바구니가 비어있습니다.</p>
            <Button onClick={() => handleNavigate('home')}>쇼핑 계속하기</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={onToggleSelectAll}
                  />
                  <span>전체선택 ({selectedItems.length}/{cartItems.length})</span>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <Checkbox
                        checked={item.selected}
                        onCheckedChange={() => onToggleSelect(item.id)}
                      />

                      <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="mb-2 truncate">{item.name}</h3>
                        <p className="text-blue-600 mb-3">
                          {item.price.toLocaleString()}원
                        </p>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h2 className="mb-4">주문 요약</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">상품금액</span>
                    <span>{totalPrice.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">배송비</span>
                    <span>
                      {deliveryFee === 0 ? '무료' : `${deliveryFee.toLocaleString()}원`}
                    </span>
                  </div>
                  {deliveryFee > 0 && (
                    <p className="text-xs text-gray-500">
                      30,000원 이상 구매 시 무료배송
                    </p>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between mb-6">
                  <span>총 결제금액</span>
                  <span className="text-blue-600 text-xl">
                    {finalPrice.toLocaleString()}원
                  </span>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  disabled={selectedItems.length === 0}
                  onClick={onCheckout}
                >
                  {selectedItems.length}개 상품 주문하기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
