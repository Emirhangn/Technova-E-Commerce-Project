import { useState } from 'react';
import api from '../api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Trash2, PlusCircle, Loader2 } from 'lucide-react';

const AdminPanel = () => {
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        name: "", price: "", image: "", brand: "", rating: 5.0, reviews: 0
    });

    const {data: products, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await api.get('/products'); 
            return res.data;
        }
    });
    const addMutation = useMutation({
        mutationFn: (newProduct) => api.post('/products', newProduct),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            toast.success('Product added successfully!');
            setFormData({ name: '', price: '', image: '', brand: '', rating: 5.0, reviews: 0 });
        },
        onError: (error) => {
            toast.error("Ürün eklenemedi! (Hata: " + error.response?.status + ")");
        }
    });
    const deleteMutation = useMutation({
        mutationFn: (id) => api.delete(`/products/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            toast.success('Product deleted!');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.price) return toast.error('Name and Price are required!');
        addMutation.mutate(formData);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
            <h1 className="text-3xl font-black text-gray-900 mb-8">Admin Dashboard</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-1 h-fit">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><PlusCircle className="text-blue-600"/> Add New Product</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. PlayStation 5" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                            <input type="text" value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Sony" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                            <input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 499.99" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://..." />
                        </div>
                        <button type="submit" disabled={addMutation.isPending} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300">
                            {addMutation.isPending ? 'Adding...' : 'Save Product'}
                        </button>
                    </form>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h2 className="text-xl font-bold mb-4">Manage Products</h2>
                    {isLoading ? (
                        <div className="flex justify-center py-10"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-100 text-gray-500 text-sm">
                                        <th className="pb-3 font-semibold">Image</th>
                                        <th className="pb-3 font-semibold">Name</th>
                                        <th className="pb-3 font-semibold">Price</th>
                                        <th className="pb-3 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map(product => (
                                        <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="py-3"><img src={product.image} alt="img" className="w-12 h-12 object-contain rounded-md bg-white p-1 border border-gray-100" /></td>
                                            <td className="py-3 font-medium text-gray-800">{product.name}</td>
                                            <td className="py-3 text-gray-600">${product.price}</td>
                                            <td className="py-3 text-right">
                                                <button onClick={() => deleteMutation.mutate(product.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AdminPanel;