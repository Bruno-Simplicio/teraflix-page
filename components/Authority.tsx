import React from 'react';

const Authority = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 md:px-10 lg:px-40 w-full bg-background-dark">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Profile Column */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-8">
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block opacity-90">O Especialista</span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-white tracking-tight">Conheça seu Guia</h2>
          </div>
          <div className="relative w-full p-8 rounded-2xl bg-surface-dark border border-border-dark flex flex-col items-start shadow-[0_0_50px_-15px_rgba(240,184,88,0.15)] transition-shadow duration-500 hover:shadow-[0_0_60px_-10px_rgba(240,184,88,0.25)]">
            <div className="absolute -top-3 -right-3 bg-primary text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 z-10">
              <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
              Verificado
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6 w-full">
              <div className="shrink-0 relative">
                <div className="size-24 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                  <div 
                    className="w-full h-full rounded-full bg-cover bg-center" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-5pNTcQiHr0BzeNDz-q4Hbac9qyM3FLw8-CTDkDXSTVXZYmDYEcfG0tDz0Xcq1kR9ArYg0X-bViky9gmVGnyNcSTZO3z3qhkZd7_Xz0zX5GJTMJvxjh-wWOvcD4S1TC7K8z3AKKUmNQQcqeHo7eIE3dhok7iIBJPplJrSD8TWK8EzbsHTLG8s-WZ_w2XeXnmB_z0bQvSU1oWOJ6uppktftEAuoN4GPIOsNHtBWNCX1rS8QuW8m9_PFGRgeQIfgsy0dzZop2TJo1Od')"}}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">Bruno Simplicio</h3>
                <p className="text-primary font-medium text-sm mb-3">Psicólogo & Especialista</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#2A2A2A] text-[11px] text-text-secondary uppercase tracking-wider">CRP 06/12345</span>
                  <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#2A2A2A] text-[11px] text-text-secondary uppercase tracking-wider">Cinema Terapia</span>
                </div>
              </div>
            </div>
            <div className="w-full space-y-5 border-t border-border-dark pt-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">psychology</span>
                <p className="text-text-secondary text-lg leading-relaxed font-light">
                  Com mais de <strong className="text-white font-semibold">7.000 sessões clínicas</strong> realizadas, Bruno transformou sua prática em um método único que une a psicologia à arte do cinema.
                </p>
              </div>
              <p className="text-text-secondary/60 text-sm leading-relaxed pl-9">
                "Meu objetivo não é apenas analisar filmes, mas usar as narrativas como espelhos para que você enxergue suas próprias emoções com clareza e profundidade."
              </p>
            </div>
            <div className="mt-6 pl-9">
              <a className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase group" href="#">
                Ver perfil completo
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Column */}
        <div className="flex-1 flex flex-col justify-center space-y-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-20"></div>
          <div className="relative z-10">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block opacity-90">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-white tracking-tight">Quem maratona, <br/><span className="text-primary">transforma</span>.</h2>
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            {/* Review 1 */}
            <div className="group bg-[#0A0A0A] p-6 md:p-8 rounded-xl border border-border-dark hover:border-primary/40 transition-all duration-300 relative">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-5xl text-primary">format_quote</span>
              </div>
              <div className="flex gap-1 mb-4 text-primary">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="material-symbols-outlined text-[18px] fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                "A Teraflix mudou completamente minha relação com a ansiedade. As análises do Bruno me fizeram enxergar detalhes nos filmes que explicavam exatamente o que eu estava sentindo."
              </p>
              <div className="flex items-center gap-3 border-t border-border-dark pt-4 w-full">
                <div 
                  className="size-9 rounded-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzn5l_Nd1VKtdqxx8qqZIveimn48eVQQdJ8xjuWQmXreI4SvGsG_8VqFqF2JBxp3rPI-KsGfxjDKcTxO1gatn06hsj5dvw9F55vG0NEZNc0TBxqTzhz9nXgQ_g5NgHbhChT5dR5BDlera7FXpdTN4Y2qfAMcK6O1Z9oqlpaF2W5CkZGXhLKezBGmZMJd4niZGj_Pc0S0zac0RX108NboGVy9vnCk-ukvmsnjWvECCYq8x1KoIh3OPEJL6MjW2g7lHpeqUtUuQEFSuO')"}}
                ></div>
                <div>
                  <p className="text-white font-medium text-sm">Camila M.</p>
                  <p className="text-[#666] text-xs">Assinante desde 2022</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="group bg-[#0A0A0A] p-6 md:p-8 rounded-xl border border-border-dark hover:border-primary/40 transition-all duration-300 relative">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-5xl text-primary">format_quote</span>
              </div>
              <div className="flex gap-1 mb-4 text-primary">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="material-symbols-outlined text-[18px] fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                "Eu achava que era só entretenimento, mas é terapêutico. A forma como o conteúdo é organizado em trilhas emocionais é genial."
              </p>
              <div className="flex items-center gap-3 border-t border-border-dark pt-4 w-full">
                <div 
                  className="size-9 rounded-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjD-A9Eit6qCVA_Y0m-EICg0vZCtkKWCGoCgnnJPtzmZR0Hm8NQCeWesO8xARRMEv3Z4V2Sxa-rr6Sb2d-MFHS1WkYx--7wZIGiKegS5e8kZQmkH-xkZwHy6xgtiIN9rlgVMFCJgr6COrYZ5-vLr_oyCLOL800grtoyFuMW4W8vEZuvdmliH5FsDTAjaeaVUWB_RYLSyFelG74aq9vD1EO_1kFcx3AsBH5d4Ewwd3nN1Fg3X_UdjSfhndANsPSGlj0S4am0-ufQPx-')"}}
                ></div>
                <div>
                  <p className="text-white font-medium text-sm">Fernanda S.</p>
                  <p className="text-[#666] text-xs">Assinante desde 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;