import ProductCard from './ProductCard';
import api from '../api'; 
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const fetchProducts = async (searchTerm) => {
  const response = await api.get('/products', {
    params: { name: searchTerm }
  });
  return response.data;
};

const ProductList = () => {
  const { searchTerm } = useSelector((state) => state.search);

  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ['products', searchTerm], 
    queryFn: () => fetchProducts(searchTerm),
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
          {searchTerm ? `Search Results for "${searchTerm}"` : "Trending Products"}
        </h2>
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        </div>
      )}

      {isError && (
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl text-center font-bold">
          Sunucuya bağlanılamadı: {error.message}
        </div>
      )}

      {products && products.length === 0 && (
        <div className="text-center py-20 text-gray-500 font-medium text-lg">
          No products found matching your search.
        </div>
      )}

      {products && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((urun) => (
            <ProductCard key={urun.id} product={urun} />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductList;