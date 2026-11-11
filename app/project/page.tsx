"use client";

import { Sparkles, ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectItem {
  number: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
  liveUrl?: string;
}

const projects: ProjectItem[] = [
  {
    number: "01",
    title: "Project 01",
    category: "Featured Work",
    description:
      "Deskripsi singkat mengenai project 01. Kembangkan konten ini sesuai kebutuhan desain Anda.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "NutritionBot",
    category: "AI & Health Tech",
    description:
      "Deskripsi singkat mengenai project 02. Kembangkan konten ini sesuai kebutuhan desain Anda.",
    tags: ["Chatbot AI", "React", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "NeoRain",
    category: "Mental Health Platform",
    description:
      "NeoRain adalah aplikasi web kesehatan mental yang saya buat untuk membantu pengguna memantau dan mengevaluasi kondisi mental mereka, dengan dukungan AI dan analisis untuk memahami kesehatan mental secara lebih mendalam.",
    tags: ["Mental Health", "AI", "Web App"],
    liveUrl: "https://neorain.vercel.app/",
  },
  {
    number: "04",
    title: "TukangAja",
    category: "On-Demand Service",
    description:
      "Deskripsi singkat mengenai project 04. Kembangkan konten ini sesuai kebutuhan desain Anda.",
    tags: ["Fullstack", "Next.js", "PostgreSQL"],
  },
];

export default function ProjectPage() {
  const [activeNumber, setActiveNumber] = useState("03");
  const [direction, setDirection] = useState(1);
  const radius = 260;
  const visibleAngles = [0, 52, 180, -52];

  const activeIndex = projects.findIndex(
    (project) => project.number === activeNumber,
  );
  const currentProject = projects[activeIndex] || projects[0];

  const selectProject = useCallback(
    (index: number) => {
      if (index === activeIndex) return;

      let diff = index - activeIndex;
      if (diff === projects.length - 1) diff = -1;
      else if (diff === -(projects.length - 1)) diff = 1;

      setDirection(diff > 0 ? 1 : -1);
      setActiveNumber(projects[index].number);
    },
    [activeIndex],
  );

  const nextProject = useCallback(() => {
    selectProject((activeIndex + 1) % projects.length);
  }, [activeIndex, selectProject]);

  const prevProject = useCallback(() => {
    selectProject((activeIndex - 1 + projects.length) % projects.length);
  }, [activeIndex, selectProject]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        nextProject();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        prevProject();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  return (
    <main className="min-h-screen">
      {/* SECTION 1: HEADER */}
      <section className="flex min-h-screen items-center bg-blue-50 dark:bg-[#0b1424] dark:text-[#a8c4e8] px-6 pt-20 pb-[calc(7rem+env(safe-area-inset-bottom))] text-[#3565a0] sm:px-8 lg:px-16 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-7xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3565a0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3565a0]">
            <Sparkles className="h-4 w-4" />
            Selected Work
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Project
            </h1>

            <span className="hidden h-20 w-px bg-[#3565a0] sm:block" />

            <p className="text-lg font-bold leading-tight text-slate-700 lg:text-xl">
              Things <br /> I&apos;ve Built
            </p>

            <div className="mt-5 h-0.5 w-16 bg-slate-700" />

            <p className="mt-6 max-w-md text-[13px] leading-relaxed text-slate-700 sm:text-sm lg:text-base">
              A collection of projects I&apos;ve built, designed, and explored
              throughout my journey as an Informatics student.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: CIRCULAR CAROUSEL & PROJECT DETAILS */}
      <section className="relative flex min-h-screen w-full items-center bg-[#3565a0] dark:bg-[#12243b] px-6 pt-16 pb-[calc(7rem+env(safe-area-inset-bottom))] text-white sm:px-8 xl:px-16 xl:py-20 overflow-hidden">
        {/* busur lingkaran */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 hidden items-center justify-center rounded-full xl:flex"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: "translate(-70%, -50%)",
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            aria-hidden="true"
          >
            <circle
              cx={radius}
              cy={radius}
              r={radius - 2}
              fill="none"
              stroke="rgba(255, 255, 255, 0.18)"
              strokeWidth="1.5"
            />
            <circle
              cx={radius}
              cy={radius}
              r={radius - 9}
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="7 13"
              className="animate-orbit-line"
            />
            <motion.circle
              key={activeNumber}
              cx={radius}
              cy={radius}
              r={radius - 2}
              fill="none"
              stroke="#c3cae5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="80 1545"
              initial={{
                strokeDashoffset: 80,
                opacity: 0,
              }}
              animate={{
                strokeDashoffset: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transform: "rotate(-14deg)",
                transformOrigin: "center",
              }}
            />
          </svg>

          {/* looping lingkaran */}
          {projects.map((item, index) => {
            const relativeIndex =
              (index - activeIndex + projects.length) % projects.length;
            const angle = visibleAngles[relativeIndex];
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);
            const isActive = relativeIndex === 0;
            const isVisible = relativeIndex !== 2;

            return (
              <button
                key={item.number}
                type="button"
                onClick={() => selectProject(index)}
                aria-label={`${item.number}: ${item.title}`}
                aria-pressed={isActive}
                aria-hidden={!isVisible}
                tabIndex={isVisible ? 0 : -1}
                className="pointer-events-auto absolute flex cursor-pointer items-center gap-3 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white group"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  opacity: isActive ? 1 : isVisible ? 0.45 : 0,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <div
                  className={`h-3 w-3 rounded-full border-2 border-white shadow-sm transition-all duration-300 ${
                    isActive
                      ? "scale-125 bg-[#c3cae5] ring-4 ring-white/20"
                      : "bg-white/70 group-hover:scale-110"
                  }`}
                />
                <span
                  className={`text-sm font-extrabold tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-white scale-110"
                      : "text-white/65 group-hover:text-white"
                  }`}
                  style={{
                    transform: "none",
                  }}
                >
                  {item.number}
                </span>
              </button>
            );
          })}
        </div>

        {/* ⚪ KONTEN DETAIL PROJECT DENGAN ANIMASI TEKS */}
        <div className="relative z-10 grid min-w-0 flex-1 items-center gap-10 xl:ml-56 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-12">
          <nav aria-label="Select project" className="flex min-w-0 gap-3 overflow-x-auto p-1 xl:hidden">
            {projects.map((project, index) => (
              <button
                key={project.number}
                type="button"
                onClick={() => selectProject(index)}
                aria-label={`${project.number}: ${project.title}`}
                aria-pressed={project.number === activeNumber}
                className={`flex h-12 min-w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  project.number === activeNumber
                    ? "border-white bg-white text-[#3565a0]"
                    : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {project.number}
              </button>
            ))}
          </nav>
          <div className="relative flex min-h-[260px] min-w-0 flex-col justify-center">
          {/* Subtle background number watermark */}
          <div className="pointer-events-none absolute -left-8 -top-12 select-none overflow-hidden opacity-[0.06]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.span
                key={`num-bg-${activeNumber}`}
                custom={direction}
                initial={{ opacity: 0, y: direction > 0 ? 30 : -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: direction > 0 ? -30 : 30, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[120px] sm:text-[160px] font-black leading-none text-white"
              >
                {activeNumber}
              </motion.span>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeNumber}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={{
                enter: (dir: number) => ({
                  opacity: 0,
                  y: dir > 0 ? 28 : -28,
                  filter: "blur(6px)",
                }),
                center: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.07,
                  },
                },
                exit: (dir: number) => ({
                  opacity: 0,
                  y: dir > 0 ? -22 : 22,
                  filter: "blur(4px)",
                  transition: {
                    duration: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }),
              }}
              className="relative flex flex-col"
            >
              {/* Category / Subtitle */}
              <motion.div
                variants={{
                  enter: (dir: number) => ({
                    opacity: 0,
                    y: dir > 0 ? 12 : -12,
                  }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  },
                  exit: { opacity: 0, transition: { duration: 0.15 } },
                }}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#c3cae5] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#c3cae5]">
                  Selected Project &bull; {currentProject.category}
                </span>
              </motion.div>

              {/* Title with overflow-hidden mask reveal */}
              <div className="mt-2 overflow-hidden py-1">
                <motion.h2
                  variants={{
                    enter: (dir: number) => ({
                      opacity: 0,
                      y: dir > 0 ? 35 : -35,
                      filter: "blur(4px)",
                    }),
                    center: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                    exit: (dir: number) => ({
                      opacity: 0,
                      y: dir > 0 ? -28 : 28,
                      filter: "blur(4px)",
                      transition: {
                        duration: 0.22,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }),
                  }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
                >
                  {currentProject.title}
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                variants={{
                  enter: (dir: number) => ({
                    opacity: 0,
                    y: dir > 0 ? 16 : -16,
                  }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: { opacity: 0, transition: { duration: 0.15 } },
                }}
                className="mt-4 text-[13px] sm:text-sm md:text-base leading-relaxed text-white/80 max-w-lg"
              >
                {currentProject.description}
              </motion.p>

              {/* Tags */}
              {currentProject.tags && (
                <motion.div
                  variants={{
                    enter: { opacity: 0, y: 14 },
                    center: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    },
                    exit: { opacity: 0, transition: { duration: 0.15 } },
                  }}
                  className="mt-6 flex flex-wrap items-center gap-2"
                >
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Quick navigation controls */}
          <div className="mt-8 hidden items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={prevProject}
              aria-label="Previous project"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3565a0] active:scale-95 cursor-pointer"
            >
              <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3565a0] active:scale-95 cursor-pointer"
            >
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <span className="text-xs text-white/50 pl-1 select-none">
              Gunakan panah &uarr;&darr; atau klik nomor
            </span>
          </div>
          </div>
          <AnimatePresence mode="wait">
            {currentProject.liveUrl && (
              <motion.div
                key={currentProject.liveUrl}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="w-full min-w-0 max-w-[640px] justify-self-center"
              >
                <div
                  className="project-preview-float overflow-hidden rounded-2xl border border-white/30 bg-blue-50 dark:bg-[#182b45] dark:border-[#38516f] shadow-[0_25px_45px_-15px_rgba(10,25,55,0.45)]"
                >
                  <div className="flex items-center gap-3 border-b border-[#3565a0]/10 px-4 py-3">
                    <div aria-hidden="true" className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3565a0]/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3565a0]/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3565a0]/10" />
                    </div>
                    <span className="truncate text-[10px] tracking-wide text-[#3565a0]/70">
                      {new URL(currentProject.liveUrl).hostname}
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <iframe
                      src={currentProject.liveUrl}
                      title={`${currentProject.title} live preview`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
                    />
                  </div>
                </div>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 flex min-h-11 items-center justify-between gap-4 border-b border-white/25 pb-3 text-sm font-medium text-white/90 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Explore live site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

