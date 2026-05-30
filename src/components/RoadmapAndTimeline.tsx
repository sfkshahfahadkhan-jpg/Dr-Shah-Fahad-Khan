import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Flag, Compass, Terminal, Target, ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggeredText } from './MotionEffects';

export const RoadmapAndTimeline: React.FC = () => {
  const roadmapSteps = [
    {
      phase: "01",
      title: "Diagnostic Baseline",
      duration: "Week 1",
      icon: Compass,
      desc: "Complete our system-based diagnostics. Determine topic mastery in key chapters of organic mechanics, physiology, or reasoning patterns before designing study loops.",
      metrics: "Personalized Study Plan unlocked"
    },
    {
      phase: "02",
      title: "Core Concept Immersion",
      duration: "Weeks 2 - 8",
      icon: Target,
      desc: "Immerse yourself in high-yield medical-grade conceptual lectures. Complete subject-specific tests that emphasize rational thinking over simple memorization.",
      metrics: "Live support + Chapter Drills"
    },
    {
      phase: "03",
      title: "Past Paper Intensive Drills",
      duration: "Weeks 9 - 12",
      icon: Terminal,
      desc: "Unlock the Elite Vault. Review, solve, and analyze 17+ years of AKU past tests and Cambridge board exams under actual timed parameters.",
      metrics: "Score projection maps"
    },
    {
      phase: "04",
      title: "The Ultimate Revision Matrix",
      duration: "Final Weeks",
      icon: Flag,
      desc: "Rigorous high-stakes focus on complex physics dynamics and medical interview simulation drills. Enter the testing facility with supreme confidence.",
      metrics: "Elite Admission Confirmed"
    }
  ];

  return (
    <section className="space-y-16 py-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal direction="up" className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-brand-gold px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(232,162,35,0.05)]">
          <Calendar className="w-4 h-4 text-brand-gold animate-pulse" />
          <span>COHORT ROADMAP TRANSITION</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight uppercase">
          <StaggeredText text="Dr. Shah Fahad Khan’s Elite Roadmap" delay={0.1} />
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
          An authentic, result-vetted clinical path designed to transition ambitious students into selected scholars and future doctors.
        </p>
      </ScrollReveal>

      {/* Horizontal timeline on Desktop, vertical on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Connection guide lines for desktop */}
        <div className="absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent hidden md:block z-0" />

        {roadmapSteps.map((step, sIdx) => (
          <ScrollReveal 
            key={sIdx} 
            direction="up" 
            delay={sIdx * 0.15}
            className="h-full"
          >
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-6 bg-slate-950/80 hover:bg-slate-950 border border-slate-900 hover:border-brand-gold/30 rounded-3xl relative z-10 transition-all duration-300 flex flex-col justify-between gap-6 shadow-2xl h-full"
            >
              {/* Number circle header */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-brand-gold/20 flex items-center justify-center font-black text-xs text-brand-gold shadow-md">
                  P{step.phase}
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 text-brand-gold leading-none">
                  {step.duration}
                </span>
              </div>

              {/* Writing contents */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <step.icon className="w-4 h-4 text-brand-gold animate-pulse" />
                  <h3 className="font-sans font-black text-lg text-white leading-tight uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>

              {/* Metrics label */}
              <div className="p-3 bg-slate-900/60 rounded-xl border border-brand-gold/10 flex items-center gap-2 text-[10px] text-brand-gold font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{step.metrics}</span>
              </div>

            </motion.div>
          </ScrollReveal>
        ))}

      </div>

    </section>
  );
};
