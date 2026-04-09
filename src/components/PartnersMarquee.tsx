import { motion } from 'framer-motion';

interface Partner {
  name: string;
  logo?: string;
}

const partners: Partner[] = [
  { name: 'SIEMENS' },
  { name: 'SAP' },
  { name: 'AUTODESK' },
  { name: 'TOYOTA' },
  { name: 'NIKE' },
];

export function PartnersMarquee() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-16"
        >
          Trusted Partnerships
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0812] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0812] to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-20 px-8"
              >
                <div className="text-xl md:text-2xl font-bold text-gray-500 hover:text-gray-300 transition-colors tracking-wider whitespace-nowrap">
                  {partner.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
