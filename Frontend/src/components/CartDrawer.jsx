import { X, Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeFromCart } from '../store/cartSlice';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { cartItems, isCartOpen, cartTotalQuantity } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.cartQuantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={() => dispatch(toggleCart())}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-black text-gray-900">Your Cart ({cartTotalQuantity} Items)</h2>
          <button 
            onClick={() => dispatch(toggleCart())}
            className="p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-lg font-medium">Your cart is empty.</p>
              <button onClick={() => dispatch(toggleCart())} className="mt-4 text-blue-600 font-bold hover:underline">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center border-b border-gray-50 pb-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">Qty: {item.cartQuantity}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => dispatch(removeFromCart(item))}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-black text-gray-900 border-t border-gray-200 pt-4 mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-blue-500/30">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;