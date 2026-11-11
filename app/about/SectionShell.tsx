"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const sections = [
  { title: "Introduction", href: "/about/introduction" },
  { title: "My Journey", href: "/about/journey" },
  { title: "What I Do", href: "/about/experience" },
  { title: "Tech Stack", href: "/about/tech-stack" },
  { title: "Beyond Coding", href: "/about/beyond-coding" },
];

export function RevealCard({ children, className = "", index = 0 }: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.1), ease: [0.22, 1, 0.36, 1] }}
      className={`min-w-0 rounded-3xl border border-white/90 bg-white/85 p-5 sm:p-8 shadow-[0_15px_35px_-5px_rgba(53,101,160,0.15)] backdrop-blur-xl transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_25px_45px_-5px_rgba(53,101,160,0.25)] motion-reduce:translate-none motion-reduce:transform-none motion-reduce:transition-none lg:p-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function SectionShell({ number, title, subtitle, description, children }: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const activeIndex = Number(number) - 1;
  const previous = sections[activeIndex - 1];
  const next = sections[activeIndex + 1];

  return (
    <main className="relative isolate min-h-screen bg-gradient-to-br from-[#f0f4f9] via-[#e5ecf5] to-[#d9e4f2] px-5 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-32 text-slate-800 sm:px-8 sm:pt-36 lg:px-12 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#3565a0]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#587fba]/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
      </div>
      <Link href="/about" className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#3565a0] shadow-sm backdrop-blur-md transition hover:scale-105 hover:bg-white motion-reduce:transform-none motion-reduce:transition-none sm:left-10">
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </Link>
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
        >
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-[#3565a0]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-white/70 text-xs shadow-[0_4px_12px_rgba(53,101,160,0.12)]">{number}</span>
            {title}
          </div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#3565a0] sm:text-4xl lg:text-5xl">{subtitle}</h1>
          <div className="my-6 h-1 w-10 rounded-full bg-[#3565a0]" />
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
        </motion.header>
        {children}
      </div>
      <nav aria-label="About sections" className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-[0_8px_24px_rgba(53,101,160,0.16)] backdrop-blur-md">
        {previous && <Link href={previous.href} aria-label={`Previous: ${previous.title}`} className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3565a0] text-white transition hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3565a0]"><ArrowLeft className="h-4 w-4" /></Link>}
        <div className="flex items-center gap-2">
          {sections.map((section, index) => (
            <Link key={section.href} href={section.href} aria-label={section.title} aria-current={index === activeIndex ? "page" : undefined} className={`h-2 rounded-full transition-all motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3565a0] ${index === activeIndex ? "w-6 bg-[#3565a0]" : "w-2 bg-[#3565a0]/25 hover:bg-[#3565a0]/60"}`} />
          ))}
        </div>
        {next ? <Link href={next.href} aria-label={`Next: ${next.title}`} className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3565a0] text-white transition hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3565a0]"><ArrowRight className="h-4 w-4" /></Link> : <button disabled aria-label="Last About section" className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3565a0]/15 text-[#3565a0]/40"><ArrowRight className="h-4 w-4" /></button>}
      </nav>
    </main>
  );
}
