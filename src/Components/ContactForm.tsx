"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "YOUR_USER_ID"
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contain-layout py-16 sm:py-20">
      <div className="mx-auto max-w-2xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Get in Touch</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s work together.</h2>
          <p className="text-slate-400">
            Have a question or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="space-y-3">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 transition-all placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 transition-all placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 transition-all placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </div>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-400"
            >
              Message sent successfully.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400"
            >
              Failed to send. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
