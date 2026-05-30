import React from 'react';
import { motion } from 'motion/react';
import { 
  Beaker, 
  Brain, 
  Cpu, 
  Flame, 
  Scale, 
  BookOpen, 
  FolderOpen, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import { ScrollReveal, StaggeredText } from './MotionEffects';

interface FeaturedCoursesProps {
  onSelectRoute: (route: string) => void;
  isPremiumActive: boolean;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ 
  onSelectRoute,
  isPremiumActive 
}) => {
  const courses = [
    {
      id: "mcq-banks",
      title: "MDCAT Core Prep",
      subtitle: "PRE-MEDICAL SYLLABUS",
      ico: Brain,
      color: "from-amber-500/10 via-amber-950/10 to-slate-950/80 hover:border-brand-gold/45",
      glowColor: "amber",
      badge: "Highly Popular",
      desc: "Comprehensive diagnostic suite for medical entrance candidates. Master cellular structures, pathways, organic chemistry synthesis, and physics kinematics.",
      stats: "1,200+ Selected Questions",
      topics: ["Vertebrate Physiology", "Reaction Rates", "Bioenergetics"],
      cta: "Launch MCQ Banks"
    },
    {
      id: "aku-past-papers",
      title: "AKU Entry Test Prep",
      subtitle: "ELITE ENTRY MASTERCLASS",
      ico: Flame,
      color: "from-brand-gold/15 via-amber-950/10 to-slate-950/80 hover:border-brand-gold/50",
      glowColor: "amber",
      badge: "Premium Vault",
      desc: "The gold standard database for Aga Khan University hopefuls. Complete, solved, and analyzed past papers from 2009 to 2025.",
      stats: "2009 - 2025 Complete Archives",
      topics: ["Rational Reasoning", "Alternative Geometry", "Word Math"],
      cta: "Explore Past Papers"
    },
    {
      id: "reasoning",
      title: "AKU Reasoning Track",
      subtitle: "CRITICAL THINKING & STATS",
      ico: Scale,
      color: "from-amber-600/10 via-amber-950/10 to-slate-950/80 hover:border-brand-gold/45",
      glowColor: "amber",
      badge: "Elite Cognitive Path",
      desc: "Specialized non-verbal reasoning, cognitive evaluation diagrams, pattern sequencing, and scientific statistics mapping. Built directly around the elusive AKU syllabus.",
      stats: "Full Syllabus Mock Mappings",
      topics: ["Pattern Detection", "Data Grids", "Scientific Analytics"],
      cta: "Open Reasoning Vault"
    },
    {
      id: "subject-chemistry",
      title: "A-Level Chemistry",
      subtitle: "ADVANCED LEVEL",
      ico: Beaker,
      color: "from-brand-gold/10 via-amber-950/5 to-slate-950/80 hover:border-brand-gold/45",
      glowColor: "amber",
      badge: "High-Yield Syllabus",
      desc: "Rigorous diagnostic papers for CAIE A-Level (9701). Advanced coverage of reaction kinetics, transition element metallurgy, and organic syntheses.",
      stats: "Structured Syllabus Guides",
      topics: ["Inorganic Trends", "Nuclear Resonance", "Kinetics Mechanics"],
      cta: "Chemical Arena"
    },
    {
      id: "video-lectures",
      title: "Crash Courses & Reels",
      subtitle: "VIDEO SUMMITS",
      ico: FolderOpen,
      color: "from-yellow-905/10 via-amber-950/5 to-slate-950/80 hover:border-brand-gold/45",
      glowColor: "amber",
      badge: "SaaS Stream Room",
      desc: "Compact high-yield reviews of the most complex board exam sections. Includes immediate links to Dr. Shah Fahad Khan's active educational series.",
      stats: "50+ HD Lecture Streams",
      topics: ["High Yield Summaries", "Past Paper Solutions", "CheatSheet Tips"],
      cta: "Launch Video Rooms"
    },
    {
      id: "academic-library",
      title: "O-Level Sciences Hub",
      subtitle: "FOUNDATIONAL SCIENCES",
      ico: Cpu,
      color: "from-indigo-950/20 via-slate-950/40 to-slate-950/80 hover:border-indigo-500/40",
      glowColor: "indigo",
      badge: "Cambridge Vetted",
      desc: "Foundational materials covering chemistry (5070), physics (5054), and biology (5090). Essential roadmaps and revision guides to lock in deep conceptual mastery.",
      stats: "Resource Library PDFs",
      topics: ["Kinetic Lattice Theory", "Organic Biomolecules", "Electricity Grids"],
      cta: "Access Materials"
    }
  ];

  return (
    <section className="space-y-16 py-8 relative">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Top Description */}
      <ScrollReveal direction="up" className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-slate-900 pb-8 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-brand-gold px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(232,162,35,0.05)]">
            <Zap className="w-4 h-4 text-brand-gold animate-pulse" />
            <span>ELITE TRAINING ARENA</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-none uppercase">
            <StaggeredText text="Elite Course Paths & Testing Units" delay={0.1} />
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-xl">
            SaaS-inspired structured layout. Move through curriculum matrices and immediately trigger custom active testing sets.
          </p>
        </div>

        {/* Global Action Banner */}
        <div className="flex items-center gap-3 bg-slate-950/90 p-3.5 rounded-2xl border border-brand-gold/20 text-xs shadow-xl backdrop-blur-md">
          <Award className="w-5 h-5 text-brand-gold animate-bounce" />
          <span className="text-brand-gold font-bold">
            {isPremiumActive ? '✨ Elite Access Unlocked' : '⚡ Complete course roadmap access with Premium'}
          </span>
        </div>
      </ScrollReveal>

      {/* Structured Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {courses.map((course, index) => (
          <ScrollReveal 
            key={index} 
            direction="up" 
            delay={index * 0.12}
            className="h-full"
          >
            <motion.div 
              onClick={() => onSelectRoute(course.id)}
              whileHover={{ y: -8, scale: 1.015 }}
              className={`group relative p-8 bg-gradient-to-br ${course.color} border border-slate-900 rounded-[36px] flex flex-col justify-between gap-8 cursor-pointer transition-all duration-300 shadow-2xl overflow-hidden h-full`}
            >
              {/* Dynamic glowing radial backdrop on hover */}
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(232,162,35,0.06)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Glowing Accent Ring wrapper */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-slate-950 border border-brand-gold/25 text-brand-gold group-hover:text-slate-950 group-hover:bg-brand-gold transition-all duration-500 rounded-2xl shadow-md">
                    <course.ico className="w-6 h-6" />
                  </div>
                  
                  <span className="px-3 py-1 bg-slate-950 text-[9px] font-black uppercase tracking-widest text-brand-gold border border-brand-gold/20 rounded-md">
                    {course.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                    {course.subtitle}
                  </span>
                  <h3 className="text-2xl font-black font-sans text-white group-hover:text-brand-gold transition-colors leading-tight uppercase">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                    {course.desc}
                  </p>
                </div>
              </div>

              {/* Inner topics map */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {course.topics.slice(0, 3).map((top, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-black uppercase bg-slate-950/80 text-slate-400 px-2.5 py-1 rounded-md border border-slate-900">
                      {top}
                    </span>
                  ))}
                </div>

                <div className="w-full h-[1px] bg-slate-900/60" />

                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="text-slate-500">{course.stats}</span>
                  <div className="text-brand-gold flex items-center gap-1.5 font-black uppercase tracking-wider group-hover:translate-x-1.5 transition-all">
                    <span className="group-hover:text-amber-300 transition-colors">{course.cta}</span>
                    <ArrowRight className="w-4 h-4 text-brand-gold" />
                  </div>
                </div>
              </div>

            </motion.div>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
};
