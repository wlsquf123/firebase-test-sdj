import { useState, useEffect  } from "react";
import { Package, DollarSign, Users, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

// firebase import
import { collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export function AdminDashboard({ products, onDeleteProduct, user }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const handleDeleteProduct = async (productId) => {
    await onDeleteProduct(productId);
};

  const handleToggleSeller = async (userId) => {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    await updateDoc(userRef, { isSeller: !userDoc.data().isSeller });
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, isSeller: !u.isSeller } : u));
  };

  const handleDeleteUser = async (userId) => {
    await deleteDoc(doc(db, "users", userId));
    setUsers(prev => prev.filter(u => u.id !== userId));
  };

  useEffect(() => {
  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };
  fetchUsers();
}, []);

  const isAdmin = user?.isAdmin === true;
  if (!user) return <div className="text-center py-8">Loading...</div>;
  if (!isAdmin) { return <div className="text-center py-8 text-red-600">⚠ 접근 권한이 없습니다.</div>;}

  const stats = [
    {
      title: "총 상품",
      value: products.length,
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "총 매출",
      value: "₩0",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "총 고객",
      value: "0",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "전월 대비",
      value: "+0%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1>관리자 대시보드</h1>
        <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
          <DialogTrigger asChild>
            <Button variant="outline">관리</Button>
          </DialogTrigger>

          <DialogContent className="w-full max-w-6xl mx-auto">
          <DialogHeader>
            <DialogTitle>사용자 관리</DialogTitle>
          </DialogHeader>
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>닉네임</TableHead>
                  <TableHead>이메일</TableHead>
                  <TableHead>판매자 권한</TableHead>
                  <TableHead className="text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.isSeller ? <Badge variant="default">판매자</Badge> : "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline" onClick={() => handleToggleSeller(user.id)}>
                          {user.isSeller ? "판매자 해제" : "판매자 권한 부여"}
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeleteUser(user.id)}>
                          삭제
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
          {/* 🔥 추가 끝 */}
        </Dialog>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-gray-600">{stat.title}</CardTitle>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl ${stat.color}`}>{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>상품 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>상품명</TableHead>
                  <TableHead>카테고리</TableHead>
                  <TableHead>가격</TableHead>
                  <TableHead>배지</TableHead>
                  <TableHead className="text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="max-w-xs truncate">{product.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.category}</Badge>
                    </TableCell>
                    <TableCell>{product.price.toLocaleString()}원</TableCell>
                    <TableCell>
                      {product.badge && <Badge>{product.badge}</Badge>}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        삭제
                      </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
