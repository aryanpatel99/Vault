import React from 'react';

const SearchDiscovery: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen text-left">
      {/* TopAppBar */}
      <header className="bg-[#0e0e0e] fixed top-0 w-full z-50 border-b border-outline-variant/15 flex items-center justify-between px-6 h-16 max-w-none">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-surface-bright transition-colors duration-150 p-2 rounded-full cursor-pointer">menu</span>
        </div>
        <h1 className="font-headline font-bold tracking-tighter uppercase text-2xl text-white m-0">VAULT</h1>
        <div className="flex items-center">
          <span className="material-symbols-outlined text-primary hover:bg-surface-bright transition-colors duration-150 p-2 rounded-full cursor-pointer">search</span>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
        {/* Search Input Section */}
        <section className="mb-12">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none group-focus-within:text-primary transition-colors">search</span>
            <input 
              className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 py-5 px-0 pl-14 pr-4 font-headline text-lg tracking-tight transition-all duration-300 outline-none" 
              placeholder="Access the monolith..." 
              type="text" 
            />
          </div>
        </section>

        {/* Filter Tags Section */}
        <section className="mb-10">
          <h2 className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-bold m-0">Refine Knowledge</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {/* Active Tag */}
            <button className="bg-surface-container text-[#6366F1] px-5 py-2.5 text-xs font-semibold tracking-wide flex items-center gap-2 border border-[#6366F1]/30 transition-all hover:scale-105 active:scale-[0.95] cursor-pointer rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
              Science
            </button>
            <button className="bg-surface-variant text-on-surface-variant px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-surface-bright hover:text-on-surface transition-all active:scale-[0.95] border-none cursor-pointer rounded-sm">
              Design
            </button>
            <button className="bg-surface-variant text-on-surface-variant px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-surface-bright hover:text-on-surface transition-all active:scale-[0.95] border-none cursor-pointer rounded-sm">
              AI
            </button>
            <button className="bg-surface-variant text-on-surface-variant px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-surface-bright hover:text-on-surface transition-all active:scale-[0.95] border-none cursor-pointer rounded-sm">
              Philosophy
            </button>
            <button className="bg-surface-variant text-on-surface-variant px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-surface-bright hover:text-on-surface transition-all active:scale-[0.95] border-none cursor-pointer rounded-sm">
              Cybernetics
            </button>
          </div>
        </section>

        {/* Recent Searches Section */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold m-0">Temporal Logs</h2>
            <button className="text-[10px] uppercase tracking-widest text-outline hover:text-error transition-colors bg-transparent border-none cursor-pointer">Purge History</button>
          </div>
          
          <div className="space-y-1">
            <div className="group flex items-center justify-between p-4 bg-surface-container-low/50 hover:bg-surface-container transition-all cursor-pointer border-0 border-l-2 border-transparent hover:border-primary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-outline group-hover:text-on-surface transition-colors">history</span>
                <div>
                  <p className="text-sm font-medium tracking-tight m-0">Neural interface architecture</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter m-0 mt-1">Searched 2h ago</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">north_west</span>
            </div>
            
            <div className="group flex items-center justify-between p-4 bg-surface-container-low/50 hover:bg-surface-container transition-all cursor-pointer border-0 border-l-2 border-transparent hover:border-primary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-outline group-hover:text-on-surface transition-colors">history</span>
                <div>
                  <p className="text-sm font-medium tracking-tight m-0">Obsidian workflow patterns</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter m-0 mt-1">Searched yesterday</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">north_west</span>
            </div>
            
            <div className="group flex items-center justify-between p-4 bg-surface-container-low/50 hover:bg-surface-container transition-all cursor-pointer border-0 border-l-2 border-transparent hover:border-primary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-outline group-hover:text-on-surface transition-colors">history</span>
                <div>
                  <p className="text-sm font-medium tracking-tight m-0">Quantum computing ethics</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter m-0 mt-1">Searched 3d ago</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">north_west</span>
            </div>
          </div>
        </section>

        {/* Visual Suggestion / Image Placeholder */}
        <section className="mt-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="aspect-video w-full bg-surface-container rounded-sm overflow-hidden relative">
            <img 
              alt="Knowledge Graph" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfnS5Wm8rrH-KEcxFLgII95ZDWBV79IALwPGsvyVzo9CEevxodlV0IaFgO_PiOg3Zig5P6a_uy9SXg7PSlAhdPuWn5j7BI-nQwG3LvYc33FIJCZmFwDUAWLbgVvTrc_Z38D7ppbH3O0V6Ngmf8F4LoNfQyVJIygjuSUl7B3vmQLoPTW1NlGHYN12hM6yR6HGDj2CjaFrFuw-CVG4Of3vigOxELDdG4FLrrC-BYjBcNxXP7diINGvcnmmO3VlJGdYC8JoPhi1vELjlt" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <p className="font-headline text-[10px] uppercase tracking-widest text-white/60 m-0">Discover curated insights</p>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pb-safe bg-[#131313] z-50 h-20 border-t border-outline-variant/15 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <a className="flex flex-col items-center justify-center text-[#ababab] hover:text-white transition-all active:scale-105 duration-200 no-underline" href="#">
          <span className="material-symbols-outlined pb-1">database</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Vault</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary relative after:content-[''] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-primary after:rounded-full active:scale-105 duration-200 no-underline" href="#">
          <span className="material-symbols-outlined pb-1">tactic</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Draw</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#ababab] hover:text-white transition-all active:scale-105 duration-200 no-underline" href="#">
          <span className="material-symbols-outlined pb-1">share_reviews</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Public</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#ababab] hover:text-white transition-all active:scale-105 duration-200 no-underline" href="#">
          <span className="material-symbols-outlined pb-1">settings</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default SearchDiscovery;
