import { motion } from 'framer-motion';
import { ChevronRight, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Company() {
  const stats = [
    { value: '25+', label: 'Enterprise IT Consulting' },
    { value: '12+', label: 'Intel IP Architecture' },
    { value: '4+', label: 'Independent PLM Architect' },
    { value: '100%', label: 'Agile Delivery & Scrum' }
  ];

  const timeline = [
    {
      title: 'Principal PLM Architect & Consultant',
      duration: '4+ Years',
      era: 'The Independent Era',
      description: 'Leading high-ticket enterprise migrations, specializing in zero-downtime Teamcenter upgrades (TC 2406) and complex bi-directional SAP S/4 HANA integrations (T4S/T4EA) for Fortune 500 clients.',
      position: 'current'
    },
    {
      title: 'Sr PLM Solution Architect — HCL Technologies',
      duration: '8 Years',
      era: 'The Enterprise Scaling Era',
      description: 'Architected robust digital lifecycle solutions and directed massive-scale data migrations across multiple high-stakes engineering environments.',
      position: 'past'
    },
    {
      title: 'PDIT Delivery Lead & Architect — Wipro Technologies',
      duration: '6 Years',
      era: 'The Semiconductor / Intel Era',
      description: 'Embedded within Intel Corporation, architecting highly secure Intellectual Property (IP) Management systems using APLM SaaS, XDE, and Methodics to protect semiconductor digital assets.',
      position: 'past'
    },
    {
      title: 'IT Analyst & PLM Consultant — TCS & Spatial Integrated Systems',
      duration: '8 Years Combined',
      era: 'The Foundation',
      description: 'Built the foundational technical expertise in Teamcenter implementations, server-side customization, and CAD integrations for global aerospace and automotive giants.',
      position: 'past'
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

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-4">
              Executive Brief:
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] via-purple-400 to-[#5E239D] bg-clip-text text-transparent">
                Bala Murthy
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
              Principal PLM Solution Architect & Enterprise IT Strategist
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Architecting the Digital Thread for global manufacturing, semiconductor, and automotive leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* By The Numbers Stats Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#8F00FF]/30 transition-all hover:bg-white/[0.08]"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Eras of
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">
                Execution
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              A comprehensive journey through enterprise PLM transformation
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8F00FF] via-[#8F00FF]/50 to-transparent transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-20 relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Node Circle */}
                  <div className="relative flex flex-col items-center md:w-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="absolute left-0 md:relative md:left-auto w-12 h-12 rounded-full bg-[#8F00FF]/20 border-2 border-[#8F00FF] flex items-center justify-center z-20 flex-shrink-0"
                    >
                      <div className="w-3 h-3 rounded-full bg-[#8F00FF]"></div>
                    </motion.div>

                    {/* Desktop Content */}
                    <div className={`hidden md:block ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#8F00FF]/10 border border-[#8F00FF]/30 text-xs font-medium text-[#8F00FF]">
                          {item.era}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm font-medium text-[#8F00FF] mb-3">{item.duration}</p>
                      <p className="text-gray-400 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="md:hidden flex-1 pl-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#8F00FF]/10 border border-[#8F00FF]/30 text-xs font-medium text-[#8F00FF]">
                        {item.era}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm font-medium text-[#8F00FF] mb-3">{item.duration}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Desktop Spacer */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">
                Credentials
              </span>
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <div className="flex items-center gap-3 text-lg text-gray-300">
                <Award className="w-6 h-6 text-[#8F00FF] flex-shrink-0" />
                <span>B.Tech in Mechanical Engineering, NIT Warangal</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/10"></div>
              <div className="flex items-center gap-3 text-lg text-gray-300">
                <Briefcase className="w-6 h-6 text-[#8F00FF] flex-shrink-0" />
                <span>Siemens PLM Certified Professional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8F00FF]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Let's Discuss Your
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">
                PLM Strategy
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Connect with Bala to explore how RaspBerry can accelerate your enterprise transformation.
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
