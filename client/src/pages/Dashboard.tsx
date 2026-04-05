import React, { useEffect, useState, Suspense, lazy } from 'react';
import { AddIcon, SearchIcon } from '../lib/icons';
import { useNavigate } from 'react-router-dom';
import MobileNav from '../components/shared/MobileNav';
import TopAppBar from '../components/shared/TopAppBar';

const EmbedCard = lazy(() => import('../components/EmbedCard'));

type Content = {
  _id: string,
  userId: string,
  title: string,
  link: string,
  description?: string,
  thumbnail?: string,
  tags: string[],
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<Content[]>([]);
  
  const getContent = async () => {
    const baseUrl = import.meta.env.VITE_API_URl;
    const endpoint = "/api/v1/content";
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) {
      navigate("/auth");
      return;
    }

    try {
        const response = await fetch(baseUrl + endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json();
        setContent(data.contents || []);
    } catch (e) {
        console.error("Fetch failed", e);
    }
  }

  const handleDelete = async (id: string) => {
    const baseUrl = import.meta.env.VITE_API_URl;
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${baseUrl}/api/v1/content/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        setContent(prev => prev.filter(item => item._id !== id));
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    getContent();
  }, [])


  return (
    <div className="bg-background text-on-background min-h-screen">
      <TopAppBar />

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <section className="mb-12">
          <h2 className="font-headline font-extrabold md:text-5xl text-4xl tracking-tighter mb-2 text-white m-0 uppercase line-clamp-1">Knowledge Graph</h2>
          <p className="text-on-surface-variant font-body max-w-xl m-0">A curated repository of your digital consciousness. Organized by intent, preserved in obsidian.</p>
        </section>

        <div className="flex items-center justify-between mb-8 border-b border-outline-variant/15 pb-4">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm"><SearchIcon /></span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-outline outline-none"
              placeholder="Search the vault..."
              type="text"
              onClick={() => navigate('/search')}
            />
          </div>
          <div className="flex gap-4">
            <button className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Recent</button>
            <button className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Starred</button>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <Suspense fallback={
            <>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="break-inside-avoid mb-6 h-64 bg-surface-container-low animate-pulse rounded-sm border border-outline-variant/10"></div>
              ))}
            </>
          }>
            {content.length > 0 ? (
              content.map((item) => (
                <div key={item._id} className="break-inside-avoid mb-6">
                  <EmbedCard 
                    contentId={item._id}
                    title={item.title} 
                    link={item.link} 
                    tags={item.tags} 
                    description={item.description}
                    thumbnail={item.thumbnail}
                    onDelete={handleDelete}
                  />
                </div>
              ))
            ) : (
              <div className="md:col-span-12 text-center py-24 bg-surface-container-low rounded-sm">
                  <span className="material-symbols-outlined text-6xl text-outline mb-4">inventory_2</span>
                  <h3 className="text-xl text-white font-bold mb-2">Vault Empty</h3>
                  <p className="text-on-surface-variant">Capture your first piece of knowledge to begin your graph.</p>
              </div>
            )}
          </Suspense>
        </div>
      </main>

      <button onClick={() => navigate("/add")} className="fixed bottom-24 right-8 md:bottom-12 md:right-12 z-60 group flex items-center gap-3 bg-primary text-on-primary pl-4 pr-6 py-4 rounded-sm shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-none cursor-pointer">
        <span className="material-symbols-outlined text-2xl"><AddIcon /></span>
        <span className="font-headline font-bold text-xs uppercase tracking-widest">Add Content</span>
      </button>

      <MobileNav />
    </div>
  );
};

export default Dashboard;
