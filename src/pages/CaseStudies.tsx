import { motion } from 'framer-motion';
import { CheckCircle, Target, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CaseStudies() {
  const cases = [
    {
      title: 'Bi-Directional Synchronization: Teamcenter to SAP S/4 HANA',
      client: 'Commercial & Industrial Solutions (US-Based)',
      challenge: 'The client required a flawless pipeline to transfer complex manufacturing data (Parts and Bill of Materials) from their PLM directly into their ERP without data degradation.',
      solution: 'Architected a custom integration using the T4S framework. Mapped complex business objects between Teamcenter and SAP, configured advanced pipeline designers, and automated Material Master (MM) creation.',
      impact: 'Eliminated manual data entry bottlenecks, ensuring 100% synchronization between engineering designs and supply chain procurement in under 6 weeks.'
    },
    {
      title: 'Zero-Downtime Architecture Migration: TC 12.2 to TC 2406',
      client: 'Global Apparel Manufacturer (US-Based)',
      challenge: 'Upgrading a massive legacy Teamcenter architecture across a 4-tier system without disrupting global engineering workflows.',
      solution: 'Executed a multi-stage migration (TC 12.2 to 14.3, then to 2406). Rebuilt CAD integrations, deployed SSO via Okta, and overhauled the Dispatcher Framework to automate high-volume file translations (NXTOPDF, SWTOJT).',
      impact: 'Delivered a fully modernized, secure PLM environment that accelerated CAD file sharing and future-proofed the engineering IT backbone.'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
            Proven
            <br />
            <span className="bg-gradient-to-r from-[#8F00FF] via-purple-400 to-[#5E239D] bg-clip-text text-transparent">
              Enterprise Execution
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Real-world success stories from organizations transforming their PLM infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-2 gap-8"
          >
            {cases.map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10 backdrop-blur-xl bg-white/[0.05] border border-white/10 hover:border-[#8F00FF]/50 transition-all hover:bg-white/[0.08]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                <div className="relative z-10 flex flex-col gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white mb-3">
                      {caseStudy.title}
                    </h2>
                    <p className="text-sm md:text-base text-[#8F00FF] font-medium">
                      {caseStudy.client}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-5 h-5 text-[#8F00FF]" />
                        <h3 className="text-lg font-semibold text-white">The Challenge</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-5 h-5 text-[#8F00FF]" />
                        <h3 className="text-lg font-semibold text-white">The Solution</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-[#8F00FF]" />
                        <h3 className="text-lg font-semibold text-white">The Impact</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {caseStudy.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Write Your
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Let's discuss how RaspBerry can transform your enterprise PLM infrastructure.
            </p>
            <Link
              to="/contact"
              className="group px-10 py-5 bg-gradient-to-r from-[#8F00FF] to-[#6B1B8F] rounded-lg font-semibold text-lg shadow-[0_0_35px_rgba(143,0,255,0.5)] hover:shadow-[0_0_60px_rgba(143,0,255,0.8)] transition-all inline-flex items-center gap-2"
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
