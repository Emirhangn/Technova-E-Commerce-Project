const Hero = () => {
  return (
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      
      <div className="bg-blue-100 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">

        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Discover Tomorrow's <br /> Technology, Today
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-blue-500/30">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end gap-4 z-10">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" 
            alt="Premium Headphones" 
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition duration-500" 
          />
          <img 
            src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop" 
            alt="Smart Device" 
            className="w-40 h-40 object-cover rounded-2xl shadow-xl mt-12 transform rotate-6 hover:rotate-0 transition duration-500 hidden sm:block" 
          />
        </div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

    </div>
  );
};

export default Hero;