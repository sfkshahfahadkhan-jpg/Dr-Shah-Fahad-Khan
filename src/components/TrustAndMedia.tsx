import React from 'react';
import { motion } from 'motion/react';
import { Globe, Youtube, Instagram, Facebook, Phone, Compass, Play, ArrowUpRight, CheckCircle, Flame } from 'lucide-react';
import { ScrollReveal, StaggeredText } from './MotionEffects';

interface TrustAndMediaProps {
  onOpenPlaylist: () => void;
  videoUrl?: string;
  videoTitle?: string;
}

export const TrustAndMedia: React.FC<TrustAndMediaProps> = ({ 
  onOpenPlaylist,
  videoUrl = "https://youtube.com/playlist?list=PLDgKaUqENeyZqnsdw2v9ZDYLpTXS-CGrv&si=-JvrkR8PP1jVsN7p",
  videoTitle = "Elite Science & AKU Preparation"
}) => {
  // Global affiliations representing real physical institutions
  const affiliations = [
    { name: "Cana Elite Academy", region: "Hong Kong", tag: "Sciences & IB Guide" },
    { name: "Nixor College", region: "Karachi, Pakistan", tag: "A-Level Faculty" },
    { name: "For You Education", region: "Hong Kong", tag: "IGCSE & AP Expert" },
    { name: "ToppTutors HK", region: "Hong Kong", tag: "Elite Admissions Partner" },
  ];

  // Mock social proofs representing actual premium channels
  const socialChannels = [
    {
      platform: "YouTube Lectures",
      icon: Youtube,
      handle: "@SFK_Academy",
      metric: "15,000+ subscriber community",
      color: "from-red-600/20 to-pink-600/10 shadow-red-950/20",
      accent: "text-red-500",
      cta: "View Lecture Series",
      link: "https://youtube.com/playlist?list=PLDgKaUqENeyZqnsdw2v9ZDYLpTXS-CGrv&si=-JvrkR8PP1jVsN7p"
    },
    {
      platform: "Instagram Insights",
      icon: Instagram,
      handle: "@dr_shah_fahad_khan",
      metric: "Daily diagnostic hacks & tips",
      color: "from-purple-600/20 to-pink-600/10 shadow-pink-950/20",
      accent: "text-pink-400",
      cta: "Explore Reel Tips",
      link: "https://www.instagram.com/dr_shah_fahad_khan/"
    },
    {
      platform: "Facebook Hub",
      icon: Facebook,
      handle: "/sfkacademy",
      metric: "O/A Level group discussions",
      color: "from-blue-600/20 to-cyan-600/10 shadow-blue-950/20",
      accent: "text-blue-400",
      cta: "Join Community Group",
      link: "https://www.facebook.com/sfkacademy"
    }
  ];

  return (
    <div className="space-y-24 py-8">
      
      {/* SECTION 1: Affiliations and Trusted By section */}
      <div className="space-y-8 relative">
        {/* Soft premium halo */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <ScrollReveal direction="up" className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-brand-gold px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(232,162,35,0.05)]">
            <Globe className="w-4 h-4 text-brand-gold animate-pulse" />
            <span>GLOBAL ACADEMIC TRUST FOOTPRINT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight uppercase">
            <StaggeredText text="Trusted by Top Private Schools & Institutions" delay={0.1} />
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            From premier campuses in Pakistan to luxury IB learning centers in Hong Kong, Dr. Shah Fahad Khan is recognized internationally.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 relative z-10">
          {affiliations.map((aff, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 0.1}
              className="h-full"
            >
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(232, 162, 35, 0.45)' }}
                className="p-6 bg-slate-950/60 hover:bg-slate-950 border border-slate-900 rounded-3xl flex flex-col justify-between gap-4 transition-all duration-300 relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.4)] h-full"
              >
                {/* Subtle gold highlight */}
                <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-brand-gold via-amber-400 to-transparent" />
                
                <div className="space-y-1">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{aff.region}</div>
                  <h3 className="text-xl font-black font-sans text-white group-hover:text-brand-gold transition-colors">{aff.name}</h3>
                </div>

                <div className="flex items-center justify-between text-xs font-black text-brand-gold tracking-wide uppercase bg-slate-950/90 px-3.5 py-2 rounded-xl border border-brand-gold/10">
                  <span>{aff.tag}</span>
                  <CheckCircle className="w-4 h-4 text-amber-450" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* SECTION 2: Media center / Interactive preview section with YouTube */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-550/5 rounded-full blur-[110px] pointer-events-none" />

        {/* Left Interactive Play Box */}
        <ScrollReveal direction="left" className="lg:col-span-12 xl:col-span-5 space-y-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-brand-gold tracking-widest uppercase">
              <Youtube className="w-4 h-4 text-rose-500 animate-pulse" /> Interactive Archive Room
            </div>
            <h3 className="text-3xl md:text-4xl font-sans font-black text-white tracking-tight leading-none uppercase">
              {videoTitle}
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-semibold">
              Dr. Shah Fahad Khan’s official high-yield playlists offer structured coverage on complex clinical themes, bioenergetics, organic mechanisms, and non-verbal reasoning.
            </p>
          </div>

          <div className="p-6 bg-slate-950/80 border border-brand-gold/15 rounded-3xl space-y-4 shadow-xl">
            <h4 className="text-xs font-black text-brand-gold tracking-wider uppercase">Included Modules:</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-350">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> MDCAT Bio Prep
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Organic Synthesis
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> AKU Math / Reasoning
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Physics Dynamics
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.open(videoUrl, '_blank')}
            className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:brightness-110 text-white font-sans font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-red-950/20 flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span>Launch YouTube Lecture Hall</span>
          </button>
        </ScrollReveal>

        {/* Right Social Channels Grid */}
        <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {socialChannels.map((chan, sIdx) => (
            <ScrollReveal 
              key={sIdx} 
              direction="right" 
              delay={sIdx * 0.12}
              className="h-full"
            >
              <motion.div 
                onClick={() => window.open(chan.link, '_blank')}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 bg-gradient-to-br ${chan.color} border border-slate-900 hover:border-brand-gold/30 rounded-[32px] flex flex-col justify-between gap-8 shadow-xl cursor-pointer transition-all duration-300 relative overflow-hidden group h-full`}
              >
                {/* Subtle top light bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 bg-slate-950/90 rounded-2xl ${chan.accent} border border-slate-900`}>
                      <chan.icon className="w-5 h-5 animate-pulse" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-sans font-black text-lg text-white group-hover:text-brand-gold transition-colors uppercase">{chan.platform}</h4>
                    <p className="text-xs text-slate-500 font-bold tracking-wide">{chan.handle}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[12px] text-slate-350 font-medium leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-900/60 font-semibold">
                    {chan.metric}
                  </p>
                  <div className="text-[10px] font-black uppercase text-brand-gold tracking-widest flex items-center gap-1.5">
                    <span className="group-hover:text-amber-300 transition-colors">{chan.cta}</span>
                    <Compass className="w-3.5 h-3.5 transition-transform group-hover:rotate-45 text-brand-gold" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>

    </div>
  );
};
