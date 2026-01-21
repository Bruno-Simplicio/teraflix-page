import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="bg-background-dark py-20 px-4 md:px-10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-40"></div>
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6 text-center items-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Escolha seu plano de <span className="text-gray-400">evolução.</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            <span className="text-primary font-bold">Mais barato que uma sessão de terapia</span> que não resolve seu problema.
          </p>
        </div>

        {/* Comparison Grid */}
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
            
            <button className="w-full flex items-center justify-center py-4 px-6 rounded-xl border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-colors mb-8 cursor-pointer">
              SELECIONAR MENSAL
            </button>

            <div className="space-y-4 mt-auto">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">O que está incluso:</p>
              <ul className="space-y-3">
                {['Acesso ilimitado ao catálogo', 'Assista em qualquer lugar', 'Sem fidelidade'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300 text-sm">
                    <span className="material-symbols-outlined text-neutral-500 text-lg">check</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Annual Plan */}
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

            <button className="group w-full relative overflow-hidden rounded-xl py-4 bg-gradient-to-br from-primary via-[#facc15] to-primary text-[#221c11] font-black text-lg shadow-[0_0_20px_rgba(239,184,87,0.3)] transition-all hover:scale-[1.02] mb-8 cursor-pointer">
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
                  <span className="material-symbols-outlined text-primary text-lg fill-1">verified</span>
                  <span>Economia de R$ 59,80 por ano</span>
                </li>
                <li className="flex items-start gap-3 text-white/90 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-lg fill-1">verified</span>
                  <span>Acesso a lançamentos antecipados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="w-full flex justify-center -mt-4">
          <div className="relative group flex flex-col md:flex-row items-center justify-center gap-5 p-6 rounded-2xl border border-primary/30 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm max-w-2xl w-full text-center md:text-left shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-primary/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            <div className="relative shrink-0 p-3 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(239,184,87,0.1)]">
              <span className="material-symbols-outlined text-primary text-3xl">shield</span>
            </div>
            <div className="relative">
              <h4 className="text-lg md:text-xl font-bold text-white mb-1">Garantia Incondicional de 7 dias</h4>
              <p className="text-neutral-400 text-sm">
                Experimente sem riscos: se não ficar satisfeito, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-6 opacity-60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-neutral-400 text-[18px]">lock</span>
            <span className="text-xs text-neutral-400 font-medium">Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-neutral-400 text-[18px]">bolt</span>
            <span className="text-xs text-neutral-400 font-medium">Acesso Imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;