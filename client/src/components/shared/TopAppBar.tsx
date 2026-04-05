import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LockIcon } from '../../lib/icons';

const TopAppBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleShare = async () => {
    // Basic share functionality - can be expanded
    const baseUrl = import.meta.env.VITE_API_URl;
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${baseUrl}/api/v1/brain/share`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ isEnabled: true })
      });
      const data = await response.json();
      if (data.shareLink) {
        window.open(`/public?share=${data.shareLink}`, '_blank');
      }
    } catch (e) {
      console.error("Sharing failed", e);
    }
  };

  return (
    <header className="fixed top-0 z-50 flex items-center justify-between px-6 h-16 w-full bg-surface-container-low/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/dashboard')}>
        <span className="material-symbols-outlined text-primary"><LockIcon /></span>
        <h1 className="font-headline tracking-[0.2em] font-black text-white text-xl uppercase m-0">VAULT</h1>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className={`font-label text-[10px] uppercase tracking-widest bg-transparent border-none cursor-pointer font-bold relative transition-colors ${
              location.pathname === '/dashboard' 
              ? "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full" 
              : "text-outline hover:text-white"
            }`}
          >
            Access
          </button>
          <button 
            onClick={() => navigate('/search')}
            className={`font-label text-[10px] uppercase tracking-widest bg-transparent border-none cursor-pointer font-bold relative transition-colors ${
              location.pathname === '/search' 
              ? "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full" 
              : "text-outline hover:text-white"
            }`}
          >
            Discovery
          </button>
          <button 
            onClick={() => navigate('/excalidraw')}
            className={`font-label text-[10px] uppercase tracking-widest bg-transparent border-none cursor-pointer font-bold relative transition-colors ${
              location.pathname === '/excalidraw' 
              ? "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full" 
              : "text-outline hover:text-white"
            }`}
          >
            Drafts
          </button>
          <button 
            onClick={() => navigate('/settings')}
            className={`font-label text-[10px] uppercase tracking-widest bg-transparent border-none cursor-pointer font-bold relative transition-colors ${
              location.pathname === '/settings' 
              ? "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full" 
              : "text-outline hover:text-white"
            }`}
          >
            Security
          </button>
        </nav>
        <button 
          onClick={handleShare}
          className="bg-primary text-on-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm hover:scale-105 transition-transform duration-150 active:scale-95 border-none cursor-pointer"
        >
          Share Brain
        </button>
      </div>
    </header>
  );
};

export default TopAppBar;
