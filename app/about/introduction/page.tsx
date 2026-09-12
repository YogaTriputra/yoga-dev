"use client";

import {
  BookOpen,
  Code2,
  Star,
  Coffee,
  CalendarDays,
  CheckCircle2,
  Folder,
  Laptop,
  PenTool,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function IntroductionPage() {
  const router = useRouter();

  return (
    <main className="relative h-screen bg-gradient-to-br from-[#f0f4f9] via-[#e5ecf5] to-[#d9e4f2] px-4 py-8 sm:px-8 lg:py-10 text-slate-800 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#3565a0]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#587fba]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />

      {/* Back button to About overview */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-6 top-6 z-30 sm:left-10"
      >
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#3565a0] shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:shadow-md"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Overview</span>
      </Link>
      </motion.div>

      {/* Main Grid Container with generous gap */}
      <div className="relative z-10 grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        
        {/* SVG Connecting Lines (Desktop visible) */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Left Line to Education */}
          <path
            d="M 520 220 C 440 220, 360 200, 290 200"
            fill="none"
            stroke="#587fba"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          {/* Top Right Line to Skills */}
          <path
            d="M 760 220 C 840 220, 920 200, 990 200"
            fill="none"
            stroke="#587fba"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          {/* Bottom Left Line to Projects */}
          <path
            d="M 520 340 C 440 340, 360 460, 290 460"
            fill="none"
            stroke="#587fba"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          {/* Bottom Right Line to Interests */}
          <path
            d="M 760 340 C 840 340, 920 460, 990 460"
            fill="none"
            stroke="#587fba"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </svg>

        {/* LEFT COLUMN: 2 Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 lg:col-span-3.5 lg:gap-10 xl:col-span-3"
        >
          {/* CARD 1: Education (Top Left) */}
          <div className="animate-float-tl group relative rounded-3xl border border-white/90 bg-white/85 p-5 sm:p-6 shadow-[0_15px_35px_-5px_rgba(53,101,160,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_-5px_rgba(53,101,160,0.25)]">
            {/* Corner Node Dot */}
            <span className="hidden lg:block absolute -right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[#3565a0] shadow-sm" />

            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565a0] to-[#244975] text-white shadow-md shadow-blue-900/20">
                <BookOpen className="h-6 w-6" />
              </div>
              <MoreHorizontal className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
            </div>

            <h2 className="mt-4 text-lg font-bold text-[#3565a0]">
              Education
            </h2>
            <div className="my-2.5 h-0.5 w-7 rounded-full bg-[#3565a0]" />

            <div className="mt-4 space-y-1">
              <p className="text-sm font-bold text-slate-800 sm:text-base">
                Informatics Student
              </p>
              <p className="text-xs font-semibold text-[#3565a0] sm:text-sm">
                Universitas Amikom Yogyakarta
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-slate-100/80 pt-4 text-xs font-medium text-slate-500">
              <CalendarDays className="h-4 w-4 text-[#3565a0]" />
              <span>2024 – Present</span>
            </div>
          </div>

          {/* CARD 3: Projects (Bottom Left) */}
          <div className="animate-float-bl group relative rounded-3xl border border-white/90 bg-white/85 p-5 sm:p-6 shadow-[0_15px_35px_-5px_rgba(53,101,160,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_-5px_rgba(53,101,160,0.25)]">
            {/* Corner Node Dot */}
            <span className="hidden lg:block absolute -right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[#3565a0] shadow-sm" />

            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565a0] to-[#244975] text-white shadow-md shadow-blue-900/20">
                <Star className="h-6 w-6" />
              </div>
              <MoreHorizontal className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
            </div>

            <h2 className="mt-4 text-lg font-bold text-[#3565a0]">
              Projects
            </h2>
            <div className="my-2.5 h-0.5 w-7 rounded-full bg-[#3565a0]" />

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-3xl font-extrabold text-[#3565a0]">
                  10+
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-600">
                  Projects Completed
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100/70">
                <Folder className="h-9 w-9 text-slate-300 stroke-[1.5]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CENTER COLUMN: Central Profile Hub */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="my-6 flex flex-col items-center text-center lg:col-span-5 lg:my-0 lg:px-6 xl:col-span-6"
        >
          <div className="relative mb-4 flex items-center justify-center">
            {/* Outer dotted node ring */}
            <div className="animate-pulse-ring relative flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center rounded-full border-2 border-dashed border-[#587fba]/40 bg-white/30 backdrop-blur-sm p-4">
              {/* Ring Node Dots */}
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white bg-[#3565a0] shadow-sm" />
              <span className="absolute top-8 right-2 h-2.5 w-2.5 rounded-full border border-white bg-[#3565a0] shadow-sm" />
              <span className="absolute bottom-8 right-2 h-2.5 w-2.5 rounded-full border border-white bg-[#3565a0] shadow-sm" />
              <span className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white bg-[#3565a0] shadow-sm" />
              <span className="absolute bottom-8 left-2 h-2.5 w-2.5 rounded-full border border-white bg-[#3565a0] shadow-sm" />
              <span className="absolute top-8 left-2 h-2.5 w-2.5 rounded-full border border-white bg-[#3565a0] shadow-sm" />

              {/* Avatar Box */}
              <div className="relative h-36 w-36 sm:h-44 sm:w-44 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-[0_10px_30px_rgba(53,101,160,0.25)]">
                <Image
                  src="/reze.jpg"
                  alt="Yoga Setia Triputra Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Profile Text Content */}
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3565a0]">
            Yoga Setia Triputra
          </h1>

          <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-600">
            Informatics Student at{" "}
            <span className="text-[#3565a0] underline decoration-[#3565a0]/40 underline-offset-4 font-bold">
              Universitas Amikom Yogyakarta
            </span>
          </p>

          <div className="my-4 h-1 w-10 rounded-full bg-[#3565a0]" />

          <div className="max-w-md space-y-3 px-2 text-xs sm:text-sm leading-relaxed text-slate-600">
            <p>
              I&apos;m an Informatics student at Universitas Amikom Yogyakarta with a passion for web development and UI design. I enjoy creating clean, interactive, and user-friendly digital experiences.
            </p>
            <p>
              I&apos;m constantly learning new technologies, exploring new ideas, and improving my skills through academic and personal projects.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 2 Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 lg:col-span-3.5 lg:gap-10 xl:col-span-3"
        >
          {/* CARD 2: Skills & Focus (Top Right) */}
          <div className="animate-float-tr group relative rounded-3xl border border-white/90 bg-white/85 p-5 sm:p-6 shadow-[0_15px_35px_-5px_rgba(53,101,160,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_-5px_rgba(53,101,160,0.25)]">
            {/* Corner Node Dot */}
            <span className="hidden lg:block absolute -left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[#3565a0] shadow-sm" />

            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565a0] to-[#244975] text-white shadow-md shadow-blue-900/20">
                <Code2 className="h-6 w-6" />
              </div>
              <MoreHorizontal className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
            </div>

            <h2 className="mt-4 text-lg font-bold text-[#3565a0]">
              Skills &amp; Focus
            </h2>
            <div className="my-2.5 h-0.5 w-7 rounded-full bg-[#3565a0]" />

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>Web Development</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>UI/UX Design</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>Problem Solving</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>Clean &amp; Efficient Code</span>
              </li>
            </ul>
          </div>

          {/* CARD 4: Interests (Bottom Right) */}
          <div className="animate-float-br group relative rounded-3xl border border-white/90 bg-white/85 p-5 sm:p-6 shadow-[0_15px_35px_-5px_rgba(53,101,160,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_-5px_rgba(53,101,160,0.25)]">
            {/* Corner Node Dot */}
            <span className="hidden lg:block absolute -left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[#3565a0] shadow-sm" />

            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565a0] to-[#244975] text-white shadow-md shadow-blue-900/20">
                <Coffee className="h-6 w-6" />
              </div>
              <MoreHorizontal className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
            </div>

            <h2 className="mt-4 text-lg font-bold text-[#3565a0]">
              Interests
            </h2>
            <div className="my-2.5 h-0.5 w-7 rounded-full bg-[#3565a0]" />

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2.5">
                <Laptop className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>Frontend Development</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PenTool className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>UI Design &amp; Prototyping</span>
              </li>
              <li className="flex items-center gap-2.5">
                <BookOpen className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>Learning New Tech</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Coffee className="h-4 w-4 shrink-0 text-[#3565a0]" />
                <span>Coffee &amp; Productivity</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>

      {/* Slider Controls (Bottom Floating Dots) */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.45, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-5 left-1/2 z-40 flex items-center gap-4 rounded-full border border-white/70 bg-white/75 px-4 py-2 shadow-[0_8px_24px_rgba(53,101,160,0.16)] backdrop-blur-md"
      >
        <button
          type="button"
          disabled
          className="flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-full text-[#3565a0] opacity-25"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          <button type="button" className="h-2 w-6 rounded-full bg-[#3565a0] transition-all duration-300" aria-label="Slide 1 (Introduction)" />
          <button type="button" onClick={() => router.push("/about/journey")} className="h-2 w-2 rounded-full bg-[#3565a0]/25 hover:bg-[#3565a0]/60 transition-all duration-300" aria-label="Slide 2 (Journey)" />
          <button type="button" className="h-2 w-2 rounded-full bg-[#3565a0]/25 hover:bg-[#3565a0]/60 transition-all duration-300" aria-label="Slide 3" />
          <button type="button" className="h-2 w-2 rounded-full bg-[#3565a0]/25 hover:bg-[#3565a0]/60 transition-all duration-300" aria-label="Slide 4" />
          <button type="button" className="h-2 w-2 rounded-full bg-[#3565a0]/25 hover:bg-[#3565a0]/60 transition-all duration-300" aria-label="Slide 5" />
        </div>

        <button
          type="button"
          onClick={() => router.push("/about/journey")}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3565a0] text-white transition duration-200 hover:scale-105 hover:bg-[#28558f]"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    </main>
  );
}

