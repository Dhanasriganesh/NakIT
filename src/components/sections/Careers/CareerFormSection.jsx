import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import joinImage from '../../../assets/nakit-images/careers.webp';

const ApplicationFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const getApiBaseUrl = () =>
    import.meta.env.VITE_API_URL || '/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const API_URL = getApiBaseUrl();
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('role', formData.role);
      payload.append('message', formData.message);
      if (file) payload.append('file', file);

      const response = await fetch(`${API_URL}/careers/apply`, {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: 'Server error. Please try again later.' };
        }
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your application has been sent.' });
        setFormData({ name: '', email: '', mobile: '', role: '', message: '' });
        setFile(null);
        e.target.reset();
        setSubmitted(true);
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Unable to send. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Advanced Layered Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-red-50/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600" />
            Applied Innovation
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
            Tell us about <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Yourself</span>.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
            Share your experience, links, and a resume or portfolio file. We review every submission and typically respond within a week.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Visual Accent */}
          <div className="relative group overflow-hidden rounded-[48px] h-full min-h-[400px]">
            <img
              src={joinImage}
              alt="Join ABSN IT"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />

            {/* Overlay Info */}
            <div className="absolute bottom-10 left-10 right-10 p-8 rounded-[32px] bg-white/10 backdrop-blur-md border border-white/20">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Our Promise</p>
              <p className="text-xs text-white/80 italic">"We review every application personally."</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-8 p-10 md:p-12 rounded-[48px] bg-slate-50 border border-slate-100 shadow-xl">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 rounded-full bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 rounded-full bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="mobile">Mobile Number</label>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 rounded-full bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="role">Role of Interest</label>
                    <input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 rounded-full bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300"
                      placeholder="AI Engineering / Design"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-6 rounded-[32px] bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300 min-h-[140px]"
                    placeholder="Tell us about your background and why you want to join us..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="resume">Resume / Portfolio (PDF, DOCX)</label>
                  <div className="relative h-24 group">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx,.zip"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="absolute inset-0 rounded-3xl border border-dashed border-slate-200 bg-white group-hover:border-blue-600 group-hover:bg-blue-50/30 transition-all flex flex-col items-center justify-center p-4">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                        {file ? file.name : "Click to select or drag file"}
                      </p>
                      {!file && <p className="text-[9px] text-slate-300 italic">PDF, DOCX up to 10MB</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-6">
                <AnimatePresence>
                  {submitStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-center ${submitStatus.type === 'success'
                          ? 'bg-green-50 text-green-700 border border-green-100'
                          : 'bg-red-50 text-red-700 border border-red-100'
                        }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-14 px-10 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:shadow-2xl hover:shadow-red-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                        Transmitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                  {submitted && submitStatus.type === 'success' && (
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 shadow-lg" />
                      Application Received
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;