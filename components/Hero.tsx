import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="https://brunosimplicio.com.br/wp-content/uploads/2026/01/capatera.jpg" />
          <img 
            src="https://brunosimplicio.com.br/wp-content/uploads/2026/01/hero-Teraflix.jpg" 
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
          />
        </picture>
        
        {/* Gradient Overlays for Readability and Mood */}
        <div className="absolute inset-0 bg-background-dark/30"></div> 
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div> 
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div> 
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl pb-12 pt-24 md:pt-32">
        <div className="flex flex-col max-w-3xl gap-6 md:gap-8">
          
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90">Novo catálogo disponível</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Sua terapia começa quando você <span className="bg-gradient-to-r from-primary to-[#fcd385] bg-clip-text text-transparent">aperta o play.</span>
            </h1>
            <p className="max-w-xl text-base font-normal leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              O primeiro streaming que trata sua ansiedade, cura seus traumas e blinda seus relacionamentos. A profundidade da clínica, na palma da sua mão.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center pt-4">
            <button className="group relative flex h-14 min-w-[200px] items-center justify-center overflow-hidden rounded-xl bg-primary px-8 text-base font-bold text-background-dark shadow-[0_0_20px_rgba(240,184,88,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(240,184,88,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                COMEÇAR AGORA
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4 text-sm text-[#c8b592]/80 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] fill-1">verified_user</span>
              <span>Cancele quando quiser.</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-white/20"></span>
            <span>7 dias grátis</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] font-bold uppercase tracking-widest">Descubra</span>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;