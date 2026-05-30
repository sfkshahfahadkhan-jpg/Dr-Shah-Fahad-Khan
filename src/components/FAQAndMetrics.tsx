import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageSquare, Heart, ShieldCheck, Mail } from 'lucide-react';
import { ScrollReveal, StaggeredText } from './MotionEffects';

export const FAQAndMetrics: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Dr. Shah Fahad Khan's AKU preparation different?",
      a: "Our system combines detailed thematic solved papers from 2009 to 2025 with extensive critical thinking & non-verbal reasoning drill exercises. These are taught through a physician's analytical perspective, giving pre-medical candidates the exact clinical logic required to conquer high-stakes entrance exams with high merit scores."
    },
    {
      q: "How does the MCQ Banks testing suite function?",
      a: "Our diagnostic MCQ banks suite enables users to filter queries by chapter, track live scores, pause studies, and analyze timed metrics. Our simulator accurately mocks CAIE A-Level (9701, 9700, 9702) physics/chemistry/biology and MDCAT templates."
    },
    {
      q: "How do I upgrade to the Premium Access vault?",
      a: "Active candidates can unlock premium past papers, video lectures, and live study roadmaps using an access code. Simply click the standard 'Unlock Premium' button and supply your institutional passcode or contact support to request one."
    },
    {
      q: "Can I book a personalized admissions consultation session?",
      a: "Yes! Use our floating WhatsApp consultation link to sync direct availability with Dr. Shah Fahad Khan for CAIE academic mapping, university interview mocks, and admission timeline support."
    }
  ];

  return (
    <section className="space-y-16 py-8 relative">
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal direction="up" className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-brand-gold px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(232,162,35,0.05)]">
          <HelpCircle className="w-4 h-4 text-brand-gold animate-pulse" />
          <span>INSTANT CLARITY PORTAL</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight uppercase">
          <StaggeredText text="Frequently Answered Inquiries" delay={0.1} />
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-semibold">
          Need swift advice on enrollment matrices, study sheets, or platform features? Our diagnostics are mapped below.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Side Accordions */}
        <ScrollReveal direction="left" className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-950/80 border border-slate-900 rounded-2xl overflow-hidden transition-colors hover:border-brand-gold/20 shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className={`font-sans font-black text-sm md:text-base transition-colors ${isOpen ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-gold shrink-0 animate-pulse" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-550 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-300 leading-relaxed font-semibold border-t border-slate-900 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Right Side Instant support help-desk */}
        <ScrollReveal direction="right" className="lg:col-span-5 bg-gradient-to-br from-brand-gold/10 via-amber-950/5 to-slate-950 border border-brand-gold/20 p-8 rounded-[36px] space-y-6 shadow-2xl" delay={0.2}>
          <div className="space-y-2">
            <span className="text-[9px] font-black text-brand-gold tracking-wider block uppercase">EXAMINER SUPPORT DESK</span>
            <h4 className="text-xl font-bold text-white uppercase font-sans">Direct Consultation Services</h4>
            <p className="text-xs text-slate-350 leading-relaxed mt-1 font-semibold">
              Have unique academic portfolios or preparing for specialized university interviews? Contact us directly to book a diagnostic curriculum roadmap session with our academic directors.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <a 
              href="https://wa.me/923492124667" /* Static WhatsApp prefix link, standard chat URL */
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-brand-gold hover:bg-amber-550 text-slate-950 font-sans font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-brand-gold/10 flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4 text-slate-950 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>

            <div className="p-4 bg-slate-900/60 border border-slate-900/80 rounded-2xl flex items-center gap-3 text-xs text-slate-350 font-semibold">
              <Mail className="w-4 h-4 text-brand-gold shrink-0 animate-pulse" />
              <span>academy@sfk.edu — Response within 12 hours</span>
            </div>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
};
