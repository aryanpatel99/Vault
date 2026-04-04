import React from 'react';

const ExcalidrawDocument: React.FC = () => {
  return (
    <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary/30 selection:text-primary">
      {/* TopAppBar */}
      <header className="bg-[#0e0e0e] fixed top-0 w-full z-50 border-b border-outline-variant/15 flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-4">
          <button className="text-primary hover:bg-surface-bright transition-colors duration-150 p-2 rounded bg-transparent border-none cursor-pointer">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="font-headline tracking-tighter uppercase text-2xl font-black text-white m-0">VAULT</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-on-surface-variant hover:bg-surface-bright transition-colors duration-150 p-2 rounded bg-transparent border-none cursor-pointer">
            <span className="material-symbols-outlined">search</span>
          </button>
          <div className="h-8 w-8 rounded-sm bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center overflow-hidden">
            <img 
              alt="User Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtwiuTwE6HSRuww5YjnKlGe5JlYLbn3hI7hs0krHBzHBsppTawEwtpahM5r1Dlu6RTfLiuK990Lcd6uVbrA9HNSrXT_3LDs5kXyUI9Ml6hi0ky-bmalcgdBCXzduqwt9Vyd-272t6EAZew9TvdtXA5rM-Xau6TL1wLBCfMLuns8L8KmAbinEh6j6RKIznqvl5Ea9FvH9Maqr0el8XMNTHxEjQN0_bxBP66fWuBYmVFmRpw3nozavtYEI36qCJxD4Xcij6A7InCwrLK" 
            />
          </div>
        </div>
      </header>
      
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto text-left">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start gap-2">
          <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase">Canvas Library</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter m-0">Drawings</h2>
        </div>
        
        {/* Drawing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card: Project Alpha */}
          <div className="group relative flex flex-col bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-sm overflow-hidden">
            <div className="aspect-video w-full bg-surface-container border-b border-outline-variant/10 overflow-hidden relative">
              <img 
                alt="Project Alpha Sketch" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_QJIlHsHe_mLdXQfZohvZzeIl_dw4rOZX2UcqEqZ0CAkgZgBgz2qLS_jCtOam7kPR6Hahwx20P0oskl-i14MdJG_IDC0G42WqwDsmhC87K8dUYUPa8TK6Xj0E6tGzheLp4s6rQOlZa-a4r_TWckAJPQum2OiV4IHn7sYTPUK8QdAHlX9koEfLk_51MLQB9G19O__NbEhdcsW7XI_GKLNCrTcbJzbthxUcXxIPBpGL5PWnUhVNU9kmedJJe6rSHQK2fsw-LasmmYyB" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline font-bold text-lg text-on-surface m-0">Project Alpha</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
              </div>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider m-0">Modified Oct 24, 2023</p>
            </div>
          </div>
          
          {/* Card: Design Patterns */}
          <div className="group relative flex flex-col bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-sm overflow-hidden">
            <div className="aspect-video w-full bg-surface-container border-b border-outline-variant/10 overflow-hidden relative">
              <img 
                alt="Design Patterns Sketch" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7MGA2mLmDTWTUQjtAJXTDGGHmzBYhD4_aSsAHrmoJ_9oTTEvdVwMIfKYaGPWDwk7Ll6KAz5CKcHOVo6Fa-LS5nF5H172I266seHXTLyAHKCwJaS5uLmazFqA-pMMWVkjenbkAD5yBXvCLkiUclIlTcCmDv7hGZCEoavhmY3q37q8EwiDLZ6tMPS-wy5VsMuFQPSBAbsYL2hUgTJY0_hIx_BzAHAtAPvhiWuq5qDWnybcF2Y7-IEsYf1OyQB-mUAu45bYC8DomTx7" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline font-bold text-lg text-on-surface m-0">Design Patterns</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
              </div>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider m-0">Modified Oct 21, 2023</p>
            </div>
          </div>
          
          {/* Card: User Journey Map */}
          <div className="group relative flex flex-col bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-sm overflow-hidden">
            <div className="aspect-video w-full bg-surface-container border-b border-outline-variant/10 overflow-hidden relative">
              <img 
                alt="User Journey Map Sketch" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxgWIvKDE615hdI7ew8Uyz7J5tg2e89njG6cVG_x3TMqkYNo0FhIko8mJ523yVZi6XXLEuiecnbw1wUg0GCqSJDkP1BXdBTe6DpT4FMsgRaoWTW9rbkYNBVCiOE94I_N_8oyfEB4KkS9x-Aayq_fmdV9lVd3fvz3GocBe6G9dj0-_g6LbttjojJ74B4bTnI780TkEbxlJUM7eBhJgvDzETQRlEMwgu7FrJFeYhW6BReoStEAYRvZmMdpyF3JMI_axASOokbAxmywuK" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline font-bold text-lg text-on-surface m-0">User Journey Map</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
              </div>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider m-0">Modified Oct 15, 2023</p>
            </div>
          </div>
          
          {/* Card: API Architecture */}
          <div className="group relative flex flex-col bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-sm overflow-hidden">
            <div className="aspect-video w-full bg-surface-container border-b border-outline-variant/10 overflow-hidden relative">
              <img 
                alt="API Architecture Sketch" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaF2NRuOj-G57irIt0SCznoFMfc3d6YjxEuTB9OdBRkAJcE1RznXfp4H_5XbPAs5LYfBtxZXKqa1glSmkUOGu9E7MWi5OYkHj8SgF68aLZ-uAGOVRRkgHmnHkdvFa6N3Fg2WIPDBGHZCoB0wFAWrALMLJaHFMY27hnwOFGRG9YXHafXexQc5C57xMtiWJYSDlGIG2YVV_ip-iI3rCntbcaZWEAVjgepKplu9lhAdxWGET6AW4_22J9PEQjY0d20mu2jKHVWr5AEtHM" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline font-bold text-lg text-on-surface m-0">API Architecture</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
              </div>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider m-0">Modified Oct 12, 2023</p>
            </div>
          </div>
          
          {/* Card: Branding Concepts */}
          <div className="group relative flex flex-col bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-sm overflow-hidden">
            <div className="aspect-video w-full bg-surface-container border-b border-outline-variant/10 overflow-hidden relative">
              <img 
                alt="Branding Concepts Sketch" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1eFZxqx94k5C2D4COZOgkHvehxZSXyLqcgm4fwGcG2-aZiWTA9N3qrvlC8-KYNbX4sxtiXD4UA1z0SEHLcLqgVUUao5vJWMXG7gzUwhPzrap2mS-8mfiw4RRDyG40WOze356QzsUtDO6Kbv2DdhLgvhC5LcyjFn4V3903fCTQgyD-Qvc3v3ElCpDvU3x3PCsEOJUBm46uqxeTxuWFmFCzhdO7xffFpB17wg5CC66yDf_kr2wMjqvEopifR4xiTBzck2HHva2ZtZ6-" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline font-bold text-lg text-on-surface m-0">Branding Concepts</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
              </div>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider m-0">Modified Oct 08, 2023</p>
            </div>
          </div>
          
          {/* Card: Mobile App Flow */}
          <div className="group relative flex flex-col bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-sm overflow-hidden">
            <div className="aspect-video w-full bg-surface-container border-b border-outline-variant/10 overflow-hidden relative">
              <img 
                alt="Mobile App Flow Sketch" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCWCo5C12t3HwJZGdeAI-aEvKh_roBNDFb2HtTTP-rcNVh4SMmLbzQtYf_-Op6QmnDQq2TjkhKBqaOc3DpQgvDvqG3W_JXiUmyhN7LjO1XvjTOaThzzPtlQrvksyNYjmRk2ZdkcEmHdr4LqxR1eYYJqTy2SlwXIOK4rAZgyQpl6DARGL_xamPLwrmsV64uboorVXKDJxCwc5rwMpFVrDsrq9UWt9FdhYncBEsjFuWFiZoRBDNvs-NnMsC7cjs1NndMG64nblpnsjOL" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline font-bold text-lg text-on-surface m-0">Mobile App Flow</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
              </div>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider m-0">Modified Sep 29, 2023</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-28 right-8 z-50">
        <button className="bg-primary text-on-primary h-14 w-14 rounded-sm flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border-none cursor-pointer">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
      
      {/* BottomNavBar */}
      <nav className="bg-surface-container-low fixed bottom-0 left-0 w-full flex justify-around items-center pb-safe border-t border-outline-variant/15 z-50 h-20">
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-white transition-all no-underline" href="#">
          <span className="material-symbols-outlined mb-1">database</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Vault</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary relative after:content-[''] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-primary after:rounded-full no-underline" href="#">
          <span className="material-symbols-outlined mb-1">tactic</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Draw</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-white transition-all no-underline" href="#">
          <span className="material-symbols-outlined mb-1">share_reviews</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Public</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-white transition-all no-underline" href="#">
          <span className="material-symbols-outlined mb-1">settings</span>
          <span className="font-label text-[10px] font-medium tracking-wide">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default ExcalidrawDocument;
