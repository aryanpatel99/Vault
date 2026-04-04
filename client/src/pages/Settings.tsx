import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 font-body">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e] border-b border-outline-variant/15 flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-surface-bright transition-colors duration-150 p-2 rounded cursor-pointer">menu</span>
          <span className="font-headline font-bold tracking-tighter uppercase text-2xl text-white">VAULT</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-surface-bright transition-colors duration-150 p-2 rounded cursor-pointer">search</span>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-24 px-6 max-w-lg mx-auto space-y-12 text-left">
        {/* Header Section */}
        <section className="space-y-2">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight m-0">Settings</h1>
          <p className="font-body text-on-surface-variant text-sm m-0">Manage your digital monolith and external connections.</p>
        </section>

        {/* Public Brain Toggle (Bento Feature) */}
        <section className="bg-surface-container-low p-6 space-y-6 rounded-sm">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="font-headline text-lg font-bold m-0">Public Brain</h2>
              <p className="text-xs text-on-surface-variant m-0">Publish your curated thoughts to the web.</p>
            </div>
            <button aria-checked="true" className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary" role="switch">
              <span aria-hidden="true" className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-on-primary shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
          <div className="bg-surface-container p-4 flex items-center justify-between group cursor-pointer hover:bg-surface-bright transition-all rounded-sm">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Shareable Link</span>
              <span className="font-mono text-primary text-sm">vault.io/neuro_arc</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">content_copy</span>
          </div>
        </section>

        {/* Account Settings Group */}
        <section className="space-y-4">
          <h3 className="font-headline text-xs font-black tracking-[0.2em] text-on-surface-variant uppercase m-0">Account</h3>
          <div className="divide-y divide-outline-variant/15">
            <div className="py-4 flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold m-0">Identity Profile</p>
                  <p className="font-body text-xs text-on-surface-variant m-0">@neuro_arc</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
            </div>
            
            <div className="py-4 flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">key</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold m-0">Security</p>
                  <p className="font-body text-xs text-on-surface-variant m-0">Two-factor enabled</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
            </div>
          </div>
        </section>

        {/* Storage Status */}
        <section className="grid grid-cols-5 gap-4 items-end">
          <div className="col-span-3 space-y-4">
            <h3 className="font-headline text-xs font-black tracking-[0.2em] text-on-surface-variant uppercase m-0">Storage</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-headline text-2xl font-bold">1.2<span className="text-sm text-on-surface-variant ml-1">GB</span></span>
                <span className="text-xs text-on-surface-variant">of 5GB used</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[24%] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <button className="w-full py-2 bg-surface-bright text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform rounded-sm border-none cursor-pointer">Upgrade</button>
          </div>
        </section>

        {/* Integration Section */}
        <section className="space-y-4">
          <h3 className="font-headline text-xs font-black tracking-[0.2em] text-on-surface-variant uppercase m-0">Integrations</h3>
          <div className="bg-surface-container-low p-5 flex items-center gap-5 border-l-2 border-primary rounded-r-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-black rounded-sm">
              <img 
                alt="Obsidian Logo" 
                className="w-8 h-8 opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiwl3Gxn2eR46m8_vCwgg8kIO41EnP5J1X2yyj7bCQHvcgZyTYI3x9HLdL5oybNX_SzP-31g3HSphd7ar1yF8BNR2gXEw8CY79iQOFYDOqQURP5XmmlSyZuCZoByKKPPUYcqEXB3daO56ryFaeJ4rCA3ZJvjje80xD6eWdoRdmk48-ZLpI1dcZ5dMSOcPF7fJmEZbC8RjyDWbSO6iKehjEuFvf6Xfa6kK8xDov9Qnc3pEw3ZYig0QtHqAU58LEGsqBkNDBKF9gcrW1" 
              />
            </div>
            <div className="flex-1">
              <h4 className="font-body text-sm font-bold m-0">Export to Obsidian</h4>
              <p className="text-[10px] text-on-surface-variant leading-relaxed m-0">Batch export all Markdown files with YAML frontmatter intact.</p>
            </div>
            <button className="p-2 hover:bg-surface-bright transition-colors rounded-sm bg-transparent border-none cursor-pointer">
              <span className="material-symbols-outlined text-primary">file_download</span>
            </button>
          </div>
        </section>

        {/* Logout Action */}
        <section className="pt-8 pb-12">
          <button className="w-full py-4 border border-error/20 text-error font-headline text-xs font-black uppercase tracking-widest hover:bg-error/5 transition-colors bg-transparent rounded-sm cursor-pointer">
            Terminate Session
          </button>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pb-safe bg-surface-container-low border-t border-outline-variant/15 z-50 h-20">
        <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-white transition-all cursor-pointer">
          <span className="material-symbols-outlined pb-1">database</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Vault</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-white transition-all cursor-pointer">
          <span className="material-symbols-outlined pb-1">tactic</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Draw</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-white transition-all cursor-pointer">
          <span className="material-symbols-outlined pb-1">share_reviews</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Public</span>
        </div>
        
        {/* Active Tab: Settings */}
        <div className="flex flex-col items-center justify-center text-primary relative after:content-[''] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-primary after:rounded-full cursor-pointer">
          <span className="material-symbols-outlined pb-1">settings</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Settings</span>
        </div>
      </nav>
    </div>
  );
};

export default Settings;
