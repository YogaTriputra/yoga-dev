"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles 
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "yogasetiatriputra@gmail.com";
  const [feedback, setFeedback] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setFeedback("Could not copy the address. You can use the email link instead.");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const sender = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !sender || !subject || !message) {
      setFeedback("Please complete every field before opening your email app.");
      return;
    }

    const body = `${message}\n\nFrom: ${name}\nReply to: ${sender}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFeedback("Your email app will open with your message. Please press Send there. If it does not open, use the email link or copy the address.");
  };

  return (
    <main className="relative min-h-screen bg-blue-50 overflow-hidden pt-16 pb-[calc(7rem+env(safe-area-inset-bottom))] px-4 sm:px-10 lg:pt-24 lg:pb-16">
      {/* Background Ornaments (Konsisten dengan About page) */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3565a0]/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3565a0]/15" />
      <div className="pointer-events-none absolute right-12 top-28 -z-10 grid grid-cols-5 gap-3 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#3565a0]/40" />
        ))}
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-x-16 items-center">
          
          {/* SISI KIRI: Direct Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 border-2 border-[#3565a0] px-4 py-1.5 rounded-2xl text-sm font-semibold text-[#3565a0] bg-white/70 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4" />
              Contact
            </div>

            <h1 className="text-[28px] sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Let&apos;s build <br />
              something <span className="text-[#3565a0]">great</span> together.
            </h1>

            <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">
              Punya ide project, tawaran kolaborasi, atau sekadar ingin berdiskusi seputar frontend development? Pintu saya selalu terbuka!
            </p>

            {/* Status Card */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-blue-100 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                Available for freelance projects &amp; collaborations
              </span>
            </div>

            {/* Contact Items */}
            <div className="space-y-3 pt-2">
              {/* Copy Email Box */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/70 border border-blue-100/80 shadow-sm">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-xs text-slate-500 font-medium">Email Me</p>
                    <a href={`mailto:${email}`} className="break-all text-sm font-semibold text-slate-800 underline-offset-4 hover:underline">{email}</a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#3565a0] text-white hover:bg-[#284d7a] transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>

              {/* Location Box */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/70 border border-blue-100/80 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Location</p>
                  <p className="text-sm font-semibold text-slate-800">Indonesia (GMT+7)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Connect on Socials
                </p>
                <div className="flex items-center gap-3">
                    {/* GitHub */}
                    <a
                    href="https://github.com/YogaTriputra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-blue-200/70 text-[#3565a0] hover:bg-[#3565a0] hover:text-white transition-all shadow-sm"
                    >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                    </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                    href="https://www.linkedin.com/in/yoga-triputra-2a3345416/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-blue-200/70 text-[#3565a0] hover:bg-[#3565a0] hover:text-white transition-all shadow-sm"
                    >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.75h4.46V21H2.75V9.75Zm7.25 0h4.28v1.54h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V21h-4.46v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44V21H10V9.75Z" />
                    </svg>
                    </a>

                    {/* Instagram */}
                    <a
                    href="https://www.instagram.com/yoggaaw._?psln=MXF0dGI3MjR4Zmd2bA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-blue-200/70 text-[#3565a0] hover:bg-[#3565a0] hover:text-white transition-all shadow-sm"
                    >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
                    </svg>
                    </a>
                    </div>
                </div>

        </motion.div>

          {/* SISI KANAN: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-0 lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/60 bg-white/80 p-4 sm:p-10 shadow-xl shadow-blue-900/5 backdrop-blur-md">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-[#3565a0]" />
                Send a Message
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mt-1 mb-6">
                Fill out the form to compose an email. You will send it from your email app.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      type="text"
                      placeholder="e.g. Alex Pratama"
                      className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#3565a0] focus:ring-4 focus:ring-[#3565a0]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      type="email"
                      placeholder="alex@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#3565a0] focus:ring-4 focus:ring-[#3565a0]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    required
                    maxLength={150}
                    type="text"
                    placeholder="Project Inquiry / Just saying hi"
                    className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#3565a0] focus:ring-4 focus:ring-[#3565a0]/10 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={3000}
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#3565a0] focus:ring-4 focus:ring-[#3565a0]/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#3565a0] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#3565a0]/20 hover:bg-[#2c5385] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  Open Email App
                </button>
                <p role="status" aria-live="polite" className="text-xs leading-relaxed text-slate-500">{feedback}</p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
