import React from 'react';

const Ecosystem = () => {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col gap-16 px-4 md:px-8 py-16 bg-background-dark">
      <div className="flex flex-col items-center text-center space-y-4 pt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
          Muito mais que streaming. <br/>
          <span className="text-primary bg-gradient-to-r from-primary via-[#f3dba6] to-primary bg-clip-text text-transparent">Um ecossistema de cura.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
          Tecnologia e suporte humano integrados para acelerar sua evolução.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {/* Large Feature Card */}
        <div className="group relative md:col-span-2 md:row-span-2 rounded-3xl bg-card-dark overflow-hidden border border-white/5 cinematic-shadow">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Cinematic Scene" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiKoEJ992Di7Djvc_TUKTp0BE7johwpe4r1MqnvzJ2NkvcrEnhSwBOq08j9Zh24BvPmWQpUALgC-f33nMJCSeBXtAO3hbtcg4XTrOf_Lq1oK1ux8inDwYJgSadGDV3yn352EcnXFX0KUyHDKmoEeoxvQMHX5_Zu2pZIxVLkDcrrc0e2JLMLUVj-_aOuaRKxFQgX0qbMi2DLOXTfwQKVqSj_aJDgMlxFkXRgakVifMKX4jfpfwv8I5epUKMzt3Sn7H1dkpwI2MaD2BP"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
                Original Teraflix
              </span>
            </div>
            <div className="space-y-6 max-w-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
                  A Arquitetura <br/> do Vínculo
                </h2>
                <div className="h-1 w-20 bg-primary mt-4 mb-4 rounded-full"></div>
              </div>
              <p className="text-gray-300 text-sm md:text-base line-clamp-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                Uma série documental inovadora sobre como os laços invisíveis moldam nossa saúde mental e emocional.
              </p>
              <button className="flex items-center gap-3 bg-white text-black hover:bg-primary transition-all duration-300 px-6 py-3 rounded-full font-bold text-sm group-hover:pl-8">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                Assistir Trailer
              </button>
            </div>
          </div>
        </div>

        {/* Community Card */}
        <div className="group relative md:col-span-1 md:row-span-3 rounded-3xl bg-card-dark overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Comunidade" 
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAujtcrOdlQTUSaQFOQXwmOykCVd-Z8TiwtYqpUbNR91XGgeREOIde85stI2XXhu6amVe9CCU8ENq7QZ2xoCrtPrunOYTVAONJrrx5Xx8gp0e0u0-4pI5VDGbELD6LazQ9FsG0sPn4ytN7uEPE2d1q33KvWZDkfcU74Ml2vS3CHoFNABM6BRdnG5HxWhhMo26Q8-ItILeFeb5p5jl5oRm2wotaBvEUyBucPIDNJMfLXzV9Hc_7MR3Jg9SzcBjjL3XVojkyrbxQm0udC"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(239,184,87,0.2)]">
              <span className="material-symbols-outlined text-4xl text-primary">diversity_3</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#F8F8F8] mb-3">Comunidade</h3>
              <p className="text-[#CCCCCC] text-sm leading-relaxed max-w-[240px] mx-auto">
                Não caminhe sozinha. Troque experiências em nossa rede social exclusiva, segura e moderada por psicólogos.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 w-full">
              <div className="flex justify-center -space-x-2 overflow-hidden">
                <img alt="Member" className="w-8 h-8 rounded-full border border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYxeaUOhf8XErEZE3j8jk1BpG3_gBljkk3VZbIP9RlBq9cGVNzmDzSoUmR_bhsgnzQSzFE7xXDLnEmAX9gljYlfPVbMMtFG8qwmCfOZrwBzrjMUqOVzNGjzn7v2wCYsLXkHOh1GgdVdUS-FqukT53nDODBGlJ8uKOuGzrgLUaBhATXNiJfVnA-Gps8PhheWLD7j9bOwMTTIO9NqHfqFPQKRf-aWikMRVOQgFwJFniDo4b-KRS6IgfJnoZ39Zc_ihYt1L4mnvjzYo81"/>
                <img alt="Member" className="w-8 h-8 rounded-full border border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3dJyKV-5VcXXn7iih_U6nCr5zqbazcLMS3m_SIMjCVYpE_lrne7IYnUS6xS8yE-TEnfyqd93zCa6ijafH0LqTVukpDa29jMxth9DuITOS8O52z-2Uq35wjq6aR_1qH5KOueSIi_815MLcH1KjlePIgOsVv6nICwi8OMeTw4WwZ7Q2hZJiMcv2yQr7tJbfnvULkYAtJMhC_gZrN5jkt8X6IvYhsHxJ_mA4FpprLcHqjB1vm2uS4Se3zaE3lELvPrLqWTixlUGdLrg"/>
                <img alt="Member" className="w-8 h-8 rounded-full border border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCripe51Hxr2r461OVO49Y1UXpA82f8BlMgxy32SHyUyg3NjkRDjY-LH6rMy5HFq-_NDJJfwOKXpT5Lw3iM_1RXk7363pGqdN9fkAfEDb60rhOESOX7GfddDi7vIDQtWr3hc7ujCXeWU7Pi4PgRzk4cSDF3w78aVTW9lmrand-fApZ_PzL1FmoIUE9ys_McWAymB3QYcr3jN3iLLRPbbZ11gB0QMRm8OHspPoCouu11cUKAqr_JLHGfgF30hxTq38Smt1QumMj0pSBh"/>
                <div className="w-8 h-8 rounded-full bg-primary text-[10px] text-black font-bold flex items-center justify-center border border-black uppercase">
                  +2k
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 font-medium">Membros ativos agora</p>
            </div>
          </div>
        </div>

        {/* AI Assistant Card */}
        <div className="group relative md:col-span-1 rounded-3xl bg-card-dark border border-[#2A2A2A] p-8 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 hover:bg-surface-dark/30 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="relative flex flex-col items-start w-full">
            <div className="flex justify-between items-start w-full mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-glow"></div>
                <div className="absolute inset-[-4px] rounded-full border border-primary/10 animate-pulse-glow delay-150"></div>
                <div className="relative z-10 w-12 h-12 rounded-xl bg-surface-dark border border-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-2xl text-primary">psychology</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-600 group-hover:text-primary transition-colors text-xl">arrow_outward</span>
            </div>
            <div className="bg-surface-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl rounded-tl-sm p-3 mb-2 transform transition-transform duration-500 group-hover:-translate-y-1 shadow-lg w-full max-w-[220px]">
              <p className="text-xs text-gray-200 font-medium leading-tight">
                "Como posso te ajudar agora?"
              </p>
            </div>
            <div className="mt-2">
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-1">Assistente IA 24h</h3>
              <p className="text-[#CCCCCC] text-sm leading-relaxed text-xs">
                Suporte emocional imediato com exercícios guiados.
              </p>
            </div>
          </div>
        </div>

        {/* Gamification Card */}
        <div className="group relative md:col-span-1 rounded-3xl bg-card-dark border border-[#2A2A2A] p-6 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 hover:bg-surface-dark/30">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-dark border border-white/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-primary">trophy</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#F8F8F8]">Gamificação</h3>
                <p className="text-[#888] text-xs">Jornada de evolução</p>
              </div>
            </div>
          </div>
          <div className="bg-black/40 rounded-2xl p-4 border border-white/5 relative overflow-hidden group-hover:border-primary/20 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-500/80 text-lg">lock</span>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Próxima Recompensa</span>
              </div>
              <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-md border border-primary/20">NÍVEL 15</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-gray-500 text-sm group-hover:text-primary transition-colors">redeem</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                  <span>Progresso</span>
                  <span className="text-primary">75%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/80 to-primary h-full rounded-full w-3/4 shadow-[0_0_10px_rgba(239,184,87,0.5)]"></div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 text-center">Complete mais 2 episódios para desbloquear.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;