import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import joinImage from "../../../assets/nakit-images/careers.webp";

const ApplicationFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "",
    message: "",
  });

  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const getApiBaseUrl = () => import.meta.env.VITE_API_URL || "/api";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const API_URL = getApiBaseUrl();
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) =>
        payload.append(key, value)
      );

      if (file) payload.append("file", file);

      const response = await fetch(`${API_URL}/careers/apply`, {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Application sent successfully!",
        });
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          role: "",
          message: "",
        });
        setFile(null);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Unable to submit.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-red-200/30 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-800 mb-6">
            Join Our Team
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
            Build the Future
            <span className="block font-medium bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">
              With Us
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-xl">
            We're always looking for talented engineers, designers, and thinkers.
            Tell us about yourself and let's build something meaningful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Image */}
          <div className="relative rounded-[40px] overflow-hidden shadow-xl group">
            <img
              src={joinImage}
              alt="Join NAK IT"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                Our Promise
              </p>
              <p className="text-sm text-white">
                Every application is reviewed by our team personally.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-[40px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl space-y-8"
          >

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="input-modern"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="input-modern"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="input-modern"
              />

              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Role of Interest"
                required
                className="input-modern"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              rows="4"
              className="textarea-modern"
            />

            {/* File Upload */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500 transition cursor-pointer">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume"
              />
              <label htmlFor="resume" className="cursor-pointer text-sm text-slate-600">
                {file ? file.name : "Upload Resume (PDF, DOCX)"}
              </label>
            </div>

            {/* Status */}
            <AnimatePresence>
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-800 text-white font-semibold tracking-wide shadow-lg hover:scale-[1.02] transition"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;