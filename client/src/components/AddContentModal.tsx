import { AddCircleIcon, CogIcon, DocumentIcon, SearchIcon } from '@/lib/icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import EmbedCard from './EmbedCard';

const AddContentModal: React.FC = () => {

  const [title,setTitle] = useState("");
  const [link,setLink] = useState("");
  const [tags,setTags] = useState("");
  const navigate = useNavigate()

  const addContent = async()=>{
    const baseUrl = import.meta.env.VITE_API_URl;
    const endpoint = "/api/v1/content";
    const token = localStorage.getItem("token");

    // Split tags by comma and trim whitespace
    const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "");

    try {
      const response = await fetch(baseUrl+endpoint,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
          title,
          link,
          tags: tagsArray
        })
      })

      const data = await response.json()
      console.log("DATA :",data)
      if(response.ok){
        toast.success("Content added successfully")
        setTimeout(() => navigate("/dashboard"), 1000);
      }
      else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error("Failed to add content")
    }
    
  }



  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col items-center">
      {/* TopAppBar Shared Component */}
      <header className="bg-[#0e0e0e] border-b border-[#262626]/50 fixed top-0 w-full z-50">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/dashboard")}
              className="text-on-surface-variant hover:text-white transition-colors duration-150 active:scale-90 bg-transparent border-none cursor-pointer p-0 flex"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h1 className="font-headline tracking-tight font-bold text-xl text-on-surface m-0 uppercase">Add to Vault</h1>
          </div>
          <button 
            onClick={addContent}
            className="text-primary font-headline tracking-tight font-bold text-xl hover:text-white transition-colors duration-150 active:scale-90 bg-transparent border-none cursor-pointer"
          >
            Save
          </button>
        </div>
      </header>
      
      {/* Main Content Canvas */}
      <main className="w-full max-w-7xl px-6 mt-24 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Input Form Section */}
        <section className="bg-surface-container-low p-8 border border-outline-variant/10 shadow-2xl relative overflow-hidden text-left">
          <div className="mb-12">
            <span className="text-primary mb-4 inline-block material-symbols-outlined text-[40px]">inventory_2</span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter leading-none text-on-surface m-0 uppercase">Capture Knowledge</h2>
            <p className="font-body text-on-surface-variant mt-2 text-sm uppercase tracking-widest font-medium m-0">New Entry • Secure Vault</p>
          </div>
          
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 group-focus-within:text-primary transition-colors">Information Title</label>
              <input 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 text-lg font-medium text-on-surface placeholder:text-outline/40 transition-all duration-200 outline-none focus:border-primary focus:scale-[1.02]" 
                placeholder="Quantum Mechanics Overview" 
                type="text" 
              />
            </div>
            
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 group-focus-within:text-primary transition-colors">Resource URL</label>
              <div className="relative">
                <span className="absolute left-0 top-3 text-outline-variant material-symbols-outlined text-sm">link</span>
                <input 
                  value={link}
                  onChange={(e)=>setLink(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 pl-7 text-lg font-medium text-on-surface placeholder:text-outline/40 transition-all duration-200 outline-none focus:border-primary focus:scale-[1.02]" 
                  placeholder="https://..." 
                  type="url" 
                />
              </div>
            </div>
            
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 group-focus-within:text-primary transition-colors">Metadata Tags</label>
              <input 
                value={tags}
                onChange={(e)=>setTags(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 text-lg font-medium text-on-surface placeholder:text-outline/40 transition-all duration-200 outline-none focus:border-primary focus:scale-[1.02]" 
                placeholder="Enter tags, separated by commas (physics, research)" 
                type="text" 
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button 
                onClick={addContent}
                className="flex-1 bg-primary text-on-primary font-headline font-bold py-4 text-sm tracking-widest uppercase transition-all duration-200 hover:scale-[1.05] active:scale-[0.95] border-none cursor-pointer rounded-sm" 
                type="submit"
              >
                Save to Vault
              </button>
              <button 
              onClick={()=>navigate("/dashboard")}
                className="flex-1 border border-outline-variant/30 text-on-surface bg-transparent font-headline font-bold py-4 text-sm tracking-widest uppercase transition-all duration-200 hover:bg-surface-container-high active:scale-[0.95] cursor-pointer rounded-sm" 
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-primary"></div>
        </section>

        {/* Live Preview Section */}
        <section className="hidden lg:block sticky top-24">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-headline text-lg font-bold text-white uppercase tracking-widest m-0">Live Preview</h3>
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Real-time Rendering</span>
            </div>
            {link ? (
                <div className="max-w-md mx-auto">
                    <EmbedCard 
                        title={title || "Untitled Insight"} 
                        link={link} 
                        tags={tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "")} 
                    />
                </div>
            ) : (
                <div className="h-[400px] border-2 border-dashed border-[#262626] rounded-sm flex flex-col items-center justify-center text-outline group hover:border-primary/30 transition-colors">
                    <span className="material-symbols-outlined text-5xl mb-4 group-hover:scale-110 transition-transform">visibility</span>
                    <p className="text-sm font-medium">Input a URL to see the magic</p>
                </div>
            )}
        </section>
      </main>
      
      {/* BottomNavBar Shared Component */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#0e0e0e] border-t border-[#262626]/50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:hidden">
        <a onClick={()=>navigate("/dashboard")} className="flex flex-col items-center justify-center text-outline hover:text-white transition-colors duration-150 hover:scale-105 no-underline" href="#">
          <span className="material-symbols-outlined"><DocumentIcon /></span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Vault</span>
        </a>
        <a className="flex flex-col items-center justify-center text-outline hover:text-white transition-colors duration-150 hover:scale-105 no-underline" href="#">
          <span className="material-symbols-outlined"><SearchIcon /></span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Search</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary scale-105 transition-transform duration-200 no-underline" href="#">
          <span className="material-symbols-outlined"><AddCircleIcon /></span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Capture</span>
        </a>
        <a onClick={()=> navigate('/settings')} className="flex flex-col items-center justify-center text-[#757575] hover:text-white transition-colors duration-150 hover:scale-105 transition-transform duration-200 no-underline" href="#">
          <span className="material-symbols-outlined"><CogIcon /></span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default AddContentModal;


