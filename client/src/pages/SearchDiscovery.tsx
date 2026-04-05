import React from 'react';
import TopAppBar from '../components/shared/TopAppBar';
import MobileNav from '../components/shared/MobileNav';

const SearchDiscovery: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen text-left">
      <TopAppBar />

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
            <button className="bg-surface-container text-primary px-5 py-2.5 text-xs font-semibold tracking-wide flex items-center gap-2 border border-primary/30 transition-all hover:scale-105 active:scale-[0.95] cursor-pointer rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
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
            <button className="text-[10px] uppercase tracking-widest text-outline hover:text-red-400 transition-colors bg-transparent border-none cursor-pointer">Purge History</button>
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
            {/* Additional logs... */}
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
};

export default SearchDiscovery;
