import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
    >
      
      <div className="bg-gray-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center h-48 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wider">
          {product.brand}
        </span>
        <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="font-black text-lg text-gray-900">${product.price}</span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">${product.oldPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-gray-700">{product.rating}</span>
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation(); 
            dispatch(addToCart(product)); 
            
            toast.success(`${product.name} added to cart!`, {
              icon: '🛍️',
            });
          }}
          className="w-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-2.5 rounded-xl transition-colors duration-300 text-sm"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;