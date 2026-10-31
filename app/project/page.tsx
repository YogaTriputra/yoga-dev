"use client";

import { Sparkles, ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectItem {
  number: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
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
    category: "Creative Interface",
    description:
      "Deskripsi singkat mengenai project 03. Kembangkan konten ini sesuai kebutuhan desain Anda.",
    tags: ["UI/UX Design", "Motion", "TypeScript"],
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
  const [activeNumber, setActiveNumber] = useState("01");
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
      <section className="flex min-h-screen items-center bg-blue-50 px-8 text-[#3565a0] lg:px-16">
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
            <h1 className="text-6xl font-black uppercase leading-none tracking-tight lg:text-8xl">
              Project
            </h1>

            <span className="hidden h-20 w-px bg-[#3565a0] sm:block" />

            <p className="text-xl font-bold leading-tight text-slate-700 lg:text-2xl">
              Things <br /> I&apos;ve Built
            </p>

            <div className="mt-5 h-0.5 w-16 bg-slate-700" />

            <p className="mt-6 max-w-md text-base leading-7 text-slate-700 lg:text-lg">
              A collection of projects I&apos;ve built, designed, and explored
              throughout my journey as an Informatics student.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: CIRCULAR CAROUSEL & PROJECT DETAILS */}
      <section className="relative flex min-h-screen w-full items-center bg-[#3565a0] px-8 py-20 text-white lg:px-16 overflow-hidden">
        {/* busur lingkaran */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 flex items-center justify-center rounded-full"
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
              <div
                key={item.number}
                onClick={() => selectProject(index)}
                className="pointer-events-auto absolute flex cursor-pointer items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
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
              </div>
            );
          })}
        </div>

        {/* ⚪ KONTEN DETAIL PROJECT DENGAN ANIMASI TEKS */}
        <div className="relative z-10 ml-44 sm:ml-56 md:ml-64 lg:ml-72 max-w-xl min-h-[260px] flex flex-col justify-center">
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
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
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
                className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/80 max-w-lg"
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
          <div className="mt-8 flex items-center gap-3">
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
      </section>
    </main>
  );
}

