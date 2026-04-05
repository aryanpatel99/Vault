import { DeleteIcon, LinkIcon } from '@/lib/icons';
import React, { useEffect, useRef } from 'react';

interface EmbedCardProps {
  contentId: string;
  title: string;
  link: string;
  tags?: string[];
  description?: string;
  thumbnail?: string;
  onDelete?: (id: string) => void;
}

declare global {
  interface Window {
    twttr: any;
  }
}

const EmbedCard: React.FC<EmbedCardProps> = ({ contentId, title, link, tags, description, thumbnail, onDelete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isRendering = useRef(false);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getTwitterEmbedUrl = (url: string) => {
    try {
      if (url.includes('twitter.com') || url.includes('x.com')) {
        const parts = url.split('/');
        const statusIndex = parts.indexOf('status');
        if (statusIndex !== -1 && parts[statusIndex + 1]) {
            return parts[statusIndex + 1].split('?')[0];
        }
      }
    } catch (e) {
      return null;
    }
    return null;
  };

  const youtubeId = getYouTubeId(link);
  const tweetId = getTwitterEmbedUrl(link);

  useEffect(() => {
    if (tweetId && containerRef.current) {
      const renderTweet = async () => {
        if (window.twttr && window.twttr.widgets && containerRef.current && !isRendering.current) {
          // PHYSICAL GUARD: If an iframe already exists, do not render another
          if (containerRef.current.getElementsByTagName('iframe').length > 0) return;

          isRendering.current = true;
          containerRef.current.innerHTML = ''; 
          try {
            await window.twttr.widgets.createTweet(
              tweetId,
              containerRef.current,
              { 
                theme: 'dark', 
                align: 'center', 
                width: '100%',
                conversation: 'none',
                cards: 'visible'
              }
            );
          } catch (e) {
            console.error("Tweet render failed:", e);
          } finally {
            isRendering.current = false;
          }
        }
      };

      if (!window.twttr) {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        script.setAttribute('async', 'true');
        script.setAttribute('charset', 'utf-8');
        document.head.appendChild(script);
        script.onerror = () => { isRendering.current = false; };
        script.onload = renderTweet;
      } else {
        renderTweet();
      }
    }

    return () => {
      // Small delay on cleanup to avoid flashing during quick remounts
      if (containerRef.current) containerRef.current.innerHTML = '';
      isRendering.current = false;
    };
  }, [link, tweetId]);

  return (
    <div className="group cursor-pointer bg-surface-container-low p-5 rounded-sm hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/10 text-left flex flex-col h-fit shadow-lg break-inside-avoid mb-6 relative overflow-hidden backdrop-blur-sm">
      {/* Decorative Glow for Premium Feel */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-700"></div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3 overflow-hidden">
          {(!youtubeId && !tweetId) && <LinkIcon />}
          <h3 className="text-lg font-headline font-black text-white m-0 truncate uppercase tracking-tight selection:bg-primary/30">
            {title || 'Knowledge Fragment'}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          {onDelete && (
             <button 
                onClick={(e) => { e.stopPropagation(); onDelete(contentId); }} 
                className="text-outline hover:text-red-400 transition-colors duration-200"
                title="Delete Insight"
             >
               <DeleteIcon />
             </button>
          )}
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-outline hover:text-white transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <LinkIcon />
          </a>
        </div>
      </div>

      <div className="mb-4 overflow-hidden rounded-xs bg-black/40 border border-outline-variant/10 relative z-10">
        {youtubeId ? (
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        ) : tweetId ? (
          <div key={link} ref={containerRef} className="w-full p-2 overflow-hidden twitter-container min-h-32 flex items-center justify-center">
             <div className="text-[9px] text-outline uppercase tracking-widest animate-pulse font-bold">Hydrating Social Feed...</div>
          </div>
        ) : (
          <div className="flex flex-col">
            {thumbnail ? (
              <div className="w-full h-40 overflow-hidden relative">
                <img 
                   src={thumbnail} 
                   alt={title} 
                   loading="lazy" 
                   className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            ) : (
                <div className="w-full h-32 bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] flex items-center justify-center overflow-hidden">
                    <img 
                        src={`https://www.google.com/s2/favicons?domain=${new URL(link).hostname}&sz=128`}
                        alt="icon"
                        className="w-12 h-12 opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110 grayscale"
                    />
                </div>
            )}
            <div className="p-5">
              {description ? (
                <p className="text-[11px] text-on-surface-variant font-body leading-relaxed m-0 line-clamp-3">
                  {description}
                </p>
              ) : (
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-primary font-black uppercase tracking-[0.2em] mb-1">External Resource</span>
                  <p className="text-[11px] text-outline font-medium truncate break-all m-0">{link}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 relative z-10">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span key={index} className="px-1.5 py-0.5 bg-primary/10 text-[8px] text-primary uppercase tracking-tighter font-black rounded-xs border border-primary/5">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between border-t border-outline-variant/10 pt-3">
          <span className="text-[10px] text-outline font-headline font-bold uppercase tracking-widest truncate">
            {new URL(link).hostname.replace('www.', '')}
          </span>
          <div className="px-2 py-0.5 bg-white/5 rounded-full">
            <span className="text-[8px] text-outline font-black uppercase tracking-widest">
              {youtubeId ? 'Video' : tweetId ? 'Social' : 'Bookmark'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbedCard;
