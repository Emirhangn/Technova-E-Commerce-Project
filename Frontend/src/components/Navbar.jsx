import { Search, User, ShoppingCart, LogOut } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { toggleCart } from '../store/cartSlice';
import { setSearchTerm } from '../store/searchSlice';
import { logout } from '../store/authSlice';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
        
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-black text-gray-900 tracking-tighter">
                TECHNOVO
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Shop</Link>
            <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">New Arrivals</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Brands</a>
          </div>
          <div className="hidden lg:flex flex-1 max-w-md ml-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                className="block w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-full text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                placeholder="Search products..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-6 ml-6">
            {isAuthenticated ? (
              <button 
                onClick={handleLogout} 
                className="flex items-center space-x-1 text-red-500 hover:text-red-700 transition-colors font-medium"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-sm">Çıkış</span>
              </button>
            ) : (
              <Link to="/auth" className="text-gray-600 hover:text-blue-600 transition-colors">
                <User className="h-5 w-5" />
              </Link>
            )}
            <button 
              onClick={() => dispatch(toggleCart())}
              className="text-gray-600 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartTotalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-blue-600 rounded-full border-2 border-white">
                  {cartTotalQuantity}
                </span>
              )}
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;