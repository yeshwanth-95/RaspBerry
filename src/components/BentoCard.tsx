import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colSpan?: number;
  rowSpan?: number;
}

export function BentoCard({ icon, title, description, colSpan = 1, rowSpan = 1 }: BentoCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const colSpanClass = colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';
  const rowSpanClass = rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0812] p-6 md:p-8 flex flex-col h-auto transition-all duration-300 ${colSpanClass} ${rowSpanClass}`}
      style={{
        background: `
          radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(143, 0, 255, 0.15),
            transparent 40%),
          rgb(11, 8, 18)
        `
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-start">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#8F00FF]/20 to-[#5E239D]/20 border border-[#8F00FF]/20 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight text-white">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
