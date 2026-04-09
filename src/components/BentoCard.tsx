import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BorderGlow } from './BorderGlow';

interface BentoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colSpan?: number;
  rowSpan?: number;
}

export function BentoCard({ icon, title, description, colSpan = 1, rowSpan = 1 }: BentoCardProps) {
  const colSpanClass = colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';
  const rowSpanClass = rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`transition-all duration-300 ${colSpanClass} ${rowSpanClass}`}
    >
      <BorderGlow
        className="p-6 md:p-8 rounded-2xl h-full"
        backgroundColor="#0B0812"
        colors={['#8F00FF', '#c084fc', '#f472b6']}
      >
        <div className="flex flex-col gap-4 h-full">
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
      </BorderGlow>
    </motion.div>
  );
}
