import React from 'react';

const AddContentModal: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col items-center">
      {/* TopAppBar Shared Component */}
      <header className="bg-[#0e0e0e] border-b border-[#262626]/50 fixed top-0 w-full z-50">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button className="text-[#ababab] hover:text-white transition-colors duration-150 active:scale-90 transition-transform bg-transparent border-none cursor-pointer p-0 flex">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h1 className="font-headline tracking-tight font-bold text-xl text-on-surface m-0">Add to Vault</h1>
          </div>
          <button className="text-primary font-headline tracking-tight font-bold text-xl hover:text-white transition-colors duration-150 active:scale-90 transition-transform bg-transparent border-none cursor-pointer">
            Save
          </button>
        </div>
      </header>
      
      {/* Main Content Canvas: Centered Transactional Modal */}
      <main className="flex-grow w-full flex items-center justify-center p-6 mt-16 mb-24">
        <section className="w-full max-w-xl bg-surface-container-low p-8 border border-outline-variant/10 shadow-2xl relative overflow-hidden text-left">
          {/* Contextual Icon / Header Decoration */}
          <div className="mb-12">
            <span className="text-primary-fixed mb-4 inline-block material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter leading-none text-on-surface m-0">CAPTURE KNOWLEDGE</h2>
            <p className="font-body text-on-surface-variant mt-2 text-sm uppercase tracking-widest font-medium m-0">New Entry • Secure Vault</p>
          </div>
          
          {/* Form Fields */}
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            {/* Title Input */}
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 group-focus-within:text-primary transition-colors">Information Title</label>
              <input 
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 text-lg font-medium text-on-surface placeholder:text-outline/40 transition-all duration-200 outline-none focus:border-primary focus:scale-[1.02]" 
                placeholder="Quantum Mechanics Overview" 
                type="text" 
              />
            </div>
            
            {/* Link Input */}
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 group-focus-within:text-primary transition-colors">Resource URL</label>
              <div className="relative">
                <span className="absolute left-0 top-3 text-outline-variant material-symbols-outlined text-sm">link</span>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 pl-7 text-lg font-medium text-on-surface placeholder:text-outline/40 transition-all duration-200 outline-none focus:border-primary focus:scale-[1.02]" 
                  placeholder="https://arxiv.org/abs/..." 
                  type="url" 
                />
              </div>
            </div>
            
            {/* Tags Input */}
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 group-focus-within:text-primary transition-colors">Metadata Tags</label>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-surface-variant text-[10px] px-2 py-1 rounded-sm text-on-surface-variant font-bold uppercase tracking-tighter">Physics</span>
                <span className="bg-surface-variant text-[10px] px-2 py-1 rounded-sm text-on-surface-variant font-bold uppercase tracking-tighter">Research</span>
              </div>
              <input 
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 text-lg font-medium text-on-surface placeholder:text-outline/40 transition-all duration-200 outline-none focus:border-primary focus:scale-[1.02]" 
                placeholder="Enter tags, separated by commas" 
                type="text" 
              />
            </div>
            
            {/* Action Cluster */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button 
                className="flex-1 bg-primary text-white font-headline font-bold py-4 text-sm tracking-widest uppercase transition-all duration-200 hover:scale-[1.05] active:scale-[0.95] border-none cursor-pointer rounded-sm" 
                type="submit"
              >
                Save to Vault
              </button>
              <button 
                className="flex-1 border border-outline-variant/30 text-on-surface bg-transparent font-headline font-bold py-4 text-sm tracking-widest uppercase transition-all duration-200 hover:bg-surface-container-high active:scale-[0.95] cursor-pointer rounded-sm" 
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
          
          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-primary-fixed"></div>
        </section>
      </main>
      
      {/* BottomNavBar Shared Component */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#0e0e0e] border-t border-[#262626]/50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <a className="flex flex-col items-center justify-center text-[#757575] hover:text-white transition-colors duration-150 hover:scale-105 transition-transform duration-200 no-underline" href="#">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Vault</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#757575] hover:text-white transition-colors duration-150 hover:scale-105 transition-transform duration-200 no-underline" href="#">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Search</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary scale-105 transition-transform duration-200 no-underline" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Capture</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#757575] hover:text-white transition-colors duration-150 hover:scale-105 transition-transform duration-200 no-underline" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default AddContentModal;
