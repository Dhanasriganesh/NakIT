import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import inTouchImage from '../../../assets/nakit-images/contact.webp';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    topic: '',
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
      payload.append('company', formData.company);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('topic', formData.topic);
      payload.append('message', formData.message);
      if (file) payload.append('file', file);

      const response = await fetch(`${API_URL}/contact`, {
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
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
        setFormData({ name: '', company: '', email: '', mobile: '', topic: '', message: '' });
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
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600" />
            Project Briefing
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight mb-8">
            Tell us about <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Your Vision</span>.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
            Upload documents, outlines, or supporting files. We review every brief personally and typically respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Visual Accent */}
          <div className="relative group overflow-hidden rounded-[48px] h-full min-h-[500px]">
            <img
              src={inTouchImage}
              alt="Connect"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors" />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 right-10 p-10 rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-3">Enterprise Ready</p>
              <p className="text-sm text-white/90 font-light leading-relaxed italic">
                "We keep everything strictly confidential and protected by NDA by default."
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-8 p-10 md:p-12 rounded-[56px] bg-slate-50 border border-slate-100 shadow-2xl">
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
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-14 px-6 rounded-full bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300"
                      placeholder="Organization Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 rounded-full bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300"
                      placeholder="jane@organization.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="mobile">Mobile</label>
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
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="topic">Topic of Interest</label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-6 rounded-full bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all appearance-none"
                  >
                    <option value="">Select a category</option>
                    <option value="strategy">Strategy / Innovation</option>
                    <option value="platforms">Platforms / Engineering</option>
                    <option value="ai">AI & Automation</option>
                    <option value="careers">Careers / Talent</option>
                    <option value="media">Media / Partnerships</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-6 rounded-[32px] bg-white border border-slate-100 text-sm focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-300 min-h-[140px]"
                    placeholder="Briefly describe your goals..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4" htmlFor="attachments">Attachments (Max 20MB)</label>
                  <div className="relative h-24 group">
                    <input
                      id="attachments"
                      type="file"
                      accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="absolute inset-0 rounded-[24px] border border-dashed border-slate-200 bg-white group-hover:border-blue-600 group-hover:bg-blue-50/30 transition-all flex flex-col items-center justify-center p-4">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                        {file ? file.name : "Click to select or drag RFP"}
                      </p>
                      {!file && <p className="text-[9px] text-slate-300 italic">PDF, PPTX, ZIP supported</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 space-y-6">
                <AnimatePresence mode="wait">
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
                    className="w-full h-14 px-10 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:shadow-2xl hover:shadow-red-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                        Transmitting...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  {submitted && submitStatus.type === 'success' && (
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 shadow-lg" />
                      Brief Received
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

export default ContactFormSection;