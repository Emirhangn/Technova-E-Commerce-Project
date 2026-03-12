import { useParams } from 'react-router-dom';
import { Star, Loader2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchProduct = async (id) => {
  const response = await axios.get(`http://localhost:8080/api/products/${id}`);
  return response.data;
};

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id), 
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-32">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-500 font-medium">Loading product details...</p>
      </div>
    );
  }

  if (isError || !product) {
    return <div className="text-center mt-32 text-2xl font-bold text-gray-500">Product not found!</div>;
  }


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-12">
        
        <div className="md:w-1/2 bg-gray-50 rounded-2xl p-8 flex items-center justify-center h-[500px]">
          <img src={product.image} alt={product.name} className="max-h-full object-contain mix-blend-multiply" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <span className="text-blue-600 font-bold mb-2 uppercase tracking-wider text-sm">{product.brand}</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-yellow-700">{product.rating}</span>
            </div>
            <span className="text-gray-500 text-sm underline cursor-pointer">{product.reviews} reviews</span>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-black text-gray-900">${product.price}</span>
            {product.oldPrice && <span className="text-xl text-gray-400 line-through ml-4">${product.oldPrice}</span>}
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience high-fidelity audio with the {product.name}. Featuring industry-leading noise cancellation, exceptional comfort, and premium design for the ultimate listening experience.
          </p>

          <div className="flex gap-4">
            <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
              <button className="text-gray-500 hover:text-black font-bold text-xl px-2">-</button>
              <span className="mx-4 font-bold text-lg">1</span>
              <button className="text-gray-500 hover:text-black font-bold text-xl px-2">+</button>
            </div>
            <button 
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(`${product.name} added to cart!`, { icon: '🛍️' });
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition duration-300 shadow-lg shadow-blue-500/30"
            >
              Add to Cart
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;