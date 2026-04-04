import React, { useEffect, useState } from 'react';
import { AddIcon, LockIcon, SearchIcon } from '../lib/icons';
import { useNavigate } from 'react-router-dom';

type Content = {
  userId: string,
  title: string,
  link: string,
  tags: string[],
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<Content[]>([]);
  const getContent = async () => {
    const baseUrl = import.meta.env.VITE_API_URl;
    const endpoint = "/api/v1/content";
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

    const response = await fetch(baseUrl + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const data = await response.json();
    setContent(data);
    console.log("CONTENT: ", data)

  }

  useEffect(() => {
    getContent();
  }, [])


  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 z-50 flex items-center justify-between px-6 h-16 w-full bg-surface-container-low">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary"><LockIcon /></span>
          <h1 className="font-headline tracking-[0.2em] font-black text-white text-xl uppercase m-0">VAULT</h1>
        </div>
        <div className="flex items-center gap-6">
          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex gap-8">
            <a className="font-label text-[10px] uppercase tracking-widest text-primary font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full no-underline" href="#">
              Access
            </a>
            <a className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-white transition-colors no-underline" href="#">
              Security
            </a>
          </nav>
          <button className="bg-primary text-on-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm hover:scale-105 transition-transform duration-150 active:scale-95 border-none cursor-pointer">
            Share Brain
          </button>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <section className="mb-12">
          <h2 className="font-headline font-extrabold md:text-5xl text-4xl tracking-tighter mb-2 text-white m-0">Knowledge Graph</h2>
          <p className="text-on-surface-variant font-body max-w-xl m-0">A curated repository of your digital consciousness. Organized by intent, preserved in obsidian.</p>
        </section>

        {/* Search & Filter Bar */}
        <div className="flex items-center justify-between mb-8 border-b border-outline-variant/15 pb-4">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm"><SearchIcon /></span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-outline outline-none"
              placeholder="Search the vault..."
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <button className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Recent</button>
            <button className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Starred</button>
          </div>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Hero Card */}
          <div className="md:col-span-8 group cursor-pointer bg-surface-container-low p-8 rounded-sm hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden h-[300px] flex flex-col justify-end">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img
                alt="Abstract texture"
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF2GkqMRbHMcsrWB86TiBHdZDOsJOqKoQajmyOZSdf3PWDfWDIz1AUkwuYfUsPk7o2-grqiRQpnMiz58Et59Cxnp1y0Mkgl-1ivyaBocoxpXycs6Ng1-UvdmKy712kenbZOh_wlht9KeKTBzpsTP6PmCGOF9acMaR6LppHpDV7tmTgvVaBei2K0b5E6c6r8Qv2zjU6XMfGITsIg7azMsQOpoGZUv7i0xmnu5_HiIOBpxuLfcG5ew2W6JBAinuyK61Urx8iJNUbIQ2f"
              />
            </div>
            <div className="relative z-10 text-left">
              <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-3 block">Featured Insight</span>
              <h3 className="text-3xl font-headline font-extrabold text-white mb-4 leading-none m-0">Principles of Minimalism</h3>
              <p className="text-on-surface-variant mb-6 max-w-md m-0">How to apply radical essentialism to modern digital workflows and personal knowledge management.</p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-outline font-medium">minimalism.com</span>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter hover:bg-primary hover:text-on-primary transition-colors cursor-default">#philosophy</span>
                  <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter hover:bg-primary hover:text-on-primary transition-colors cursor-default">#lifestyle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="md:col-span-4 group cursor-pointer bg-surface-container-low p-6 rounded-sm hover:bg-surface-container-high transition-all duration-300 border-l-2 border-transparent hover:border-primary text-left">
            <span className="material-symbols-outlined text-primary mb-6 block">terminal</span>
            <h3 className="text-xl font-headline font-bold text-white mb-2 m-0">Productivity Stack</h3>
            <p className="text-sm text-on-surface-variant mb-4 m-0">A compiled list of terminal-based tools for extreme efficiency.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#productivity</span>
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#dev</span>
            </div>
            <span className="text-[10px] text-outline font-medium block">github.com/tools</span>
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-4 group cursor-pointer bg-surface-container-low p-6 rounded-sm hover:bg-surface-container-high transition-all duration-300 border-l-2 border-transparent hover:border-primary text-left">
            <span className="material-symbols-outlined text-primary mb-6 block">neurology</span>
            <h3 className="text-xl font-headline font-bold text-white mb-2 m-0">Knowledge Graphs</h3>
            <p className="text-sm text-on-surface-variant mb-4 m-0">Structuring unstructured data for better long-term recall.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#knowledge</span>
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#ai</span>
            </div>
            <span className="text-[10px] text-outline font-medium block">vault.io/docs</span>
          </div>

          {/* Wide Card */}
          <div className="md:col-span-8 group cursor-pointer bg-surface-container-low p-6 rounded-sm hover:bg-surface-container-high transition-all duration-300 flex flex-col md:flex-row gap-8 items-center text-left">
            <div className="w-full md:w-1/3 aspect-video bg-surface-container overflow-hidden rounded-sm">
              <img
                alt="Cybernetic pattern"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuvQti0pk0FjwWCF3v9QkFCivgpcbfoKUzQYMtU-WaSx1Oz8KqgmYkQgBUNXRD6CsXk21z_yZ29iZGjLu3F2PnhMEIgQGMwCliab1kkGfJB-mGvqxQP8E1qobTB-d7cJq6yHKm8wbJy17s3vsP7NbWsELQfycHDv3_h9xFvKaiRTZozSvfHpbF7i7F4qKZI9o6TPYe5EI_xbo3yW1ZEeIGOzDua71O2RNvIR7WBDMTj5-ou69DQ1boPn9evfmuC2xNgpZwpQ1J5yjN"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-headline font-bold text-white mb-2 m-0">The Second Brain Manifesto</h3>
              <p className="text-sm text-on-surface-variant mb-4 m-0">Why we must outsource our memory to digital substrates to survive the information age.</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#manifesto</span>
                  <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#vision</span>
                </div>
                <span className="text-[10px] text-outline font-medium">medium.com/vault</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 group cursor-pointer bg-surface-container-low p-6 rounded-sm hover:bg-surface-container-high transition-all duration-300 text-left border-l-2 border-transparent hover:border-primary">
            <h3 className="text-xl font-headline font-bold text-white mb-2 m-0">Deep Work Framework</h3>
            <p className="text-sm text-on-surface-variant mb-4 m-0">Scheduling blocks for cognitive output without distraction.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#focus</span>
            </div>
            <span className="text-[10px] text-outline font-medium block">calnewport.com</span>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-4 group cursor-pointer bg-surface-container-low p-6 rounded-sm hover:bg-surface-container-high transition-all duration-300 text-left border-l-2 border-transparent hover:border-primary">
            <h3 className="text-xl font-headline font-bold text-white mb-2 m-0">Interface Design Theory</h3>
            <p className="text-sm text-on-surface-variant mb-4 m-0">Exploring spatial metaphors in modern software development.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#ui</span>
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#ux</span>
            </div>
            <span className="text-[10px] text-outline font-medium block">di.design</span>
          </div>

          {/* Card 5 */}
          <div className="md:col-span-4 group cursor-pointer bg-surface-container-low p-6 rounded-sm hover:bg-surface-container-high transition-all duration-300 text-left border-l-2 border-transparent hover:border-primary">
            <h3 className="text-xl font-headline font-bold text-white mb-2 m-0">Quantum Computing Basics</h3>
            <p className="text-sm text-on-surface-variant mb-4 m-0">Understanding qubits and superposition in plain language.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-surface-variant text-[9px] text-on-surface-variant uppercase tracking-tighter">#science</span>
            </div>
            <span className="text-[10px] text-outline font-medium block">nature.com</span>
          </div>

        </div>
      </main>

      {/* Floating Action Button */}
      <button onClick={() => navigate("/add")} className="fixed bottom-24 right-8 md:bottom-12 md:right-12 z-60 group flex items-center gap-3 bg-primary text-on-primary pl-4 pr-6 py-4 rounded-sm shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-none cursor-pointer">
        <span className="material-symbols-outlined text-2xl"><AddIcon /></span>
        <span className="font-headline font-bold text-xs uppercase tracking-widest">Add Content</span>
      </button>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-4 px-8 bg-background border-t border-outline-variant/15 z-50">
        <a className="flex flex-col items-center justify-center text-primary font-bold after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 no-underline" href="#">
          <span className="material-symbols-outlined">fingerprint</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">Access</span>
        </a>
        <a className="flex flex-col items-center justify-center text-outline hover:text-white transition-colors no-underline" href="#">
          <span className="material-symbols-outlined">shield_lock</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">Security</span>
        </a>
      </nav>
    </div>
  );
};

export default Dashboard;
