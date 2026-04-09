import { motion } from 'framer-motion';
import { Server, Activity, Shield, Box, FileJson, Users, ChevronRight, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      icon: Server,
      title: 'Enterprise PLM Upgrades',
      description: 'Executing zero-downtime transitions for global engineering teams. Specializing in 4-tier Teamcenter architecture migrations (up to TC 2406), Active Workspace deployments, and massive-scale legacy data restructuring.',
      features: ['Zero-downtime migrations', 'Teamcenter expertise', 'Legacy data restructuring'],
      color: 'from-[#8F00FF]/20 to-purple-500/20',
      borderColor: 'border-[#8F00FF]/20',
      hoverColor: 'hover:border-[#8F00FF]/50 hover:bg-[#8F00FF]/10'
    },
    {
      icon: Activity,
      title: 'Complex ERP Integrations',
      description: 'Bridging the gap between engineering and supply chain operations. Expert bi-directional synchronization utilizing T4S and T4EA frameworks for SAP S/4 HANA, Dynamics 365, and legacy MES applications.',
      features: ['Bi-directional sync', 'T4S/T4EA frameworks', 'Multi-system support'],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/20',
      hoverColor: 'hover:border-blue-500/50 hover:bg-blue-500/10'
    },
    {
      icon: Shield,
      title: 'Intellectual Property Management',
      description: 'Bulletproof digital asset security, automated IP licensing workflows, and secure supplier collaboration environments.',
      features: ['Digital asset security', 'IP licensing automation', 'Supplier collaboration'],
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/20',
      hoverColor: 'hover:border-green-500/50 hover:bg-green-500/10'
    },
    {
      icon: Box,
      title: 'Multi-CAD Integrations',
      description: 'Seamless synchronization of NX, SolidWorks, AutoCAD, and Inventor into a single source of truth.',
      features: ['Multi-CAD support', 'Unified data model', 'Seamless sync'],
      color: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/20',
      hoverColor: 'hover:border-orange-500/50 hover:bg-orange-500/10'
    },
    {
      icon: FileJson,
      title: 'Dispatcher Frameworks',
      description: 'High-volume, automated file translations and data generation (NX to PDF, SW to JT) for downstream manufacturing.',
      features: ['Automated translations', 'High-volume processing', 'Format conversion'],
      color: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-500/20',
      hoverColor: 'hover:border-pink-500/50 hover:bg-pink-500/10'
    },
    {
      icon: Users,
      title: 'Agile Project Orchestration',
      description: 'Led by a Certified Scrum Master with decades of Delivery Management experience, ensuring complex IT roadmaps hit their targets on time and on budget.',
      features: ['Certified management', 'Delivery expertise', 'Timeline assurance'],
      color: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-500/20',
      hoverColor: 'hover:border-indigo-500/50 hover:bg-indigo-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0812] text-white">
      {/* Navigation spacing */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30">
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(143,0,255,0.3) 0%, rgba(94,35,157,0.2) 40%, transparent 70%)'
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-[#8F00FF] via-purple-400 to-[#5E239D] bg-clip-text text-transparent">
              PLM Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Comprehensive capabilities spanning enterprise architecture, supply chain integration, and advanced manufacturing workflows.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="px-6 py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#8F00FF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8F00FF]/10 border border-[#8F00FF]/20 mb-4">
              <Zap className="w-4 h-4 text-[#8F00FF]" />
              <span className="text-sm font-medium text-[#8F00FF]">Comprehensive Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise Capabilities
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] via-purple-400 to-[#5E239D] bg-clip-text text-transparent">
                Tailored to Your Needs
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.06
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative p-7 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 cursor-pointer ${card.borderColor} ${card.hoverColor}`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="space-y-2 pt-5 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-xs text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8F00FF] to-purple-400"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8F00FF]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Get Started?
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">
                Connect with Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Let's discuss how RaspBerry can accelerate your enterprise PLM transformation.
            </p>
            <Link
              to="/contact"
              className="group px-10 py-5 bg-gradient-to-r from-[#8F00FF] to-[#6B1B8F] rounded-lg font-semibold text-lg shadow-[0_0_35px_rgba(143,0,255,0.5)] hover:shadow-[0_0_60px_rgba(143,0,255,0.8)] transition-all flex items-center gap-2 mx-auto"
            >
              Schedule Consultation
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  );
}
