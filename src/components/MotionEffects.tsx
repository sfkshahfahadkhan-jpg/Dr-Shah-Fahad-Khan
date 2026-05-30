import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

// 1. Magnetic Button Effect - High-End Tesla/Apple interactive touch
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Attract towards mouse with 35% force
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handlePointerLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="inline-block"
      id={id ? `mag-wrapper-${id}` : undefined}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={className}
        onClick={onClick}
        id={id}
      >
        {children}
      </motion.div>
    </div>
  );
};

// 2. Animated Counter - Count up when in view
interface AnimatedCounterProps {
  value: string;
  className?: string;
  id?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '', id }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Match the initial numeric part and any non-numeric suffix
  const numMatch = value.match(/^(\d+)(.*)$/);
  const targetNum = numMatch ? parseInt(numMatch[1], 10) : null;
  const suffix = numMatch ? numMatch[2] : '';

  useEffect(() => {
    if (!isInView || targetNum === null) return;
    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * targetNum);
      
      setDisplayValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNum]);

  return (
    <span ref={ref} className={className} id={id}>
      {targetNum === null ? value : `${displayValue}${suffix}`}
    </span>
  );
};

// 3. Staggered Text Reveal
interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  id?: string;
}

export const StaggeredText: React.FC<StaggeredTextProps> = ({ text, className = '', delay = 0, once = true, id }) => {
  const words = text.split(" ");
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      id={id}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={wordVariants}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// 4. Smooth Scroll Reveal - Spring physics cinematic fade-up/in
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  id
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: {}
  };

  const initialVariant = {
    opacity: 0,
    ...directions[direction]
  };

  const animateVariant = {
    opacity: 1 as number,
    x: 0 as number,
    y: 0 as number,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      delay,
      duration
    }
  };

  return (
    <motion.div
      initial={initialVariant}
      whileInView={animateVariant}
      viewport={{ once, margin: "-100px" }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

// 5. Floating Element - Gentle floating movement
interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yRange?: [number, number];
  id?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 6,
  yRange = [-10, 10],
  id
}) => {
  return (
    <motion.div
      animate={{
        y: yRange
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

// 6. Glow Pulse Effects
interface GlowPulseProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(232, 162, 35, 0.4)"
  duration?: number;
  id?: string;
}

export const GlowPulse: React.FC<GlowPulseProps> = ({
  children,
  className = '',
  glowColor = 'rgba(232,162,35,0.15)',
  duration = 4,
  id
}) => {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 0px ${glowColor}`,
          `0 0 25px ${glowColor}`,
          `0 0 0px ${glowColor}`
        ]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};
