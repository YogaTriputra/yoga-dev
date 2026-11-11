"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const pages = [
  { path: "/", number: "01", title: "Home", label: "Welcome to my portfolio" },
  { path: "/about", number: "02", title: "About Me", label: "Behind the code" },
  { path: "/project", number: "03", title: "Selected Work", label: "Ideas turned into experiences" },
  { path: "/contact", number: "04", title: "Let's Connect", label: "Start a conversation" },
  { path: "/about/introduction", number: "01", title: "Introduction", label: "About / Chapter one" },
  { path: "/about/journey", number: "02", title: "My Journey", label: "About / Chapter two" },
  { path: "/about/experience", number: "03", title: "What I Do", label: "About / Chapter three" },
  { path: "/about/tech-stack", number: "04", title: "Tech Stack", label: "About / Chapter four" },
  { path: "/about/beyond-coding", number: "05", title: "Beyond Coding", label: "About / Chapter five" },
];

const ease = [0.76, 0, 0.24, 1] as const;

type TransitionStyle = "horizontal" | "vertical" | "diagonal" | "reverse" | "stripes";

const transitionStyles: Record<string, TransitionStyle> = {
  "/": "horizontal",
  "/about": "diagonal",
  "/project": "stripes",
  "/contact": "vertical",
  "/about/introduction": "reverse",
  "/about/journey": "reverse",
  "/about/experience": "reverse",
  "/about/tech-stack": "reverse",
  "/about/beyond-coding": "reverse",
};

function TransitionPanels({ style }: { style: TransitionStyle }) {
  if (style === "stripes") {
    return (
      <div className="absolute inset-0 flex">
        {["#172b46", "#244975", "#3565a0", "#527fb8", "#7ca6df"].map((color, index) => (
          <motion.div
            key={color}
            initial={{ y: "0%" }}
            animate={{ y: index % 2 === 0 ? "-105%" : "105%" }}
            transition={{ duration: 0.52, delay: 0.14 + index * 0.035, ease }}
            className="-mr-px h-full flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    );
  }

  if (style === "horizontal" || style === "vertical") {
    const vertical = style === "vertical";
    return (
      <>
        {[0, 1].map((index) => (
          <motion.div
            key={index}
            initial={{ x: 0, y: 0 }}
            animate={vertical
              ? { x: index === 0 ? "-105%" : "105%" }
              : { y: index === 0 ? "-105%" : "105%" }}
            transition={{ duration: 0.57, delay: 0.17 + index * 0.04, ease }}
            className={`absolute ${vertical
              ? `inset-y-0 w-[50.1%] ${index === 0 ? "left-0 bg-[#172b46]" : "right-0 bg-[#3565a0]"}`
              : `inset-x-0 h-[50.1%] ${index === 0 ? "top-0 bg-[#172b46]" : "bottom-0 bg-[#3565a0]"}`}`}
          />
        ))}
      </>
    );
  }

  const sign = style === "reverse" ? -1 : 1;
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: `${125 * sign}%` }}
        transition={{ duration: 0.56, delay: 0.24, ease }}
        className="absolute -inset-x-[15%] inset-y-0 -skew-x-12 bg-[#7ca6df]"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: `${-125 * sign}%` }}
        transition={{ duration: 0.55, delay: 0.17, ease }}
        className="absolute -inset-x-[15%] -top-[20%] h-[77%] -rotate-6 bg-[#172b46]"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: `${125 * sign}%` }}
        transition={{ duration: 0.55, delay: 0.17, ease }}
        className="absolute -inset-x-[15%] -bottom-[20%] h-[77%] -rotate-6 border-t-2 border-[#a8c4e8]/30 bg-[#3565a0]"
      />
    </>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const page = pages.find((item) => item.path === pathname);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {children}
      {!reduceMotion && page && (
        <motion.div
          key={pathname}
          aria-hidden="true"
          initial={{ visibility: "visible" }}
          animate={{ visibility: "hidden" }}
          transition={{ delay: 0.82, duration: 0 }}
          className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
        >
          <TransitionPanels style={transitionStyles[pathname] ?? "diagonal"} />
          <motion.div
            initial={{ x: "-12%", opacity: 0.2 }}
            animate={{ x: "120%", opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeIn" }}
            className="absolute inset-x-0 top-[38%] space-y-3 -rotate-6"
          >
            <div className="h-px w-2/3 bg-[#a8c4e8]/50" />
            <div className="ml-[15%] h-1 w-1/3 bg-white/60" />
            <div className="ml-[8%] h-px w-1/2 bg-[#a8c4e8]/50" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: [0, 1, 1, 0], x: [-18, 0, 0, 28] }}
            transition={{ duration: 0.48, times: [0, 0.15, 0.6, 1], ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center px-7"
          >
            <div className="flex w-full max-w-3xl items-center gap-5 sm:gap-9">
              <span className="text-6xl font-black italic leading-none tracking-tighter text-[#a8c4e8] sm:text-[120px]">{page.number}</span>
              <div className="min-w-0 border-l-2 border-white/40 pl-5 sm:pl-9">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c6daf2] sm:text-xs">{page.label}</p>
                <p className="text-[26px] font-black uppercase italic leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">{page.title}</p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-10 bg-white" />
                  <span className="h-1 w-3 bg-[#a8c4e8]" />
                  <span className="h-1 w-1 bg-[#a8c4e8]/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
