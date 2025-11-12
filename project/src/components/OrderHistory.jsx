import { Package, Truck, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const statusConfig = {
  pending: { label: '결제대기', color: 'bg-gray-500', icon: Package },
  processing: { label: '상품준비중', color: 'bg-blue-500', icon: Package },
  shipped: { label: '배송중', color: 'bg-purple-500', icon: Truck },
  delivered: { label: '배송완료', color: 'bg-green-500', icon: CheckCircle },
  cancelled: { label: '취소', color: 'bg-red-500', icon: XCircle }
};

const mockOrders = [];

export function OrderHistory() {
  const renderOrderCard = (order) => {
    const config = statusConfig[order.status];
    const Icon = config.icon;

    return (
      <Card key={order.id} className="mb-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg mb-1">주문번호: {order.id}</CardTitle>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <Badge className={`${config.color} hover:${config.color}`}>
              <Icon className="w-3 h-3 mr-1" />
              {config.label}
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 mb-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    {item.price.toLocaleString()}원 × {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">총 결제금액</span>
            <span className="text-blue-600">{order.total.toLocaleString()}원</span>
          </div>

          {order.trackingNumber && (
            <div className="mb-4 p-3 bg-gray-50 rounded text-sm">
              <span className="text-gray-600">송장번호: </span>
              <span>{order.trackingNumber}</span>
            </div>
          )}

          <div className="flex gap-2">
            {order.status === 'shipped' && (
              <Button variant="outline" className="flex-1">배송조회</Button>
            )}
            {order.status === 'delivered' && (
              <>
                <Button variant="outline" className="flex-1">교환/반품</Button>
                <Button className="flex-1">리뷰 작성</Button>
              </>
            )}
            {order.status === 'processing' && (
              <Button variant="outline" className="flex-1">주문취소</Button>
            )}
            <Button variant="outline">상세보기</Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8">주문 내역</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="processing">배송중</TabsTrigger>
          <TabsTrigger value="delivered">배송완료</TabsTrigger>
          <TabsTrigger value="cancelled">취소/반품</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {mockOrders.length > 0 ? (
            mockOrders.map(renderOrderCard)
          ) : (
            <Card>
              <CardContent className="py-16 text-center">
                <Package className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 mb-4">주문 내역이 없습니다.</p>
                <Button>쇼핑 시작하기</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="processing">
          {mockOrders
            .filter(o => ['processing', 'shipped'].includes(o.status))
            .map(renderOrderCard)}
        </TabsContent>

        <TabsContent value="delivered">
          {mockOrders
            .filter(o => o.status === 'delivered')
            .map(renderOrderCard)}
        </TabsContent>

        <TabsContent value="cancelled">
          {mockOrders
            .filter(o => o.status === 'cancelled')
            .map(renderOrderCard)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
