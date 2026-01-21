import React from 'react';

const Pricing = () => {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden bg-background-dark">
      <section className="flex-grow flex flex-col justify-center items-center py-20 px-4 md:px-10 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-20"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1100px] flex flex-col items-center gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6 text-center items-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Escolha seu plano de <span className="text-white">evolução.</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              <span className="text-primary font-bold">Mais barato que uma sessão de terapia</span> que não resolve seu problema.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
            
            {/* Monthly Plan */}
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 md:my-4">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Plano Mensal</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Flexibilidade total para sua rotina. Sem compromissos de longo prazo.</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">R$ 29,90</span>
                  <span className="text-neutral-500 font-medium">/ mês</span>
                </div>
                <p className="text-xs text-neutral-500 mt-2">Cancele quando quiser.</p>
              </div>
              <a className="w-full flex items-center justify-center py-4 px-6 rounded-xl border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-colors mb-8" href="#">
                SELECIONAR MENSAL
              </a>
              <div className="space-y-4 mt-auto">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">O que está incluso:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-neutral-300 text-sm">
                    <span className="material-symbols-outlined text-neutral-500 text-lg">check</span>
                    <span>Acesso ilimitado ao catálogo</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300 text-sm">
                    <span className="material-symbols-outlined text-neutral-500 text-lg">check</span>
                    <span>Assista em qualquer lugar</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300 text-sm">
                    <span className="material-symbols-outlined text-neutral-500 text-lg">check</span>
                    <span>Sem fidelidade</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Annual Plan (Featured) */}
            <div className="relative flex flex-col rounded-2xl border border-primary/50 bg-gradient-to-b from-white/[0.08] to-black p-8 md:p-10 shadow-[0_0_40px_rgba(239,184,87,0.05)] md:scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#0A0A0A] text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                Melhor Escolha
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-primary mb-2">Plano Anual</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">A forma mais inteligente de investir na sua saúde emocional.</p>
              </div>
              <div className="mb-8 p-5 bg-white/5 rounded-xl border border-white/10 text-center">
                <p className="text-xs text-neutral-400 mb-2 uppercase tracking-wide font-medium">Equivalente a apenas</p>
                <div className="flex items-end justify-center gap-2 mb-1">
                  <span className="text-5xl md:text-6xl font-black text-primary drop-shadow-sm leading-none">R$ 0,82</span>
                  <span className="text-xl font-bold text-white/80 mb-1">/ dia</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2">Faturado anualmente (R$ 299,00)</p>
              </div>
              <button className="group w-full relative overflow-hidden rounded-xl py-4 bg-gradient-to-br from-primary via-[#facc15] to-primary text-[#221c11] font-black text-lg shadow-[0_0_20px_rgba(239,184,87,0.3)] transition-all hover:scale-[1.02] mb-8">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative flex items-center justify-center gap-2">
                  QUERO MEU ACESSO AGORA
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </span>
              </button>
              <div className="space-y-4">
                <p className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-4">Tudo do mensal, mais:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/90 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span>
                    <span>Economia de R$ 180,00 por ano</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span>
                    <span>Acesso a lançamentos antecipados</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span>
                    <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 opacity-60 pt-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-neutral-400" style={{fontSize: "18px"}}>lock</span>
              <span className="text-xs text-neutral-400 font-medium">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-neutral-400" style={{fontSize: "18px"}}>bolt</span>
              <span className="text-xs text-neutral-400 font-medium">Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;