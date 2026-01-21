import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-background-dark py-20 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
            Muito mais que streaming. <br />
            <span className="bg-gradient-to-r from-primary via-[#f3dba6] to-primary bg-clip-text text-transparent">Um ecossistema de cura.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
            Tecnologia e suporte humano integrados para acelerar sua evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
          
          {/* Card 1: SOS */}
          <div className="group relative rounded-[2rem] bg-[#141414] border border-border-dark overflow-hidden flex flex-col justify-between p-8 md:p-10 h-[420px] hover:border-primary/30 transition-all duration-500 hover:bg-[#1a1a1a]">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex flex-col gap-5 w-full relative z-10 mt-4">
              <div className="flex justify-end w-full animate-float">
                <div className="bg-[#2a2a2a]/90 backdrop-blur-md border border-white/5 text-gray-200 px-5 py-3 rounded-2xl rounded-tr-sm shadow-lg max-w-[85%]">
                  <p className="text-sm font-medium">Estou com crise de ansiedade</p>
                </div>
              </div>
              <div className="flex justify-start w-full animate-float-delayed">
                <div className="bg-primary/10 backdrop-blur-md border border-primary/20 text-primary px-5 py-3 rounded-2xl rounded-tl-sm shadow-[0_0_15px_rgba(240,184,88,0.05)] flex items-center gap-3 max-w-[85%]">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm">psychology</span>
                  </div>
                  <p className="text-sm font-medium">Respira, vou te ajudar...</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 mt-auto">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-serif font-bold text-white">SOS Emocional 24h</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md">
                A crise não tem hora marcada... Nossa IA está pronta para te acolher às 3h da manhã.
              </p>
            </div>
          </div>

          {/* Card 2: Community */}
          <div className="group relative rounded-[2rem] bg-[#141414] border border-border-dark overflow-hidden flex flex-col justify-end h-[420px] hover:border-primary/30 transition-all duration-500">
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-[0.4] contrast-125 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-10 space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Você não está só</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                  A solidão piora a dor... ambiente seguro, moderado por especialistas, sem julgamentos.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-600 overflow-hidden">
                             <img src={`https://picsum.photos/100/100?random=${i}`} alt="User" className="w-full h-full object-cover" />
                         </div>
                    ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg leading-none">+2k</span>
                  <span className="text-primary text-[10px] uppercase tracking-wider font-bold">Membros Ativos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Gamification */}
          <div className="group relative rounded-[2rem] bg-[#141414] border border-border-dark overflow-hidden flex flex-col justify-between p-8 md:p-10 h-[420px] hover:border-primary/30 transition-all duration-500 hover:bg-[#1a1a1a]">
            <div className="absolute -left-10 -bottom-10 w-[200px] h-[200px] bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="w-full relative z-10 mt-2">
              <div className="bg-black/40 rounded-2xl border border-white/10 p-6 shadow-xl backdrop-blur-sm group-hover:border-primary/20 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Nível Atual</span>
                    <span className="text-3xl font-bold text-white flex items-baseline gap-1">15 <span className="text-sm font-normal text-gray-600">/ 100</span></span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(240,184,88,0.15)] transform group-hover:-translate-y-1 transition-transform">
                    <span className="material-symbols-outlined text-primary text-2xl">emoji_events</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-primary">Próxima Conquista</span>
                    <span className="text-white">85%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                    <div className="bg-gradient-to-r from-primary/60 via-primary to-primary h-full rounded-full w-[85%] shadow-[0_0_15px_rgba(240,184,88,0.4)] relative">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-primary text-sm">lock_open</span>
                <span className="text-xs text-gray-400 font-medium">Recompensa: <span className="text-white">Mentoria em Grupo</span></span>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 mt-auto">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Gamificação</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Ganhe recompensas reais ao completar episódios e protocolos.
              </p>
            </div>
          </div>

          {/* Card 4: Protocolos */}
          <div className="group relative rounded-[2rem] bg-[#141414] border border-border-dark overflow-hidden flex flex-col justify-between p-8 md:p-10 h-[420px] hover:border-primary/30 transition-all duration-500 hover:bg-[#1a1a1a]">
            <div className="w-full relative z-10 flex-1 flex flex-col justify-center py-4">
              <div className="relative flex flex-col gap-6 pl-4">
                <div className="absolute left-[1.95rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent"></div>
                
                <div className="flex items-center gap-4 group/step z-10">
                  <div className="w-8 h-8 rounded-full bg-[#211b11] border border-primary/40 flex items-center justify-center text-primary text-xs font-bold shadow-[0_0_10px_rgba(240,184,88,0.2)]">1</div>
                  <div className="text-xs text-white font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/5">Identificar Gatilho</div>
                </div>
                <div className="flex items-center gap-4 group/step z-10">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-500 text-xs font-bold group-hover:border-primary/50 group-hover:text-primary transition-colors">2</div>
                  <div className="text-xs text-gray-400 font-medium">Aplicar Técnica</div>
                </div>
                <div className="flex items-center gap-4 group/step z-10 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-600 text-xs font-bold">3</div>
                  <div className="text-xs text-gray-500 font-medium">Avaliar Alívio</div>
                </div>
              </div>
            </div>

            <div className="absolute top-8 right-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#211b11] to-black border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(240,184,88,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-2xl text-primary">medical_services</span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-auto border-t border-white/5">
              <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">Protocolos de <br/> Alívio Rápido</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Ferramentas passo a passo para hackear seu sistema nervoso e dissolver crises em minutos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;