import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export function Header({ onNavigate, cartItemCount, currentPage, user, onLogout }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
              S
            </div>
            <span className="text-xl">쇼피</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
              className="hidden md:inline-flex"
            >
              홈
            </Button>
            <Button
              variant={currentPage === 'orders' ? 'default' : 'ghost'}
              onClick={() => onNavigate('orders')}
              className="hidden md:inline-flex"
            >
              주문내역
            </Button>

            {/* 관리자 버튼 */}
            {user?.isAdmin && (
            <Button
              variant={currentPage === 'admin' ? 'default' : 'ghost'}
              onClick={() => onNavigate('admin')}
              className="hidden md:inline-flex"
            >
            관리자
          </Button>
          )}

          {/* 판매자 버튼 */}
          {user?.isSeller && (
          <Button 
            variant={currentPage === 'seller' ? 'default' : 'ghost'}
            onClick={() => onNavigate("seller")}
            className="hidden md:inline-flex"
            >
            판매자
          </Button>
          )}
            
            <Button
              variant={currentPage === 'cart' ? 'default' : 'ghost'}
              size="icon"
              className="relative"
              onClick={() => onNavigate('cart')}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>

            <Button
              variant={currentPage === 'mypage' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => onNavigate('mypage')}
              
            ><User className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
