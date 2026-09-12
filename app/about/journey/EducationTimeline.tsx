"use client";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  Quote,
  School,
} from "lucide-react";
import { motion } from "motion/react";

const educationItems = [
  {
    period: "2019 – 2022",
    number: "01",
    title: "Junior High School",
    institution: "SMP",
    description:
      "Started to get familiar with computers and technology. This was the beginning of my curiosity about how software and digital products work.",
    icon: School,
  },
  {
    period: "2022 – 2025",
    number: "02",
    title: "Vocational High School",
    institution: "Software Development (RPL)",
    description:
      "Studied informatics, learned programming fundamentals, web development, databases, and software development. This is where I started building real projects.",
    icon: GraduationCap,
  },
  {
    period: "2025 – Present",
    number: "03",
    title: "Informatics",
    institution: "Universitas Amikom Yogyakarta",
    description:
      "Currently pursuing a bachelor’s degree in Informatics. Continuing to learn, explore new technologies, and improve my skills as a developer.",
    icon: Building2,
  },
];

export default function EducationTimeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-7 pb-20"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-black tracking-tight text-slate-900 lg:text-3xl">
          EDUCATION
        </h3>
        <span className="hidden text-[10px] font-bold uppercase tracking-[0.35em] text-[#3565a0] sm:block">
          Places that shaped me
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#3565a0]/40 to-transparent" />
      </div>

      <div className="mt-5 grid gap-7 lg:grid-cols-[1.7fr_0.9fr]">
        <div className="relative space-y-4">
          <div className="absolute bottom-8 left-[76px] top-8 hidden w-px bg-[#3565a0]/30 sm:block" />

          {educationItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="relative grid grid-cols-1 items-center gap-4 sm:grid-cols-[64px_24px_1fr]"
              >
                <p className="text-sm font-extrabold leading-5 text-[#3565a0] sm:text-right">
                  {item.period}
                </p>

                <span className="relative z-10 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-[#3565a0] bg-[#e5ecf5] shadow-[0_0_0_4px_rgba(229,236,245,0.9)] sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3565a0]" />
                </span>

                <div className="group relative overflow-hidden rounded-2xl border border-white/90 bg-white/65 px-5 py-4 shadow-[0_12px_30px_-16px_rgba(53,101,160,0.45)] backdrop-blur-xl transition-shadow hover:shadow-[0_18px_35px_-14px_rgba(53,101,160,0.5)]">
                  <span className="absolute right-5 top-2 text-4xl font-black text-[#3565a0]/15">
                    {item.number}
                  </span>

                  <div className="flex items-start gap-4 pr-10">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h4 className="text-base font-extrabold text-slate-800 lg:text-lg">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs font-bold text-[#3565a0]">
                        {item.institution}
                      </p>
                      <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-600 lg:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#3565a0] to-[#244975] p-7 text-white shadow-[0_20px_45px_-18px_rgba(15,23,42,0.65)]"
        >
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute bottom-14 right-8 flex gap-3 opacity-20">
            <span className="h-20 w-14 -skew-y-12 border border-white bg-white/10" />
            <span className="h-24 w-14 -skew-y-12 border border-white bg-white/10" />
            <span className="h-28 w-14 -skew-y-12 border border-white bg-white/10" />
          </div>

          <div className="relative z-10">
            <BookOpen className="h-7 w-7 text-white/75" />
            <p className="mt-5 max-w-[180px] text-xs font-bold uppercase leading-6 tracking-[0.28em] text-white/80">
              Learning today for a brighter tomorrow
            </p>
            <div className="mt-5 h-px w-9 bg-white/45" />
          </div>

          <p className="relative z-10 text-xl font-medium leading-tight text-white/80">
            Same mindset.
            <br />
            <span className="font-bold text-[#b9d3f3]">New horizons.</span>
          </p>

          <div className="relative z-10 flex items-center justify-between text-xs text-white/60">
            <span>01 / 03</span>
            <div className="flex gap-2">
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 transition hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 transition hover:bg-white/10">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-600"
      >
        <Quote className="h-7 w-7 shrink-0 rotate-180 text-[#3565a0]" />
        <div className="h-8 w-px bg-[#3565a0]/45" />
        <p className="max-w-md">
          Education gives me a foundation, but curiosity keeps me moving forward.
        </p>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-[#3565a0]/25 to-transparent md:block" />
        <span className="hidden whitespace-nowrap font-bold uppercase tracking-[0.22em] text-[#3565a0] md:block">
          Yoga Setia Triputra
        </span>
      </motion.div>
    </motion.section>
  );
}
