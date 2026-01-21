import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">play_circle</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Teraflix</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Como funciona', 'Planos', 'Terapeutas'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-10 items-center justify-center rounded-lg border border-primary/50 bg-transparent px-6 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-black hover:border-primary">
              Login
            </button>
            <button className="md:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;