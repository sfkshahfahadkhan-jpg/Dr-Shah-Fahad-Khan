import React from 'react';
import { motion } from 'motion/react';
import { Heart, Beaker, ShieldCheck, Microscope, Laptop, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggeredText } from './MotionEffects';

export const WhyChooseUs: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Physician-Led Mentorship",
      subtitle: "MBBS PERSPECTIVE",
      desc: "Learn complex physiology and biology not from dry text, but through a real clinical lens. Dr. Shah Fahad Khan bridges textbooks to actual hospital practices with unmatched medical authority.",
      accent: "from-amber-900/15 via-amber-950/10 to-slate-950/80",
      iconColor: "text-brand-gold"
    },
    {
      icon: Beaker,
      title: "Surgical Curricular Precision",
      subtitle: "HIGH-YIELD CRITICAL THINKING",
      desc: "Unlike standard memorization hubs, we disassemble the examiner's mind. Master complex reaction mechanisms in chemistry or structural kinematics in physics through step-by-step masterclasses.",
      accent: "from-brand-gold/10 via-amber-950/5 to-slate-950/80",
      iconColor: "text-brand-gold"
    },
    {
      icon: ShieldCheck,
      title: "Prestigious Hong Kong Pedigree",
      subtitle: "INTERNATIONAL PEDAGOGY STANDARDS",
      desc: "A registered expert tutor for top-tier assemblies in Cana Elite and ToppTutors Hong Kong. Delivering the exact global competitive edge required for elite admissions.",
      accent: "from-yellow-950/15 via-amber-950/5 to-slate-950/80",
      iconColor: "text-brand-gold"
    },
    {
      icon: Microscope,
      title: "Interactive Digital Ecosystem",
      subtitle: "REAL-TIME DIAGNOSTIC METRICS",
      desc: "Instant diagnostic checks, digital past exam simulators, personalized analytics, and custom AI support. Built to mirror high-stakes modern medical and research boarding systems.",
      accent: "from-indigo-950/20 via-slate-950/40 to-slate-950/80",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section className="space-y-16 py-8 relative">
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <ScrollReveal direction="up" className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-brand-gold px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(232,162,35,0.05)]">
          <Microscope className="w-4 h-4 text-brand-gold animate-pulse" />
          <span>COGNITIVE PEDAGOGY ENGINE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight">
          <StaggeredText text="The Decisive Edge in Scientific Board Preparation" delay={0.1} />
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
          We strip away traditional rote learning. Here, subjects are unified, analyzed, and delivered with surgical and clinical precision.
        </p>
      </ScrollReveal>

      {/* Modern High-End Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {values.map((v, idx) => (
          <ScrollReveal 
            key={idx} 
            direction="up" 
            delay={idx * 0.15}
            className="h-full"
          >
            <motion.div 
              whileHover={{ y: -8, borderColor: 'rgba(232, 162, 35, 0.4)' }}
              className={`p-8 bg-gradient-to-br ${v.accent} border border-slate-900 hover:border-brand-gold/30 rounded-[36px] flex flex-col md:flex-row gap-6 relative overflow-hidden group shadow-2xl transition-all duration-300 h-full`}
            >
              {/* Subtle light leak */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Left Column: Icon */}
              <div className="flex-shrink-0">
                <div className={`p-4 bg-slate-950 border border-brand-gold/25 rounded-2xl ${v.iconColor} shadow-lg group-hover:scale-110 transition-transform`}>
                  <v.icon className={`w-8 h-8 ${idx !== 3 ? 'text-brand-gold' : 'text-indigo-405'}`} />
                </div>
              </div>

              {/* Right Column: Writing */}
              <div className="space-y-3">
                <span className={`text-[10px] font-black tracking-widest ${v.iconColor === 'text-brand-gold' ? 'text-brand-gold' : 'text-indigo-400'} uppercase`}>
                  {v.subtitle}
                </span>
                <h3 className="text-2xl font-black font-sans text-white tracking-wide uppercase">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  {v.desc}
                </p>
                
                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-bold">
                  <span className="flex items-center gap-1.5 text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Active learning models
                  </span>
                  <span>•</span>
                  <span>Examiner-vetted rubrics</span>
                </div>
              </div>

            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Secondary micro-banner showcasing premium student status */}
      <ScrollReveal direction="up" delay={0.4}>
        <div className="p-8 bg-slate-950/80 border border-brand-gold/15 rounded-[32px] flex flex-col lg:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-xl">
              <GraduationCap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-sans font-black text-white text-lg">Are you matching your peer analytics?</h4>
              <p className="text-xs text-slate-300">Join our cohort dashboard to unlock custom diagnostic maps in real-time.</p>
            </div>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-500 font-black tracking-widest block uppercase">GLOBAL ACCREDITATION</span>
              <span className="text-xs font-bold text-brand-gold">100% compliant with Cambridge (CAIE) &amp; AKU-EB</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
};
