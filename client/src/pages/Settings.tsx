import React from 'react';
import TopAppBar from '../components/shared/TopAppBar';
import MobileNav from '../components/shared/MobileNav';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 font-body">
      <TopAppBar />

      <main className="pt-24 px-6 max-w-lg mx-auto space-y-12 text-left">
        <section className="space-y-2">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight m-0 text-white uppercase">Settings</h1>
          <p className="font-body text-on-surface-variant text-sm m-0">Manage your digital monolith and external connections.</p>
        </section>

        <section className="bg-surface-container-low p-6 space-y-6 rounded-sm border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="font-headline text-lg font-bold m-0 text-white uppercase tracking-tight">Public Brain</h2>
              <p className="text-xs text-on-surface-variant m-0">Publish your curated thoughts to the web.</p>
            </div>
            <button aria-checked="true" className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary" role="switch">
              <span aria-hidden="true" className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-on-primary shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
          <div className="bg-surface-container p-4 flex items-center justify-between group cursor-pointer hover:bg-surface-bright transition-all rounded-sm border border-outline-variant/5">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Shareable Link</span>
              <span className="font-mono text-primary text-sm">vault.io/neuro_arc</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">content_copy</span>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-headline text-xs font-black tracking-[0.2em] text-on-surface-variant uppercase m-0">Account</h3>
          <div className="divide-y divide-outline-variant/15">
            <div className="py-4 flex items-center justify-between cursor-pointer group hover:pl-2 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold m-0 text-white">Identity Profile</p>
                  <p className="font-body text-xs text-on-surface-variant m-0">@neuro_arc</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-12">
          <button 
             onClick={handleLogout}
             className="w-full py-4 border border-error/20 text-error font-headline text-xs font-black uppercase tracking-widest hover:bg-error/5 transition-colors bg-transparent rounded-sm cursor-pointer"
          >
            Terminate Session
          </button>
        </section>
      </main>

      <MobileNav />
    </div>
  );
};

export default Settings;
