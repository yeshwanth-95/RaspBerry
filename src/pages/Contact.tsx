import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-submission`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', companyName: '', workEmail: '', projectDetails: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0B0812] text-white">
      {/* Navigation spacing */}
      <div className="h-24"></div>

      {/* Main Content */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(143,0,255,0.4) 0%, rgba(94,35,157,0.2) 40%, transparent 70%)'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Authority Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-6">
                Let's Architect
                <br />
                <span className="bg-gradient-to-r from-[#8F00FF] via-purple-400 to-[#5E239D] bg-clip-text text-transparent">
                  Your Next Upgrade
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-md">
                Secure your PLM infrastructure, synchronize your ERP, and eliminate downtime. Reach out directly to discuss your enterprise requirements.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:connect@raspberryplm.com"
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#8F00FF]/30 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#8F00FF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-medium text-white group-hover:text-[#8F00FF] transition-colors">
                      connect@raspberryplm.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919866655231"
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#8F00FF]/30 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#8F00FF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg font-medium text-white group-hover:text-[#8F00FF] transition-colors">
                      +91 9866655231
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: Secure Gateway Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="w-full p-8 md:p-10 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-16 h-16 rounded-full bg-[#8F00FF]/20 border-2 border-[#8F00FF] flex items-center justify-center mb-4"
                    >
                      <svg className="w-8 h-8 text-[#8F00FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Submission Received</h3>
                    <p className="text-gray-400">
                      We've received your inquiry and will be in touch shortly to discuss your PLM requirements.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:border-[#8F00FF] focus:ring-1 focus:ring-[#8F00FF] transition-all outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:border-[#8F00FF] focus:ring-1 focus:ring-[#8F00FF] transition-all outline-none"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="workEmail" className="block text-sm font-medium text-gray-300 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:border-[#8F00FF] focus:ring-1 focus:ring-[#8F00FF] transition-all outline-none"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:border-[#8F00FF] focus:ring-1 focus:ring-[#8F00FF] transition-all outline-none resize-none"
                        placeholder="Tell us about your PLM infrastructure, current challenges, and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#5E239D] to-[#8F00FF] text-white font-semibold text-lg hover:from-[#6B2BA8] hover:to-[#9F15FF] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(143,0,255,0.4)] hover:shadow-[0_0_50px_rgba(143,0,255,0.6)]"
                    >
                      {isLoading ? 'Initializing Consultation...' : 'Initialize Consultation'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  );
}
