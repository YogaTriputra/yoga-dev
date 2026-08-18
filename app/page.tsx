import Image from "next/image";
import DotField from "./components/DotField";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <section id="home" className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative isolate flex flex-col justify-center overflow-hidden bg-[#587fba] px-6 pt-28 pb-16 sm:px-12 lg:px-14 lg:py-20 text-white min-h-screen">
          <div className="pointer-events-none absolute inset-0 z-0">
            <DotField
              dotRadius={2}
              dotSpacing={14}
              cursorRadius={300}
              bulgeStrength={35}
              glowRadius={140}
              sparkle={false}
              waveAmplitude={0}
              gradientFrom="rgba(255, 255, 255, 0.65)"
              gradientTo="rgba(190, 220, 255, 0.4)"
              glowColor="rgba(220, 238, 255, 0)"
            />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[560px]">
            {/* Avatar Profile Picture */}
            <div className="relative mx-auto mb-6 sm:mb-8 h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[260px] md:w-[260px] flex justify-center">
              <Image
                src="/reze.jpg"
                alt="Foto Profile Yoga"
                fill
                className="rounded-full border-4 border-[#728fd0] ring-4 ring-white/20 shadow-2xl object-cover"
                priority
              />
              <div className="absolute -bottom-1 -right-1 sm:-right-2 flex items-center gap-2 rounded-full border-2 border-white bg-[#171717]/90 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 text-xs font-semibold text-white shadow-lg">
                <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-green-400 animate-pulse" />
                Active
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl font-semibold text-white/90 tracking-wide text-center sm:text-left">
              Frontend Developer
            </p>

            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight text-center sm:text-left">
              Hi! I&apos;m{" "}
              <span className="text-[#c3cae5] drop-shadow-sm">Yoga</span>
              <br />
              Setia Triputra
            </h1>

            <p className="mt-4 sm:mt-5 max-w-[560px] text-sm sm:text-base md:text-lg leading-relaxed text-white/90 text-center sm:text-left">
              Informatics student focused on frontend development.
              I create responsive, accessible, and visually appealing
              web applications with React and Tailwind CSS.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 gap-3 sm:gap-4 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start">
              <a
                href="#project"
                className="border-2 border-white bg-[#f0eee9] px-4 py-2.5 sm:py-3 text-center font-bold text-slate-900 shadow-[4px_5px_0_#111827] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-blue-400 hover:text-white text-sm sm:text-base"
              >
                View my Works ↗
              </a>
              <a
                href="#myCV"
                className="border-2 border-white bg-transparent px-4 py-2.5 sm:py-3 text-center font-bold text-white shadow-[4px_5px_0_#ffffff] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-white hover:text-slate-900 text-sm sm:text-base"
              >
                Download CV ↗
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 sm:mt-12 flex items-center justify-center sm:justify-start gap-5 sm:gap-6 text-white/80">
              <a
                href="https://github.com/YogaTriputra"
                aria-label="GitHub"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Discord"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M19.54 5.32A16.7 16.7 0 0 0 15.42 4l-.5 1.02a15.3 15.3 0 0 0-5.84 0L8.58 4a16.7 16.7 0 0 0-4.12 1.32C1.85 9.3 1.15 13.2 1.5 17.05a16.6 16.6 0 0 0 5.08 2.58l1.22-1.67a10.5 10.5 0 0 1-1.91-.92l.47-.36c3.68 1.7 7.67 1.7 11.3 0l.48.36c-.6.36-1.24.67-1.91.92l1.22 1.67a16.6 16.6 0 0 0 5.08-2.58c.4-4.47-.68-8.33-3-11.73ZM8.52 14.82c-1.1 0-2-.98-2-2.2s.88-2.2 2-2.2c1.12 0 2.02.98 2 2.2 0 1.22-.88 2.2-2 2.2Zm6.96 0c-1.1 0-2-.98-2-2.2s.88-2.2 2-2.2c1.12 0 2.02.98 2 2.2 0 1.22-.88 2.2-2 2.2Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/yoga-triputra-2a3345416/"
                aria-label="LinkedIn"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.75h4.46V21H2.75V9.75Zm7.25 0h4.28v1.54h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V21h-4.46v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44V21H10V9.75Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-screen items-center bg-gradient-to-br from-white via-blue-50/40 to-slate-100/60 px-6 py-16 sm:px-12 md:px-16 lg:pt-28 lg:pb-16">
          <div className="w-full max-w-2xl mx-auto">
            {/* Tagline */}
            <p className="text-xs font-bold uppercase tracking-wider text-[#3565a0] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3565a0]" />
              WELCOME TO MY PORTFOLIO
            </p>

            {/* Heading */}
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              I turn ideas into{" "}
              <span className="relative inline-block text-[#3565a0] underline underline-offset-4 decoration-[#3565a0] decoration-4">
                digital solutions.
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-slate-700">
              Passionate about solving problems through code and creating
              impactful digital experiences.
            </p>

            {/* 3 Feature Cards */}
            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-3">
              {/* Card 1: Clean Code */}
              <div className="rounded-xl border border-slate-800 bg-white/90 p-4 sm:p-5 shadow-[4px_4px_0_#1e293b] hover:-translate-y-1 hover:shadow-[6px_6px_0_#1e293b] transition-all">
                <div className="mb-3 sm:mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#3565a0] text-xs font-bold text-white shadow-sm">
                  &lt;/&gt;
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Clean Code</h3>
                <p className="mt-1.5 sm:mt-2 text-xs leading-5 text-slate-600">
                  Writing clean, maintainable, and scalable code.
                </p>
              </div>

              {/* Card 2: UI/UX Focused */}
              <div className="rounded-xl border border-slate-800 bg-white/90 p-4 sm:p-5 shadow-[4px_4px_0_#1e293b] hover:-translate-y-1 hover:shadow-[6px_6px_0_#1e293b] transition-all">
                <div className="mb-3 sm:mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#3565a0] text-white shadow-sm">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.59-.4-.4-.61-.96-.61-1.59 0-1.24 1.01-2.25 2.25-2.25H17c2.76 0 5-2.24 5-5 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4c-.83 0-1.5-.67-1.5-1.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S17.5 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">UI/UX Focused</h3>
                <p className="mt-1.5 sm:mt-2 text-xs leading-5 text-slate-600">
                  Designing with users in mind and attention to detail.
                </p>
              </div>

              {/* Card 3: Performance */}
              <div className="rounded-xl border border-slate-800 bg-white/90 p-4 sm:p-5 shadow-[4px_4px_0_#1e293b] hover:-translate-y-1 hover:shadow-[6px_6px_0_#1e293b] transition-all">
                <div className="mb-3 sm:mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#3565a0] text-white shadow-sm">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.13 2.21a.75.75 0 00-1.06 0l-7.5 7.5a.75.75 0 000 1.06l3.5 3.5a.75.75 0 001.06 0l7.5-7.5a.75.75 0 000-1.06l-3.5-3.5z" />
                    <path d="M12 14l-4 4v3l3-1 1-2 2-1 3-3-5-3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Performance</h3>
                <p className="mt-1.5 sm:mt-2 text-xs leading-5 text-slate-600">
                  Building fast and optimized web applications.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <p className="mt-8 sm:mt-10 text-xs font-bold uppercase tracking-wider text-[#3565a0]">
              Tech Stack
            </p>

            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2.5 sm:gap-3">
              {/* React */}
              <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default">
                <svg className="h-4 w-4 text-[#00d8ff]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
                  <g stroke="#00d8ff">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                React
              </div>

              {/* Next.js */}
              <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default">
                <svg className="h-4 w-4 text-black" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
                    <circle cx="90" cy="90" r="90" fill="black" />
                  </mask>
                  <g mask="url(#mask0_next)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path d="M149.508 157.52L69.142 54H54V126H66.864V70.4741L137.332 161.442C141.677 160.334 145.751 159.014 149.508 157.52Z" fill="url(#paint0_linear_next)" />
                    <rect x="115" y="54" width="13" height="72" fill="url(#paint1_linear_next)" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_next" x1="121.5" y1="54" x2="121.5" y2="126" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                Next.js
              </div>

              {/* Tailwind CSS */}
              <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default">
                <svg className="h-4 w-4 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                Tailwind CSS
              </div>

              {/* JavaScript */}
              <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default">
                <div className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-[#f7df1e] text-[8px] font-black text-black leading-none">
                  JS
                </div>
                JavaScript
              </div>

              {/* Vite */}
              <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22.25 4.67L12.55 21.3a.75.75 0 01-1.3 0L1.55 4.67a.75.75 0 01.76-1.12l19.18 0a.75.75 0 01.76 1.12z" fill="url(#vite-bg-pill)" />
                  <defs>
                    <linearGradient id="vite-bg-pill" x1="1" y1="0" x2="23" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#41D1FF" />
                      <stop offset="1" stopColor="#BD34FE" />
                    </linearGradient>
                  </defs>
                </svg>
                Vite
              </div>

              {/* Git */}
              <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default">
                <svg className="h-4 w-4 text-[#f05032]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.6 10.59L11.4 1.8a1.5 1.5 0 012.12 0l8.78 8.79a1.5 1.5 0 010 2.12l-8.79 8.78a1.5 1.5 0 01-2.12 0L2.6 12.7a1.5 1.5 0 010-2.11zm8.34 7.35a1 1 0 100-2 1 1 0 000 2zm0-4.5a1 1 0 00-1 1v2.5a1 1 0 002 0v-2.5a1 1 0 00-1-1zm3.5-2a1 1 0 100-2 1 1 0 000 2zm-3.5 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                Git
              </div>
            </div>

            {/* Quote Block */}
            <div className="mt-8 sm:mt-12 flex gap-3 sm:gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-4 sm:p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
              <svg className="h-6 sm:h-7 w-6 sm:w-7 text-[#3565a0] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-xs sm:text-sm leading-relaxed">
                <p className="font-medium text-slate-700 italic">
                  &ldquo;Code is like humor. When you have to explain it, it&apos;s bad.&rdquo;
                </p>
                <p className="mt-1 font-semibold text-[#3565a0]">
                  - Cory House
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
