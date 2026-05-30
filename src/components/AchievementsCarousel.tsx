import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Star, Quote, ChevronLeft, ChevronRight, Check, Medal, Trophy } from 'lucide-react';
import { ScrollReveal, StaggeredText } from './MotionEffects';

export const AchievementsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const students = [
    {
      name: "Aliza Shah",
      result: "Admitted & Selected at AKU",
      scholarship: "100% Academic Merit Scholarship",
      quote: "Studying under Dr. Shah Fahad Khan was the absolute game-changer. His clinical biology breakdowns and organic chemistry reaction sheets are the only reason I mastered the AKU Entry test. The diagnostic exam dashboard made real tests feel like just another practice loop!",
      img: "📚",
      tags: ["AKU Selected", "National Merit Scorer"]
    },
    {
      name: "Hamza Malik",
      result: "AKU Selection - First Merit List",
      scholarship: "Highest Cohort Percentile Scorer",
      quote: "The Reasoning tracks and Past Solved Archive solved here are gold. I spent weeks using the Elite Vault. It completely demystified the non-verbal matrices and critical calculations. Globally trusted educator!",
      img: "🧬",
      tags: ["Merit Rank 4", "MCAT Bio Champion"]
    },
    {
      name: "Zainab Omar",
      result: "Admitted & Selected at KEMU",
      scholarship: "Top Merit Entrance Scorer",
      quote: "The physics dynamics coaching and organic synthesis roadmaps are spectacular. Dr. Shah Fahad Khan simplifies graduate-level themes so secondary scholars grasp them seamlessly. Best educational decision I made.",
      img: "🧪",
      tags: ["KEMU Selected", "Physics Distinction"]
    },
    {
      name: "Mustafa Qazi",
      result: "Top-Tier Admission Selection at AKU",
      scholarship: "International Board Sensation",
      quote: "Incredible attention to detail. Dr. Shah's MBBS background adds infinite depth to cellular biology and metabolic pathways. He analyzes examiner tricks better than anyone. Truly cinematic learning!",
      img: "💻",
      tags: ["AKU Selected", "Outstanding Academic Merit"]
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % students.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  return (
    <section className="space-y-16 py-8 relative">
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-brand-gold/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Top Title and Navigation */}
      <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-8 gap-6 z-10 relative">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-brand-gold px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(232,162,35,0.05)]">
            <Trophy className="w-4 h-4 text-brand-gold animate-bounce" />
            <span>ELITE COHORT ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight uppercase">
            <StaggeredText text="Proven Results & Global Placement Record" delay={0.1} />
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-xl font-medium">
            Real triumphs. These scholars mastered the AKU Entry Tests and CAIE exams using our high-yield blueprints.
          </p>
        </div>

        {/* Custom controller arrows */}
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            className="p-3.5 bg-slate-950 hover:bg-slate-900 border border-brand-gold/20 hover:border-brand-gold text-brand-gold rounded-full transition-all active:scale-90 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-black text-brand-gold bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-900 select-none">
            {activeIndex + 1} / {students.length}
          </span>
          <button 
            onClick={nextSlide}
            className="p-3.5 bg-slate-950 hover:bg-slate-900 border border-brand-gold/20 hover:border-brand-gold text-brand-gold rounded-full transition-all active:scale-90 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </ScrollReveal>

      {/* Structured Testimonial Layout (ALT Academy inspired visual frame) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Active Testimonial (Large Glass card with slider transitions) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 bg-gradient-to-br from-slate-950 via-[#0a0f21] to-slate-950 border border-brand-gold/15 rounded-[44px] flex flex-col justify-between gap-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)] h-full relative overflow-hidden"
            >
              {/* Huge glowing backdrop icon */}
              <Quote className="absolute -bottom-10 -right-10 w-60 h-60 text-brand-gold/5 rotate-12 pointer-events-none" />

              <div className="space-y-6">
                {/* Scoring Details */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-brand-gold/10 border border-brand-gold/25 text-brand-gold p-3.5 rounded-2xl shadow-lg">
                    <Medal className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-sans text-white uppercase tracking-tight">{students[activeIndex].result}</h3>
                    <p className="text-xs text-brand-gold font-bold uppercase tracking-wider">{students[activeIndex].scholarship}</p>
                  </div>
                </div>

                <div className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold italic">
                  "{students[activeIndex].quote}"
                </div>
              </div>

              {/* Author footer */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-slate-900 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl shadow-md">
                    {students[activeIndex].img}
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-base text-white">{students[activeIndex].name}</h4>
                    <p className="text-xs text-brand-gold">SFK Elite Alumnus</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {students[activeIndex].tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-950/90 border border-brand-gold/10 text-brand-gold font-black text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar Achievement Badges (Heuser conversion blocks) */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          <ScrollReveal direction="up" delay={0.15}>
            <div className="p-6 bg-slate-950/70 hover:bg-slate-950 border border-slate-900 hover:border-brand-gold/25 rounded-3xl flex flex-col justify-between shadow-2xl transition-all group duration-300">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-brand-gold tracking-widest uppercase">UNIVERSITY ADMISSIONS</span>
                <h4 className="text-xl font-bold text-white uppercase font-sans">100% Scholarship Placements</h4>
                <p className="text-xs text-slate-350 leading-relaxed">Our premium medical cohort guides multiple applicants into tuition-free positions yearly.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-black text-brand-gold uppercase tracking-wider">
                <Check className="w-4 h-4 text-brand-gold animate-pulse" /> Vetted Admissions blueprints
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div className="p-6 bg-slate-950/70 hover:bg-slate-950 border border-slate-900 hover:border-brand-gold/25 rounded-3xl flex flex-col justify-between shadow-2xl transition-all group duration-300">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-brand-gold tracking-widest uppercase">CAIE COMPLIANCE</span>
                <h4 className="text-xl font-bold text-white font-sans uppercase">World-Class Syllabus Alignment</h4>
                <p className="text-xs text-slate-350 leading-relaxed">System-wide monitoring ensures that active student drill exercises are aligned to syllabus shifts.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-950 flex items-center gap-2 text-xs font-black text-brand-gold uppercase tracking-wider">
                <Check className="w-4 h-4 text-brand-gold animate-pulse" /> Diagnostic reporting unlocked
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

    </section>
  );
};
