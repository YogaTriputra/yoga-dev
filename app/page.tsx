import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#dce3ee] font-sans antialiased text-slate-800">
      {/* Top Navigation Bar Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
        {/* Logo Top Left */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded border-2 border-white/50 bg-white/10 text-white font-extrabold text-xs shadow-sm">
            Y.
          </div>
          <span className="tracking-wider uppercase font-extrabold text-sm text-white">
            YOGA
          </span>
        </div>

        {/* Center Navigation Pill */}
        <nav className="flex items-center rounded-full bg-[#d5deec]/90 backdrop-blur-md p-1 border border-slate-300/40 shadow-sm text-xs md:text-sm">
          <a
            href="#home"
            className="rounded-full bg-[#3565a0] px-4 py-1.5 font-bold text-white shadow-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-1.5 font-semibold text-[#486fa3] hover:text-[#3565a0] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 py-1.5 font-semibold text-[#486fa3] hover:text-[#3565a0] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 font-semibold text-[#486fa3] hover:text-[#3565a0] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Theme Toggle Top Right */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <div className="w-12 h-6 rounded-full bg-[#3565a0] p-0.5 flex items-center justify-end cursor-pointer shadow-inner">
            <div className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center text-[9px]">
              🌙
            </div>
          </div>
          <svg className="w-4 h-4 text-[#3565a0]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </div>
      </header>

      {/* Main Grid Layout (2 Columns) */}
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN: Dark Blue Panel */}
        <div className="flex flex-col justify-center bg-[#3f6cb4] px-8 py-24 md:px-16 text-white relative">
          <div className="mx-auto w-full max-w-[500px]">
            {/* Avatar Profile */}
            <div className="relative mx-auto mb-8 h-[220px] w-[220px] flex justify-center">
              <div className="relative w-full h-full rounded-full border-4 border-[#7698dc] shadow-lg overflow-hidden">
                <Image
                  src="/reze.jpg"
                  alt="Foto Profile Yoga"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Available Badge */}
              <div className="absolute bottom-1 right-2 flex items-center gap-2 rounded-full border border-slate-700 bg-[#181818] px-3 py-1 text-xs text-white shadow-md">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium">Available</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xs font-bold uppercase tracking-widest text-[#a8beee] mb-1">
              FRONTEND DEVELOPER
            </p>

            {/* Title */}
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-[#a5b8f3]">Yoga</span>
              <br />
              Setia Triputra
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed max-w-md">
              I build modern, responsive, and user-friendly web experiences.
              Currently focusing on React, Tailwind CSS, and clean UI.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="border-2 border-slate-900 bg-[#f4f2ed] px-5 py-2.5 font-bold text-slate-900 rounded-lg shadow-[3px_3px_0_#181818] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#181818]"
              >
                View My Work ↗
              </a>
              <a
                href="#myCV"
                className="border-2 border-white/80 bg-transparent px-5 py-2.5 font-bold text-white rounded-lg transition hover:bg-white/10 flex items-center gap-2"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-5 text-white/80">
              <a
                href="https://github.com/YogaTriputra"
                aria-label="GitHub"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Globe"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/yoga-triputra-2a3345416/"
                aria-label="LinkedIn"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.75h4.46V21H2.75V9.75Zm7.25 0h4.28v1.54h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V21h-4.46v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44V21H10V9.75Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:scale-110 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Light Gray/Blue Panel (Matching Design) */}
        <div className="relative flex flex-col justify-center bg-[#dce3ee] px-8 py-24 md:px-16 overflow-hidden">
          <div className="mx-auto w-full max-w-[540px]">
            {/* Tagline */}
            <p className="text-xs font-bold uppercase tracking-wider text-[#3565a0] flex items-center gap-1.5">
              WELCOME TO MY PORTFOLIO
              <span className="inline-block text-sm">👏</span>
            </p>

            {/* Main Tagline Heading */}
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
              I turn ideas into{" "}
              <span className="relative inline-block text-[#3565a0] underline underline-offset-4 decoration-[#3565a0] decoration-4">
                digital solutions.
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-5 text-sm md:text-base leading-relaxed text-slate-600 font-normal">
              Passionate about solving problems through code and creating
              impactful digital experiences.
            </p>

            {/* 3 Feature Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Card 1: Clean Code */}
              <div className="rounded-xl border border-slate-900 bg-[#e5ebf5]/80 p-4 shadow-[4px_4px_0_#1e293b] hover:-translate-y-0.5 transition-transform">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#3565a0] text-xs font-bold text-white shadow-sm">
                  &lt;/&gt;
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Clean Code</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Writing clean, maintainable, and scalable code.
                </p>
              </div>

              {/* Card 2: UI/UX Focused */}
              <div className="rounded-xl border border-slate-900 bg-[#e5ebf5]/80 p-4 shadow-[4px_4px_0_#1e293b] hover:-translate-y-0.5 transition-transform">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#3565a0] text-white shadow-sm">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.59-.4-.4-.61-.96-.61-1.59 0-1.24 1.01-2.25 2.25-2.25H17c2.76 0 5-2.24 5-5 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4c-.83 0-1.5-.67-1.5-1.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">UI/UX Focused</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Designing with users in mind and attention to detail.
                </p>
              </div>

              {/* Card 3: Performance */}
              <div className="rounded-xl border border-slate-900 bg-[#e5ebf5]/80 p-4 shadow-[4px_4px_0_#1e293b] hover:-translate-y-0.5 transition-transform">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#3565a0] text-white shadow-sm">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.13 2.21a.75.75 0 00-1.06 0l-7.5 7.5a.75.75 0 000 1.06l3.5 3.5a.75.75 0 001.06 0l7.5-7.5a.75.75 0 000-1.06l-3.5-3.5z" />
                    <path d="M12 14l-4 4v3l3-1 1-2 2-1 3-3-5-3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Performance</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Building fast and optimized web applications.
                </p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-wider text-[#3565a0]">
                TECH STACK
              </p>

              <div className="mt-3 flex flex-wrap gap-2.5">
                {/* React */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-400 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
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

                {/* Tailwind CSS */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-400 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                  <svg className="h-4 w-4 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                  </svg>
                  Tailwind CSS
                </div>

                {/* JavaScript */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-400 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                  <div className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-[#f7df1e] text-[8px] font-black text-black leading-none">
                    JS
                  </div>
                  JavaScript
                </div>

                {/* Vite */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-400 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
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
                <div className="flex items-center gap-2 rounded-lg border border-slate-400 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                  <svg className="h-4 w-4 text-[#f05032]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.6 10.59L11.4 1.8a1.5 1.5 0 012.12 0l8.78 8.79a1.5 1.5 0 010 2.12l-8.79 8.78a1.5 1.5 0 01-2.12 0L2.6 12.7a1.5 1.5 0 010-2.11zm8.34 7.35a1 1 0 100-2 1 1 0 000 2zm0-4.5a1 1 0 00-1 1v2.5a1 1 0 002 0v-2.5a1 1 0 00-1-1zm3.5-2a1 1 0 100-2 1 1 0 000 2zm-3.5 0a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  Git
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="mt-10 flex gap-3 text-slate-700">
              <svg className="h-7 w-7 text-[#3565a0] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-xs md:text-sm leading-relaxed">
                <p className="font-medium text-slate-700">
                  Code is like humor. When you have to explain it, it&apos;s bad.
                </p>
                <p className="mt-1 font-semibold text-[#3565a0]">
                  - Cory House
                </p>
              </div>
            </div>
          </div>

          {/* Dot Matrix Decoration Pattern on Bottom Right */}
          <div className="absolute bottom-6 right-6 h-28 w-28 opacity-25 pointer-events-none bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:10px_10px]" />
        </div>
      </section>
    </main>
  );
}
