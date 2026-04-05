import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpIcon, LockIcon, UnLockIcon } from '../lib/icons';
import { toast } from 'sonner';

const Authentication: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [persist, setPersist] = useState(true)
  const navigate = useNavigate();

  const handleAuth = async (e:React.SyntheticEvent)=>{
    e.preventDefault()
    setError('')
    setLoading(true)
    const BASE_URL = import.meta.env.VITE_API_URl
    const endpoint = isLogin ? "/api/v1/signin" : "/api/v1/signup";
    try {
      const response = await fetch(BASE_URL+endpoint,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,
          password
        })
      })
      const data = await response.json()
      if (response.ok) {
        if (isLogin) {
          if (persist) {
            localStorage.setItem("token", data.token)
          } else {
            sessionStorage.setItem("token", data.token)
          }
          navigate('/dashboard')
        } else {
          setIsLogin(true)
          setUsername('')
          setPassword('')
          toast.success("Protocol initialized. Please configure identity.")
        }
      } else {
        setError(data.message || "Authentication sequence failed.")
        toast.error(data.message || "Authentication sequence failed.")
      }
    } catch (err) {
      setError("Communication link failure.")
      toast.error("Communication link failure.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <header className="fixed top-0 w-full flex items-center justify-between px-6 h-16 z-50 bg-surface-container-low border-b border-surface">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary"><LockIcon/></span>
          <h1 className="font-headline tracking-tighter font-bold uppercase text-primary text-xl m-0">VAULT</h1>
        </div>
        <div className="text-xl tracking-[0.2em] font-black text-white">ACCESS</div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:scale-105 transition-transform duration-150 cursor-pointer">
            <HelpIcon/>
          </span>
        </div>
      </header>
      
      <main className="relative w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-center gap-16 py-24 mt-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-primary font-label text-xs tracking-[0.3em] uppercase opacity-80">Security Protocol 09-X</span>
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight m-0">
              YOUR<br />DIGITAL<br /><span className="text-primary">MONOLITH.</span>
            </h2>
          </div>
          <p className="font-body text-on-surface-variant text-lg max-w-md leading-relaxed m-0">
            A surgical environment for your knowledge. Encrypted, offline-first, and carved from the void of infinite focus.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 w-full">
            <div>
              <h4 className="font-headline font-bold text-white text-sm uppercase tracking-widest mb-2 m-0">Immutable</h4>
              <p className="font-body text-xs text-outline leading-tight m-0">Every byte signed and verified.</p>
            </div>
            <div>
              <h4 className="font-headline font-bold text-white text-sm uppercase tracking-widest mb-2 m-0">Isolated</h4>
              <p className="font-body text-xs text-outline leading-tight m-0">Zero-knowledge architecture.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Authentication Card */}
        <div className="w-full md:w-105 bg-surface-container-low p-8 relative">
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/30"></div>
          <div className="flex flex-col space-y-10">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline font-extrabold text-2xl tracking-tight m-0">{isLogin ? "Identity Hub" : "Create Protocol"}</h3>
                <div className="flex bg-surface-container-highest p-1 rounded-sm gap-1">
                  <button 
                    onClick={() => setIsLogin(true)}
                    type="button"
                    className={`px-4 py-1.5 text-[10px] font-label font-bold uppercase tracking-widest transition-all duration-150 rounded-sm cursor-pointer border-none ${isLogin ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-white bg-transparent'}`}>
                    Sign In
                  </button>
                  <button 
                    onClick={() => setIsLogin(false)}
                    type="button"
                    className={`px-4 py-1.5 text-[10px] font-label font-bold uppercase tracking-widest transition-all duration-150 rounded-sm cursor-pointer border-none ${!isLogin ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-white bg-transparent'}`}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            
            <form className="space-y-8 flex flex-col" onSubmit={handleAuth}>
              <div className="group relative flex flex-col space-y-2 text-left">
                <label className="text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-primary">
                  Username
                </label>
                <input 
                  onChange={(e)=> setUsername(e.target.value)}
                  value={username}
                  className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary text-on-surface placeholder-outline/30 font-body transition-all duration-150 outline-none w-full" 
                  placeholder="admin_monolith" 
                  type="text" 
                  required
                  minLength={3}
                />
              </div>
              <div className="group relative flex flex-col space-y-2 text-left">
                <label className="text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-primary">
                  Master Key
                </label>
                <input 
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                  className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary text-on-surface placeholder-outline/30 font-body transition-all duration-150 outline-none w-full" 
                  placeholder="••••••••••••" 
                  type="password" 
                  required
                  minLength={6}
                />
              </div>
              {error && <div className="text-red-500 font-label text-xs uppercase -mt-2.5">{error}</div>}
              <div className="flex items-center justify-between text-xs font-label w-full">
                <label className="flex items-center gap-2 text-on-surface-variant hover:text-white cursor-pointer transition-colors group">
                  <input 
                    className="w-3 h-3 bg-surface-container border-outline-variant rounded-sm text-primary focus:ring-offset-background focus:ring-primary transition-all" 
                    type="checkbox" 
                    checked={persist}
                    onChange={(e) => setPersist(e.target.checked)}
                  />
                  <span>Persist session</span>
                </label>
                <a className="text-on-surface-variant hover:text-primary transition-colors italic no-underline" href="#">
                  Recovery procedure?
                </a>
              </div>
              <button 
                className="group relative w-full bg-primary text-on-primary py-4 font-headline font-black text-sm uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center gap-3 border-none cursor-pointer mt-4" 
                type="submit"
                disabled={loading}
              >
                <UnLockIcon/>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">{loading ? "PROCESSING..." : isLogin ? "UNLOCK" : "INITIALIZE"}</span>
              </button>
            </form>

            <div className="space-y-4 pt-4">
              <div className="relative flex items-center">
                <div className="grow border-t border-outline-variant/30"></div>
                <span className="shrink mx-4 text-[9px] font-label text-outline uppercase tracking-[0.2em]">Hardware Auth</span>
                <div className="grow border-t border-outline-variant/30"></div>
              </div>
              <button className="w-full flex items-center justify-center gap-3 py-3 border border-outline-variant/30 text-on-surface-variant font-label text-xs uppercase tracking-widest hover:bg-surface-container-high hover:text-white transition-all duration-150 bg-transparent cursor-pointer">
                <span className="material-symbols-outlined text-sm">key</span>
                Passkey / Yubikey
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-10 w-px h-[60%] bg-outline-variant/20"></div>
        <div className="absolute top-20 right-20 w-px h-[40%] bg-outline-variant/20"></div>
        <div className="absolute bottom-40 right-40 w-1/3 h-px bg-outline-variant/20"></div>
      </div>
    </div>
  );
};

export default Authentication;
