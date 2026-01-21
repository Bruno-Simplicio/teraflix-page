import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black z-10">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white tracking-tighter flex items-center gap-2">
           <span className="material-symbols-outlined text-primary">play_circle</span>
           TERAFLIX
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {['Termos de Uso', 'Política de Privacidade', 'Central de Ajuda'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-neutral-500 hover:text-primary text-xs transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        
        <p className="text-neutral-600 text-xs font-normal">
          © 2024 Teraflix Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;