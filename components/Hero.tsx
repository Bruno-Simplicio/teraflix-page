import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded text-primary">
                <span className="material-symbols-outlined text-3xl">play_circle</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Teraflix</span>
            </div>
            {/* Navigation (Hidden on mobile) */}
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#como-funciona">Como funciona</a>
              <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#planos">Planos</a>
              <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#terapeutas">Terapeutas</a>
            </nav>
            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex h-10 items-center justify-center rounded-lg border border-primary/50 bg-transparent px-6 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-black hover:border-primary">
                Login
              </button>
              <button className="sm:hidden text-white">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="relative flex min-h-screen w-full items-center justify-center pt-20">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP5iWnNDlWxZy-TeDO50hzrUstD29kGbzF_-qEecwphyluME3e-n0pOi51Cl8i73Q6AFUgsu3lrtadv_ezRRUrnomUf4JLZoMYTIiPqM4JAFUH0q3m75K6Z1anGkBPJZVmtMj3hpIHuPy1RDIexSqRG3hATHLIqpShJQBFyj-jAKuiMaMZaKuIFXrFKdY8Gi5Bw4F-HjwKOs85bcKt7L9UO0q7bJzegVni7fuKKhxohn3L8lHJdyYAp3xyJ0D0bOswtifkWprJkubS')"}}
            aria-label="Cinematic dark shot of a calm person sitting in a dimly lit living room looking thoughtful"
          ></div>
          <div className="absolute inset-0 bg-black/40"></div> 
          <div className="absolute inset-0 hero-overlay"></div> 
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Hero Content Text */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl pb-12 pt-24 md:pt-32">
          <div className="flex flex-col max-w-3xl gap-6 md:gap-8 animate-fade-in-up">
            {/* Badge/Tag */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-white/80">Novo catálogo disponível</span>
            </div>
            
            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transforme sua sala em <span className="text-gradient-gold">consultório.</span>
              </h1>
              <p className="max-w-xl text-base font-normal leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                O primeiro streaming que trata sua ansiedade, cura seus traumas e blinda seus relacionamentos. Tudo num só app.
              </p>
            </div>

            {/* CTA Area */}
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center pt-4">
              <button className="group relative flex h-14 min-w-[200px] items-center justify-center overflow-hidden rounded-xl bg-primary px-8 text-base font-bold text-background-dark shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black">
                <span className="relative z-10 flex items-center gap-2">
                  COMEÇAR AGORA
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
              </button>
              <a className="flex h-14 items-center justify-center rounded-xl px-6 text-sm font-semibold text-white transition-colors hover:text-primary sm:justify-start" href="#">
                <span className="material-symbols-outlined mr-2">play_arrow</span>
                Ver trailer
              </a>
            </div>

            {/* Trust / Microcopy */}
            <div className="flex items-center gap-4 text-sm text-[#c8b592]/80">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Cancele quando quiser.</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-white/20"></span>
              <span>7 dias grátis</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs font-medium uppercase tracking-widest">Descubra</span>
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Featured Gradient Strip */}
      <div className="h-24 w-full bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A]"></div>
    </div>
  );
};

export default Hero;