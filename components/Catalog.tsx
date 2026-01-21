import React from 'react';

const CARDS = [
  {
    title: "The Quiet Mind",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZP9lbU-uTI7BZB-lG4TEwWG6A9RjyVFEI4pH2u_tY3Eo3lSHsqOxaEvmD7Gr6mLw-XZ_nz3xY-aPFw8OPlJNvJ9podyRHvSRYexzGgHLeuvLyNkHmYn08JWbbUBcl36uxBo_W8gEnq-XqEGB0dp4kNBCZcqkaNVj8wP3X2_HmnM1xmk212hsAfmORcLMUvLDNfNJL36BBbI95YFwhOCXE515fJbUyJh81ySh-MCra1ClwNXYjbOTzOWQfnklMhb5R5taewnFhaEo3",
    label: "Original",
    quality: "4K",
    duration: "2h 10m",
    genre: "Mindfulness"
  },
  {
    title: "Healing Paths",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpyVGIPIL6mye7CHoXqYq2v4hpaRa0vIAYDHworjkSVWBNoqMqb2FvvBrJTMzLdnh34r2LdBqxvvjhEzcDOvFclMs5c6PVvaImIROzAFzwmytxywTtqpVy-6k8TpAhV34zDhxFwLYqr7hRBnTfn3pv_Ak7CPgqdfDv4nsMJdLAMdDwZeS0QlJ4PBUpAqETRHGiSITpjtv1t_wL9r5_ZSMVbJAW80zgcKMkBGjJFNuR5L1LCm8lil5I4bxVSKlfM0hDNyuPwEXtgOQM",
    label: "Original",
    quality: "HD",
    duration: "1h 45m",
    genre: "Drama"
  },
  {
    title: "Anxiety Unbound",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_72262tBvnVN8U6bjK-6NDVkOObk87rVIb0ndGnL3pkNyelO_rvLhr4kXR4A1_vIuM0bHrdiPMiQYv3fULqSH5MGB_IOsNNfaQmX2LBtbcklKNgjOvEqjRvfO7VCi2xmDDndrq-4N589abEfzG-HWD5ST-RBbVCUWz2MEUVTa--FMJTZv-Ev5TsYXC2fn7OIrhBHVD1b2ohPE5oxY2E_55CIM4fs9qnGJuLd2nJg6QmynPbsjWAsG4Of4rfZTA_wjlhqwgs-m1Pid",
    label: "Series",
    quality: "4K",
    duration: "6 Ep",
    genre: "Docu"
  },
  {
    title: "Inner Silence",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2qvasP3ZeMGy2Ixoh58TB_iUf7IycJ6SlE1QfBGdtdQHjC7a2r3RKQfrM5tauwrJmnRiYQM2_E1Mow57I3gUqreohcxE_w9Cg4PHAb637Fb0nCTPOecbibTAhHbaj9IR9Z9LtmSykQaEFcBW4Q5k-iTmd4hmdd9aLdYUTQ3iK0zp5VKtXxQe6WN32dgzZ63q0gg5ygy3A23KkD-UjYikKaWGKlIYXRhakEvR3mA-WgqiDE8qWNYt4sQoc8ZDPUrhAckOUQ3yZBbZ-",
    label: "Original",
    quality: "HD",
    duration: "2h 05m",
    genre: "Wellness"
  },
  {
    title: "Breath of Life",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB98cn3sf51fV3L03bH0NgC1G31xD_eKFGzNuau_LnpdGMUfDdDbwwcvQjHqfp2wvcVz1R7-9XHeeUWwErcVlSGp9ElkNAUzePJQg4oye0YnyIfDFGjslJdeu9pOsHHF6Kv4FXavNA7RsPc5430n-3HMRovZNGrNl5R2bWGCorIoU0CZjdkO3sA0qQVJ3XauI5uVoPek1qa3DnT-W6HHUC9vSNdKkLFtzwsh-yHY5EI8M0ijeJ2gLL8Uay0ccAsOjQnGny457FEbZI2",
    label: "Original",
    quality: "4K",
    duration: "1h 50m",
    genre: "Science"
  },
  {
    title: "Emotional Core",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpZusBrqRhXKUziK1zYr7U5NgrEHjZL8ePxSFT5iydpuvZYttlmwJmqp2MDj4pXKJcMfNhsXALTAE_uSa_h4nrvuv469-VD23WQaWq-ChlWZbZ1E4YpOGMfB0CqhFvxKwQtnDlYJt6uadk__h1oQ_72QKj8SsxauV2M3uEE1GyiDTaAV_Tgjqf_Q8yGYLXRxJjh3wc1VpRdFovhbHPGVS5YwWAFrxczHw-jjILyQy-rzMUpOJFCNq6MeCc4wqyFhK-29q4rSd3Drbm",
    label: "Series",
    quality: "HD",
    duration: "8 Ep",
    genre: "Talk"
  },
];

const Catalog = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto p-6 md:p-10 lg:p-14 bg-background-dark">
      {/* Header Section */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
            Originais Teraflix
          </h2>
          <p className="text-gray-400 mt-1 text-sm md:text-base ml-3.5">
            Histórias exclusivas para curar, inspirar e transformar.
          </p>
        </div>
        {/* Navigation Controls */}
        <div className="hidden md:flex gap-2">
          <button className="w-10 h-10 rounded-full border border-border-dark bg-surface-dark hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-border-dark bg-surface-dark hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </header>

      {/* Carousel Container */}
      <div className="relative group/carousel">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Scrollable Area */}
        <div className="flex overflow-x-auto gap-4 pb-8 pt-4 px-1 no-scrollbar snap-x snap-mandatory">
          {CARDS.map((card, index) => (
            <div key={index} className="snap-start shrink-0 w-[180px] md:w-[220px] lg:w-[260px] group/card cursor-pointer">
              <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-border-dark transition-all duration-300 ease-out group-hover/card:scale-105 group-hover/card:border-primary group-hover/card:shadow-[0_0_20px_rgba(239,184,87,0.15)] bg-surface-dark">
                {/* Image */}
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110" 
                  style={{backgroundImage: `url('${card.image}')`}}
                ></div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity"></div>
                
                {/* Teraflix Original Badge */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-2 group-hover/card:translate-y-0">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary drop-shadow-md bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-primary/30">
                    {card.label}
                  </span>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-lg">{card.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                    <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] text-white">{card.quality}</span>
                    <span>{card.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    <span>{card.genre}</span>
                  </div>
                </div>
                
                {/* Play Button (Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-primary/90 text-black flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <span className="material-symbols-outlined !text-[32px] ml-1">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer to allow last card to be fully visible on right scroll */}
          <div className="shrink-0 w-8 md:w-12"></div>
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none hidden md:block"></div>
      </div>

      {/* Bottom Stats (Optional Context Filler) */}
      <div className="mt-8 border-t border-border-dark pt-8 flex gap-8 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">trending_up</span>
          <span>Trending Now</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-gray-500 text-lg">new_releases</span>
          <span>New This Week</span>
        </div>
      </div>
    </div>
  );
};

export default Catalog;