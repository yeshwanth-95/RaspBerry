import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, ChevronRight, Server, Activity, Shield, TrendingUp } from 'lucide-react';
import { Solutions } from './pages/Solutions';
import { CaseStudies } from './pages/CaseStudies';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { PartnersMarquee } from './components/PartnersMarquee';

const RBMonogram = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="url(#gradient)" />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8F00FF" />
        <stop offset="100%" stopColor="#5E239D" />
      </linearGradient>
    </defs>
    <text x="24" y="32" fontFamily="system-ui, -apple-system" fontSize="22" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="-0.5">
      RB
    </text>
  </svg>
);

function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techStack = [
    'Siemens Teamcenter',
    'SAP S/4 HANA',
    'Dynamics 365',
    'Active Workspace',
    'Okta SSO'
  ];

  const features = [
    {
      icon: Server,
      title: 'Enterprise Architecture & Upgrades',
      description: 'Executing zero-downtime, multi-stage version migrations (TC 12.2 to TC 2406) across massive 4-tier legacy environments.'
    },
    {
      icon: Activity,
      title: 'Bi-Directional ERP Synchronization',
      description: 'Flawless T4S and T4EA integrations, bridging complex Teamcenter engineering data directly into SAP S/4 HANA and Dynamics 365.'
    },
    {
      icon: Shield,
      title: 'Semiconductor-Grade IP Security',
      description: 'Over a decade of experience building bulletproof Intellectual Property management infrastructure for global semiconductor titans.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0812] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Hero Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-40">
          <div className="absolute inset-0 bg-gradient-radial from-[#8F00FF] via-[#5E239D] to-transparent blur-3xl"
               style={{
                 background: 'radial-gradient(circle, rgba(143,0,255,0.4) 0%, rgba(94,35,157,0.3) 35%, transparent 70%)'
               }}>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Architecting the Enterprise
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] via-purple-400 to-[#5E239D] bg-clip-text text-transparent">
                Digital Thread
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Zero-downtime PLM modernization and seamless ERP synchronization for the world's most demanding manufacturing and semiconductor environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-[#8F00FF] to-[#6B1B8F] rounded-lg font-semibold shadow-[0_0_30px_rgba(143,0,255,0.4)] hover:shadow-[0_0_50px_rgba(143,0,255,0.7)] transition-all flex items-center gap-2"
              >
                Initialize Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/10 rounded-lg font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
              >
                Explore Architecture
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="px-6 py-12 relative border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8F00FF]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-semibold text-[#8F00FF] mb-6 tracking-wide">ENGINEERED FOR ENTERPRISE SCALE</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2 text-gray-400 text-sm md:text-base"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8F00FF]"></div>
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:border-[#8F00FF]/30 transition-all hover:bg-white/[0.04]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8F00FF]/20 to-[#5E239D]/20 border border-[#8F00FF]/20 flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-[#8F00FF]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 p-12 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-[#8F00FF]" />
                <div className="text-5xl font-bold bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">99.9%</div>
              </div>
              <p className="text-gray-400">System Uptime</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-[#8F00FF]" />
                <div className="text-5xl font-bold bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">40%</div>
              </div>
              <p className="text-gray-400">Faster Time-to-Market</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="w-6 h-6 text-[#8F00FF]" />
                <div className="text-5xl font-bold bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">500M+</div>
              </div>
              <p className="text-gray-400">Records Migrated</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PartnersMarquee />

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8F00FF]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">
                Product Lifecycle?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Join industry leaders who trust RaspBerry to power their PLM infrastructure.
            </p>
            <Link
              to="/contact"
              className="group px-10 py-5 bg-gradient-to-r from-[#8F00FF] to-[#6B1B8F] rounded-lg font-semibold text-lg shadow-[0_0_35px_rgba(143,0,255,0.5)] hover:shadow-[0_0_60px_rgba(143,0,255,0.8)] transition-all flex items-center gap-2 mx-auto"
            >
              Initialize Consultation
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <RBMonogram className="w-8 h-8" />
              <span className="text-xl font-bold">RaspBerry PLM</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 RaspBerry PLM Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0B0812]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <RBMonogram className="w-8 h-8" />
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">RaspBerry PLM</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="/solutions" className={`text-sm transition-colors ${location.pathname === '/solutions' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Solutions</a>
          <a href="/case-studies" className={`text-sm transition-colors ${location.pathname === '/case-studies' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Case Studies</a>
          <a href="/company" className={`text-sm transition-colors ${location.pathname === '/company' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Company</a>
          <Link to="/contact" className="px-5 py-2 bg-gradient-to-r from-[#8F00FF]/20 to-purple-400/20 border border-[#8F00FF]/40 rounded-lg text-sm font-medium hover:border-[#8F00FF]/60 transition-all shadow-[0_0_20px_rgba(143,0,255,0.3)] hover:shadow-[0_0_30px_rgba(143,0,255,0.5)]">
            <span className="bg-gradient-to-r from-[#8F00FF] to-purple-400 bg-clip-text text-transparent">Contact Us</span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
