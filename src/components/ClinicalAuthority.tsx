import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, ShieldAlert, Heart, Activity, Briefcase, CheckCircle } from 'lucide-react';
import { ScrollReveal, StaggeredText } from './MotionEffects';

interface ClinicalAuthorityProps {
  founderBio?: string;
  clinicalImage: string;
}

export const ClinicalAuthority: React.FC<ClinicalAuthorityProps> = ({ 
  founderBio = "Dr. Shah Fahad Khan is an accomplished medical professional, physician, and elite global science educator. Combining his MBBS clinical training with years of international faculty tenure (spanning Cana Elite Hong Kong and Nixor College), he mentors pre-medical candidates and advanced students toward premier university placements, research thinking, and deep conceptual science mastery.",
  clinicalImage 
}) => {
  const achievements = [
    { year: "2019", title: "Academy Inception", detail: "Formulated the physician-led O/A Level & pre-medical prep curriculum in Karachi." },
    { year: "2021", title: "Nixor Faculty Tenure", detail: "Taught CAIE Chemistry & Biology to top tier student assemblies." },
    { year: "2024", title: "Hong Kong Academic Scope", detail: "Appointed as elite science tutor for top IB/Cambridge centers Cana Elite & ToppTutors HK." },
    { year: "Present", title: "Global Digital Launch", detail: "Redesigned SFK's diagnostic platform to aid aspirants globally." }
  ];

  return (
    <section className="space-y-16 py-8 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Writing credentials */}
        <ScrollReveal direction="left" className="lg:col-span-7 space-y-8 relative z-10">
          
          <div className="space-y-3">
            <span className="text-[10px] font-black text-brand-gold tracking-[0.3em] uppercase bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(232,162,35,0.05)] w-fit block animate-pulse">
              ACADEMIC LEADERSHIP &amp; PHYSICIAN CREDENTIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight uppercase">
              <StaggeredText text="Dr. Shah Fahad Khan" delay={0.1} />
            </h2>
            <p className="text-xs font-black text-brand-gold uppercase tracking-widest block font-mono">
              MBBS, FOUNDER &amp; CHIEF MEDICAL COMMISSIONER
            </p>
          </div>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-semibold">
            {founderBio}
          </p>

          <div className="space-y-4 pt-1">
            <h4 className="text-xs font-black text-slate-400 tracking-wider uppercase">CORE ACADEMIC PILLARS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-900 flex items-start gap-3 hover:border-brand-gold/20 transition-colors">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <h5 className="font-bold text-white text-sm">Clinical Synergy</h5>
                  <p className="text-[11px] text-slate-400">Every lesson incorporates diagnostic clinical reasoning to secure extreme readiness for medical interviews.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-900 flex items-start gap-3 hover:border-brand-gold/20 transition-colors">
                <GraduationCap className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-sm">International Prestige</h5>
                  <p className="text-[11px] text-slate-400">Dual teaching channels spanning Pakistan &amp; Hong Kong matching top Cambridge thresholds.</p>
                </div>
              </div>
            </div>
          </div>

        </ScrollReveal>

        {/* Right column: Interactive Clinical Roadmap Illustration */}
        <ScrollReveal direction="right" className="lg:col-span-5 relative z-10" delay={0.25}>
          
          {/* Main Container */}
          <div className="bg-slate-950/80 border border-brand-gold/15 p-8 rounded-[40px] space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-rose-500 animate-pulse" />
              <h4 className="text-sm font-black text-white tracking-widest uppercase">HONOR TIMELINE</h4>
            </div>

            <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-3 before:w-[1px] before:bg-brand-gold/20">
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-brand-gold/25 flex items-center justify-center text-[9px] text-brand-gold font-extrabold shrink-0 z-10 relative top-1 shadow-md animate-pulse">
                    •
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-brand-gold tracking-wider font-mono">{ach.year}</span>
                    <h5 className="font-bold text-white text-sm">{ach.title}</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium leading-relaxed">{ach.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </ScrollReveal>

      </div>

    </section>
  );
};
