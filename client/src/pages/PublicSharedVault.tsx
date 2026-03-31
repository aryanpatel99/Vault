import React from 'react';

const PublicSharedVault: React.FC = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e] border-b border-[#484848]/15 flex items-center justify-center w-full h-16 px-6 max-w-none">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#a3a6ff]">api</span>
          <h1 className="font-headline tracking-tight font-bold text-lg text-[#a3a6ff] m-0">Digital Monolith Public Vault</h1>
        </div>
      </header>

      {/* Content Canvas */}
      <main className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <section className="mb-20 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-headline tracking-widest text-xs uppercase font-bold">Curated Knowledge Base</span>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface leading-none m-0">The Vault.</h2>
            <p className="mt-6 text-on-surface-variant max-w-xl text-lg font-body leading-relaxed m-0">
              A singular, carved block of obsidian containing architectural principles, quantum exploration, and the structural foundations of digital design.
            </p>
          </div>
        </section>

        {/* Search / Filter */}
        <div className="mb-12 group">
          <div className="flex items-center border-b border-outline-variant/15 py-4 transition-colors duration-300 focus-within:border-primary">
            <span className="material-symbols-outlined text-on-surface-variant mr-4">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline w-full font-body outline-none" 
              placeholder="Query the monolith..." 
              type="text" 
            />
          </div>
        </div>

        {/* Vertical Content Cards */}
        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <article className="group relative bg-surface-container-low p-8 transition-all duration-300 hover:bg-surface-container-high hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer text-left">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 bg-surface-variant text-primary font-label text-[10px] tracking-wider uppercase font-bold">#SCIENCE</span>
                <span className="px-2 py-0.5 bg-surface-variant text-primary font-label text-[10px] tracking-wider uppercase font-bold">#PHYSICS</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">link</span>
                <span className="text-xs font-label tracking-tight">arxiv.org</span>
              </div>
            </div>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface mb-3 m-0">Quantum Computing Basics &amp; Decoherence</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 line-clamp-2 m-0">
              A deep dive into the fundamental principles of qubit stability and the mathematical frameworks required to maintain state coherence in noisy environments.
            </p>
            <div className="h-px w-full bg-outline-variant/10 group-hover:bg-primary/20 transition-colors"></div>
          </article>

          {/* Card 2 */}
          <article className="group relative bg-surface-container-low p-8 transition-all duration-300 hover:bg-surface-container-high hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer text-left">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 bg-surface-variant text-primary font-label text-[10px] tracking-wider uppercase font-bold">#DESIGN</span>
                <span className="px-2 py-0.5 bg-surface-variant text-primary font-label text-[10px] tracking-wider uppercase font-bold">#SYSTEMS</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">link</span>
                <span className="text-xs font-label tracking-tight">system.design</span>
              </div>
            </div>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface mb-3 m-0">Design System Strategy: The Digital Monolith</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 line-clamp-2 m-0">
              Architectural guidelines for creating high-contrast, obsidian-inspired interfaces that prioritize negative space and editorial authority over traditional card-heavy layouts.
            </p>
            <div className="h-px w-full bg-outline-variant/10 group-hover:bg-primary/20 transition-colors"></div>
          </article>

          {/* Card 3 */}
          <article className="group relative bg-surface-container-low p-8 transition-all duration-300 hover:bg-surface-container-high hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer text-left">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 bg-surface-variant text-primary font-label text-[10px] tracking-wider uppercase font-bold">#PRODUCTIVITY</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">link</span>
                <span className="text-xs font-label tracking-tight">obsidian.md</span>
              </div>
            </div>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface mb-3 m-0">Zettelkasten Productivity Framework</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 line-clamp-2 m-0">
              Implementing the Luhmann method within a digital vault. Strategies for atomization of thoughts and creating non-linear knowledge graphs.
            </p>
            <div className="h-px w-full bg-outline-variant/10 group-hover:bg-primary/20 transition-colors"></div>
          </article>

          {/* Card 4 */}
          <article className="group relative bg-surface-container-low p-8 transition-all duration-300 hover:bg-surface-container-high hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer text-left">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 bg-surface-variant text-primary font-label text-[10px] tracking-wider uppercase font-bold">#ARCHITECTURE</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">link</span>
                <span className="text-xs font-label tracking-tight">archdaily.com</span>
              </div>
            </div>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface mb-3 m-0">Brutalist Structures in Digital Spaces</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 line-clamp-2 m-0">
              How raw material, massive scale, and structural honesty translate from 20th-century concrete architecture into 21st-century user interfaces.
            </p>
            <div className="h-px w-full bg-outline-variant/10 group-hover:bg-primary/20 transition-colors"></div>
          </article>
        </div>

        {/* Footer / Paging */}
        <footer className="mt-20 pt-10 border-t border-outline-variant/10 flex justify-between items-center">
          <div className="text-[10px] font-label text-outline uppercase tracking-[0.2em]">End of Vault Segment 01</div>
          <div className="flex gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer">Previous</button>
            <button className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer">Next</button>
          </div>
        </footer>
      </main>

      {/* Contextual Info (Right Sidebar) */}
      <aside className="fixed right-0 top-16 bottom-0 w-80 bg-surface-container-low border-l border-outline-variant/10 hidden xl:flex flex-col p-10 text-left">
        <div className="mb-12">
          <h4 className="text-xs font-headline font-black uppercase tracking-[0.25em] text-on-surface mb-6 m-0">Vault Metadata</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] text-outline uppercase font-bold mb-1">Total Notes</label>
              <span className="text-lg font-headline font-bold text-on-surface">1,402</span>
            </div>
            <div>
              <label className="block text-[10px] text-outline uppercase font-bold mb-1">Last Synced</label>
              <span className="text-lg font-headline font-bold text-on-surface">4m ago</span>
            </div>
            <div>
              <label className="block text-[10px] text-outline uppercase font-bold mb-1">Status</label>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-label text-primary font-bold">READ_ONLY_PUBLIC</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <div className="p-6 bg-surface-container border border-outline-variant/10">
            <p className="text-xs font-body text-on-surface-variant leading-relaxed m-0">
              This is a public mirror of a private monolith. No modifications are permitted via this interface.
            </p>
            <button className="mt-4 w-full py-3 bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest transition-transform duration-150 active:scale-95 border-none cursor-pointer">
              View Graphite Branch
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PublicSharedVault;
