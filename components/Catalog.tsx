import React from 'react';
import { Movie } from '../types';

const movies: Movie[] = [
  {
    id: 1,
    image: "http://brunosimplicio.com.br/wp-content/uploads/2026/01/1.jpg",
    quality: "4K",
    duration: "2h 10m",
    genre: "Relacionamento",
    type: "Original"
  },
  {
    id: 2,
    image: "http://brunosimplicio.com.br/wp-content/uploads/2026/01/2.jpg",
    quality: "HD",
    duration: "1h 45m",
    genre: "Dep. Emocional",
    type: "Original"
  },
  {
    id: 3,
    image: "http://brunosimplicio.com.br/wp-content/uploads/2026/01/3.jpg",
    quality: "4K",
    duration: "6 Ep",
    genre: "Doenças",
    type: "Series"
  },
  {
    id: 4,
    image: "http://brunosimplicio.com.br/wp-content/uploads/2026/01/4.jpg",
    quality: "HD",
    duration: "2h 05m",
    genre: "Relacionamento",
    type: "Original"
  },
  {
    id: 5,
    image: "http://brunosimplicio.com.br/wp-content/uploads/2026/01/5.jpg",
    quality: "4K",
    duration: "1h 50m",
    genre: "Terapia",
    type: "Original"
  },
  {
    id: 6,
    image: "http://brunosimplicio.com.br/wp-content/uploads/2026/01/6.jpg",
    quality: "HD",
    duration: "8 Ep",
    genre: "Traumas",
    type: "Series"
  }
];

const Catalog: React.FC = () => {
  return (
    <section className="bg-background-dark w-full py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14">
            {/* Header */}
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-primary rounded-full inline-block shadow-[0_0_10px_#F0B858]"></span>
                        Originais Teraflix
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base ml-4">Histórias exclusivas para curar, inspirar e transformar.</p>
                </div>
                
                {/* Navigation Controls */}
                <div className="hidden md:flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-border-dark bg-surface-dark hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-border-dark bg-surface-dark hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative group/carousel">
                {/* Left Gradient Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none hidden md:block"></div>
                
                {/* Scrollable Area */}
                <div className="flex overflow-x-auto gap-5 pb-8 pt-4 px-1 no-scrollbar snap-x snap-mandatory">
                    {movies.map((movie) => (
                        <div key={movie.id} className="snap-start shrink-0 w-[200px] md:w-[240px] lg:w-[280px] group/card cursor-pointer">
                            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 ease-out group-hover/card:scale-105 group-hover/card:border-primary group-hover/card:shadow-[0_0_30px_rgba(240,184,88,0.2)] bg-surface-dark">
                                {/* Image */}
                                <div 
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110" 
                                    style={{ backgroundImage: `url('${movie.image}')` }}
                                >
                                </div>
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity"></div>
                                
                                {/* Teraflix Badge */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-2 group-hover/card:translate-y-0">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary drop-shadow-md bg-black/80 px-2 py-0.5 rounded border border-primary/30 shadow-[0_0_10px_rgba(240,184,88,0.3)]">
                                        {movie.type}
                                    </span>
                                </div>
                                
                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-xl leading-tight mb-2 drop-shadow-lg">{movie.title}</h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                                        <span className="bg-white/10 border border-white/10 px-1.5 py-0.5 rounded text-[10px] text-white/90">{movie.quality}</span>
                                        <span>{movie.duration}</span>
                                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                                        <span>{movie.genre}</span>
                                    </div>
                                </div>
                                
                                {/* Play Button (Hover) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="w-14 h-14 rounded-full bg-primary/90 text-black flex items-center justify-center shadow-xl backdrop-blur-sm scale-75 group-hover/card:scale-100 transition-transform duration-300">
                                        <span className="material-symbols-outlined !text-[36px] ml-1">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Spacer */}
                    <div className="shrink-0 w-8 md:w-24"></div>
                </div>
                
                {/* Right Gradient Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none hidden md:block"></div>
            </div>
        </div>
    </section>
  );
};

export default Catalog;