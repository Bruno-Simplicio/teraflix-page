import React from 'react';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Ecosystem from './components/Ecosystem';
import Authority from './components/Authority';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white">
      <Hero />
      <Catalog />
      <Ecosystem />
      <Authority />
      <Pricing />
      
      {/* Global Footer */}
      <footer className="w-full border-t border-white/5 bg-black/40 backdrop-blur-sm z-10 mt-auto">
        <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-6 rounded text-primary">
              <span className="material-symbols-outlined text-2xl">play_circle</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">TERAFLIX</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a className="text-neutral-500 hover:text-primary text-xs transition-colors" href="#">Termos de Uso</a>
            <a className="text-neutral-500 hover:text-primary text-xs transition-colors" href="#">Política de Privacidade</a>
            <a className="text-neutral-500 hover:text-primary text-xs transition-colors" href="#">Central de Ajuda</a>
          </div>
          <p className="text-neutral-600 text-xs font-normal">
            © 2024 Teraflix Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;