"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

const projects = [
    { number: "01", title: "Project 01" },
    { number: "02", title: "NutritionBot" },
    { number: "03", title: "NeoRain" },
    { number: "04", title: "TukangAja" }
];

export default function ProjectPage() {
    const [activeNumber, setActiveNumber] = useState("01");
    const radius = 260;
    const visibleAngles = [0, 52, 180, -52];
    const activeIndex = projects.findIndex(
        (project) => project.number === activeNumber,
    );

    const selectProject = (index: number) => {
        setActiveNumber(projects[index].number);
    };

    return (
        <main className="min-h-screen">
            <section className="flex min-h-screen items-center bg-[#3565a0] px-8 text-[#f0eee9] lg:px-16">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                        <Sparkles className="h-4 w-4" />
                        Selected Work
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-6">
                        <h1 className="text-6xl font-black uppercase leading-none tracking-tight lg:text-8xl">
                            Project
                        </h1>

                        <span className="hidden h-20 w-px bg-white/70 sm:block" />

                        <p className="text-xl font-bold leading-tight text-[#c3cae5] lg:text-2xl">
                            Things <br /> I&apos;ve Built
                        </p>

                        <div className="mt-5 h-0.5 w-16 bg-[#c3cae5]" />

                        <p className="mt-6 max-w-md text-base leading-7 text-white/80 lg:text-lg">
                            A collection of projects I&apos;ve built, designed, and explored
                            throughout my journey as an Informatics student.
                        </p>
                    </div>
                </div>
            </section>

            {/* page putih/project */}
            <section className="relative flex min-h-screen w-full items-center bg-[#f4f5f7] px-8 py-20 text-slate-800 lg:px-16">
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
                            stroke="rgba(30, 58, 138, 0.22)"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx={radius}
                            cy={radius}
                            r={radius - 9}
                            fill="none"
                            stroke="rgba(53, 101, 160, 0.34)"
                            strokeWidth="1.5"
                            strokeDasharray="7 13"
                            className="animate-orbit-line"
                        />
                        <circle
                            cx={radius}
                            cy={radius}
                            r={radius - 2}
                            fill="none"
                            stroke="#3565a0"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="80 1545"
                            className="origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                transform: `rotate(${activeIndex * 90 - 14}deg)`,
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
                                    className={`h-3 w-3 rounded-full border-2 border-white shadow-sm transition-all duration-300 ${isActive
                                            ? "scale-125 bg-blue-700 ring-4 ring-blue-700/20"
                                            : "bg-blue-600 group-hover:scale-110"
                                        }`}
                                />
                                <span
                                    className={`text-sm font-extrabold tracking-wider transition-colors duration-300 ${isActive
                                            ? "text-blue-900 scale-110"
                                            : "text-slate-500 group-hover:text-blue-700"
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

                {/* ⚪ 3. KONTEN DETAIL PROJECT (DI SISI KANAN BUSUR) */}
                <div className="ml-48 max-w-xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        Selected Project
                    </span>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
                        {projects.find((p) => p.number === activeNumber)?.title}
                    </h2>
                    <p className="mt-4 text-base text-slate-600">
                        Deskripsi singkat mengenai project {activeNumber}. Kembangkan konten ini sesuai kebutuhan desain Anda.
                    </p>

                </div>
            </section>
        </main>
    );
}
