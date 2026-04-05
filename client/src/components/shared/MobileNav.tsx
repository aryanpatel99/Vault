import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Access', path: '/dashboard', icon: 'fingerprint' },
    { label: 'Discovery', path: '/search', icon: 'explore' },
    { label: 'Drafts', path: '/excalidraw', icon: 'draw' },
    { label: 'Security', path: '/settings', icon: 'shield_lock' }
  ];

  return (
    <nav className="md:hidden fixed bottom-1 left-0 w-full flex justify-around items-center py-4 px-8 bg-background/95 backdrop-blur-lg border-t border-outline-variant/15 z-50">
      {navItems.map((item) => (
        <button 
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`bg-transparent border-none cursor-pointer flex flex-col items-center justify-center transition-all duration-300 relative ${
            location.pathname === item.path 
            ? "text-primary font-bold after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1" 
            : "text-outline hover:text-white"
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileNav;
