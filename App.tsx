import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Features from './components/Features';
import Expert from './components/Expert';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Catalog />
        <Features />
        <Expert />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;