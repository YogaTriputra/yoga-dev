"use client";

import { BriefcaseBusiness, Code2, Compass, Quote, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const careerItems = [
  {
    period: "2025",
    number: "01",
    title: "First Steps",
    subtitle: "Starting University & Exploring",
    description:
      "Started my Informatics journey at Universitas Amikom Yogyakarta while exploring programming, frontend development, and UI/UX.",
    tags: ["Informatics Student", "Programming", "Learning"],
    icon: BriefcaseBusiness,
  },
  {
    period: "2026",
    number: "02",
    title: "Building & Competing",
    subtitle: "Turning Knowledge into Practice",
    description:
      "Continued developing my skills through personal projects, new challenges, and hands-on experience in solving real-world problems.",
    tags: ["Hackathon", "Personal Projects", "Teamwork"],
    icon: Code2,
  },
  {
    period: "2026",
    number: "03",
    title: "Finding My Direction",
    subtitle: "Focusing on Frontend & UI/UX",
    description:
      "Focused on responsive interfaces, meaningful web experiences, and continuous learning through practice.",
    tags: ["Frontend Development", "UI/UX", "Tailwind CSS"],
    icon: Compass,
  },
  {
    period: "Present",
    number: "04",
    title: "Keep Exploring",
    subtitle: "Still Learning, Still Building",
    description:
      "Continuing to learn, experiment, and step outside my comfort zone through every new project.",
    tags: ["Next.js", "Game Development", "Exploring"],
    icon: TrendingUp,
  },
];

export default function CareerTimeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-7 pb-20"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-black tracking-tight text-slate-900 lg:text-3xl">
          CAREER
        </h3>
        <span className="hidden text-[10px] font-bold uppercase tracking-[0.35em] text-[#3565a0] sm:block">
          Learning through experience
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#3565a0]/40 to-transparent" />
      </div>

      <div className="mt-5 grid gap-7 lg:grid-cols-[1.7fr_0.9fr]">
        <div className="relative space-y-4">
          <div className="absolute bottom-8 left-[76px] top-8 hidden w-px bg-[#3565a0]/30 sm:block" />

          {careerItems.map((item, index) => {
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
                        {item.subtitle}
                      </p>
                      <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-600 lg:text-sm">
                        {item.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#dce4f3] px-2.5 py-1 text-[10px] font-bold text-[#3565a0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
          className="flex min-h-[300px] flex-col justify-between rounded-3xl bg-[#2f5f98] p-7 text-white shadow-[0_20px_45px_-18px_rgba(15,23,42,0.55)]"
        >
          <div>
            <BriefcaseBusiness className="h-7 w-7 text-white/75" />
            <p className="mt-5 text-xs font-bold uppercase leading-6 tracking-[0.28em] text-white/75">
              More than just code
            </p>
          </div>

          <div className="relative my-8 min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-white/[0.04]" />

            <div className="relative mx-auto mt-3 w-[85%]">
              {["Explore", "Build", "Compete", "Grow"].map((step, index) => (
                <div
                  key={step}
                  className="relative flex h-12 items-center"
                  style={{ marginLeft: `${index * 14}%` }}
                >
                  <span className="relative z-10 h-3 w-3 rounded-full border-2 border-white/80 bg-[#477bb5] shadow-[0_0_12px_rgba(185,211,243,0.65)]" />
                  <span className="ml-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
                    {step}
                  </span>
                  {index < 3 && (
                    <span className="absolute left-1.5 top-7 h-10 w-px rotate-[-38deg] bg-gradient-to-b from-white/45 to-white/10" />
                  )}
                </div>
              ))}
            </div>

            <p className="absolute bottom-4 right-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Curiosity · Practice · Progress
            </p>
          </div>

          <div>
            <p className="text-4xl font-black leading-tight">
              Learn.
              <br />
              Build.
              <br />
              <span className="text-[#b9d3f3]">Grow.</span>
            </p>
            <div className="mt-6 h-px w-12 bg-white/40" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Every project is a chance to improve, create, and move forward.
            </p>
          </div>
        </motion.aside>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-600"
      >
        <Quote className="h-7 w-7 shrink-0 rotate-180 text-[#3565a0]" />
        <div className="h-8 w-px bg-[#3565a0]/45" />
        <p className="max-w-md">
          Build it, learn from it, and make the next one better.
        </p>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-[#3565a0]/25 to-transparent md:block" />
        <span className="hidden whitespace-nowrap font-bold uppercase tracking-[0.22em] text-[#3565a0] md:block">
          Yoga Setia Triputra
        </span>
      </motion.div>
    </motion.section>
  );
}
