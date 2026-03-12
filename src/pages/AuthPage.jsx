import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../store/authSlice';
import toast from 'react-hot-toast';
import { LogIn, UserPlus, Loader2 } from 'lucide-react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false)

    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

// Form gönderildiğinde çalışacak asıl fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const endpoint = isLogin ? 'authenticate' : 'register';
      const url = `http://localhost:8080/api/auth/${endpoint}`;

      const response = await axios.post(url, formData);
      console.log("JAVA'DAN GELEN CEVAP:", response);

      if (response.data && response.data.token) {
        dispatch(loginSuccess(response.data.token));
        toast.success(isLogin ? 'Welcome back!' : 'Registration successful!');
        navigate('/'); 
      } else {
        toast.error("Java'dan bilet (token) gelmedi!");
      }

    } catch (error) {
      console.error("GİRİŞ/KAYIT HATASI:", error);
      toast.error('İşlem başarısız! Bilgilerini kontrol et.');
    } finally {
      setIsLoading(false);
    }
  };
    return (
        <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {isLogin ? <LogIn className="w-8 h-8 text-blue-600" /> : <UserPlus className="w-8 h-8 text-blue-600" />}
              </div>
              <h2 className="text-3xl font-black text-gray-900">
                {isLogin ? 'Welcome Back' : 'Create an Account'}
              </h2>
              <p className="text-gray-500 mt-2">
                {isLogin ? 'Enter your details to access your account.' : 'Sign up to get started with Technovo.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" required={!isLogin} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="••••••••" />
              </div>

              <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition duration-300 flex justify-center items-center shadow-lg shadow-blue-500/30 mt-4">
                {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : (isLogin ? 'Sign In' : 'Sign Up')}
              </button>
            </form>

            <div className="mt-8 text-center text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 font-bold hover:underline">
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </div>

          </div>
        </div>
      );
};

export default AuthPage;