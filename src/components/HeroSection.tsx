import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  ChevronRight, 
  Activity, 
  Globe, 
  BookOpen, 
  Award,
  TrendingUp
} from 'lucide-react';
import { ScrollReveal, StaggeredText, AnimatedCounter } from './MotionEffects';

interface HeroSectionProps {
  academyName: string;
  heroHeading1: string;
  heroHeading2: string;
  missionStatement: string;
  founderImage: string;
  onExploreCourses: () => void;
  onConsultation: () => void;
  onJoinCrashCourse: () => void;
  onOpenArchives: () => void;
  onOpenAnalytics: () => void;
  currentUser: any;
  isAdminUser: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  academyName,
  heroHeading1,
  heroHeading2,
  missionStatement,
  founderImage,
  onExploreCourses,
  onConsultation,
  onJoinCrashCourse,
  onOpenArchives,
  onOpenAnalytics,
  currentUser,
  isAdminUser,
}) => {
  // Balanced, professional metrics detailing genuine academic and mentor authority
  const stats = [
    { value: "25K+", label: "GLOBAL ALUMNI", desc: "Shaping medical horizons" },
    { value: "10+", label: "COUNTRIES REACHED", desc: "Premier digital network" },
    { value: "MBBS", label: "CLINICAL BASE", desc: "Doctor-scientist guidance" },
    { value: "100%", label: "MERIT OUTCOMES", desc: "Highest-tier prep" },
    { value: "ELITE", label: "FACULTY TENURE", desc: "Cana Elite HK & Nixor" },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center py-20 px-6 md:px-12 overflow-hidden bg-[#030712] text-white rounded-[40px] border border-slate-900 shadow-2xl">
      {/* High-End Cinematic Layered Lighting & Space Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle high-tech background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        {/* Soft, layered premium diffuse glows */}
        <div className="absolute -top-12 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] opacity-70" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[160px] opacity-60" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Content Box */}
        <div className="lg:col-span-7 space-y-10 text-left">
          
          <div className="space-y-6">
            {/* Academy Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2.5 px-4.5 py-1.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full font-mono font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(232,162,35,0.08)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                <span>{academyName || 'SFK ELITE ACADEMY'}</span>
              </span>

              {isAdminUser && (
                <span className="inline-flex items-center px-3 py-1 bg-amber-500/15 border border-amber-500/25 text-amber-400 rounded-full text-[9px] uppercase tracking-widest font-black">
                  ADMIN VIEW ACTIVE
                </span>
              )}
            </div>

            {/* Structured Powerful Headings with high-contrast displays */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-sans font-black tracking-tight text-white leading-[1.05] uppercase">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-350 bg-clip-text text-transparent">
                <StaggeredText text={heroHeading1 || "Transforming Future"} />
              </span>
              <span className="block text-brand-gold mt-1.5 filter drop-shadow-[0_0_30px_rgba(232,162,35,0.15)]">
                <StaggeredText text={heroHeading2 || "Doctors Worldwide"} delay={0.2} />
              </span>
            </h1>

            {/* Professional Mission Statement */}
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-semibold max-w-2xl border-l-[3px] border-brand-gold/40 pl-5 py-1">
              {missionStatement || "Elite academic preparation specifically tailored for global O/A Level applicants, rigorous MDCAT, and high-tier AKU entry exams."}
            </p>
          </div>

          {/* Clean, Premium CTA System */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onJoinCrashCourse}
              className="px-8 py-5 bg-gradient-to-r from-brand-gold via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-sans font-black text-xs uppercase tracking-widest rounded-2xl cursor-pointer transition-all shadow-[0_8px_30px_rgba(232,162,35,0.2)] flex items-center justify-center gap-2"
            >
              <span>Join Crash Course Hub</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onConsultation}
              className="px-8 py-5 bg-slate-900 hover:bg-slate-950 border border-brand-gold/20 hover:border-brand-gold/40 text-brand-gold font-sans font-black text-xs uppercase tracking-widest rounded-2xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Activity className="w-4 h-4 text-brand-gold animate-pulse" />
              <span>Direct Counseling</span>
            </motion.button>

            <motion.button 
              whileHover={{ x: 3 }}
              onClick={onExploreCourses}
              className="px-6 py-5 text-slate-400 hover:text-white font-sans font-black text-xs uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-1 group"
            >
              <span>Explore Curriculums</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </div>

          {/* Quick Hub Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-6 text-xs font-semibold text-slate-500 border-t border-slate-900">
            <span className="font-mono uppercase text-[9px] tracking-wider text-brand-gold">Instant Access Portals:</span>
            <button 
              onClick={onOpenArchives} 
              className="text-slate-300 hover:text-brand-gold transition-colors underline decoration-slate-800 hover:decoration-brand-gold/40 underline-offset-2 font-semibold"
            >
              Cognitive Exam Archives
            </button>
            <span className="text-slate-800">•</span>
            <button 
              onClick={onOpenAnalytics} 
              className="text-slate-300 hover:text-brand-gold transition-colors underline decoration-slate-800 hover:decoration-brand-gold/40 underline-offset-2 font-semibold"
            >
              Live Performance Tracker
            </button>
          </div>

        </div>

        {/* Right Side: Simple Elegant Portrait Container */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <ScrollReveal direction="right" className="relative w-full max-w-[380px]">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden border border-brand-gold/20 bg-slate-900 shadow-2xl group">
              <img 
                src={founderImage} 
                alt="Dr. Shah Fahad Khan Portrait" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Elegant Portrait Lighting Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/80 border border-slate-900 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest block font-mono">GLOBAL MENTOR</span>
                  <span className="text-xs font-bold text-white uppercase">Dr. Shah Fahad Khan</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 font-mono">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LONDON / HK / PK</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Structured Authority Metrics Ribbon below */}
      <div className="w-full max-w-7xl mx-auto mt-16 pt-10 border-t border-slate-900">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.2 }}
              className="p-5 bg-slate-950 border border-slate-900 hover:border-brand-gold/15 rounded-2xl transition-all shadow-md group relative"
            >
              {/* Tiny marker */}
              <div className="absolute top-0 left-0 w-6 h-[1.5px] bg-brand-gold/40 group-hover:w-12 transition-all" />
              <div className="text-3xl font-sans font-black text-white group-hover:text-brand-gold transition-colors leading-none">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-[10px] font-mono font-bold text-brand-gold tracking-[0.15em] uppercase leading-none mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-bold mt-1 group-hover:text-slate-300 transition-colors">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
