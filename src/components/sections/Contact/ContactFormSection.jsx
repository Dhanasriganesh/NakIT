import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import inTouchImage from "../../../assets/nakit-images/contact.webp";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    topic: "",
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
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const API_URL = getApiBaseUrl();
      const payload = new FormData();

      Object.keys(formData).forEach((key) =>
        payload.append(key, formData[key])
      );

      if (file) payload.append("file", file);

      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          company: "",
          email: "",
          mobile: "",
          topic: "",
          message: "",
        });

        setFile(null);
        setSubmitted(true);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Unable to send message",
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
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-800 mb-5">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
            Let's build something
            <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text italic">
              {" "}
              extraordinary
            </span>
          </h2>

          <p className="text-slate-600 mt-6 text-sm md:text-base">
            Tell us about your project and our team will reach out within
            24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Visual */}
          <div className="relative rounded-[40px] overflow-hidden h-[520px] group">

            <img
              src={inTouchImage}
              alt="Contact"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl">
              <p className="text-xs text-white uppercase tracking-widest mb-2">
                Enterprise Ready
              </p>
              <p className="text-white text-sm">
                Your ideas remain confidential and protected under NDA.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative p-10 rounded-[36px] bg-white border border-slate-200 shadow-xl space-y-7"
          >

            {/* Input Row */}
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
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="input-modern"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="input-modern"
              />

              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="input-modern"
              />

            </div>

            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="input-modern"
            >
              <option value="">Topic of Interest</option>
              <option value="strategy">Strategy / Innovation</option>
              <option value="platforms">Platforms / Engineering</option>
              <option value="ai">AI & Automation</option>
              <option value="careers">Careers</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows="4"
              className="input-modern resize-none"
            />

            {/* File Upload */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500 transition relative">

              <input
                type="file"
                accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <p className="text-sm text-slate-500">
                {file ? file.name : "Upload project document"}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                PDF, DOC, PPT, ZIP supported
              </p>

            </div>

            {/* Status */}
            <AnimatePresence>
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`text-sm p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <button
              disabled={isSubmitting}
              className="w-full h-14 rounded-full bg-gradient-to-r from-blue-400 to-blue-800 text-white font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;