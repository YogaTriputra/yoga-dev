"use client";

import SectionShell, { RevealCard } from "../SectionShell";

type LogoName =
    | "html" | "css" | "javascript" | "react" | "tailwind" | "vite"
    | "c" | "cplusplus" | "python" | "csharp" | "dart"
    | "git" | "github" | "vscode" | "figma" | "nextjs" | "flutter" | "backend";

type Technology = { name: string; logo: LogoName };

const paths: Partial<Record<LogoName, string>> = {
    html: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
    tailwind: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",
    vite: "M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z",
    c: "M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z",
    cplusplus: "M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z",
    python: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",
    dart: "M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z",
    git: "M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z",
    github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    nextjs: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
    flutter: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z",
};

const groups: { title: string; description: string; technologies: Technology[] }[] = [
    {
        title: "Frontend",
        description: "Turning ideas into responsive, interactive interfaces.",
        technologies: [
            { name: "HTML", logo: "html" }, { name: "CSS", logo: "css" },
            { name: "JavaScript", logo: "javascript" }, { name: "React", logo: "react" },
            { name: "Tailwind CSS", logo: "tailwind" }, { name: "Vite", logo: "vite" },
        ],
    },
    {
        title: "Programming",
        description: "Building a foundation in logic and problem-solving.",
        technologies: [
            { name: "C", logo: "c" }, { name: "C++", logo: "cplusplus" },
            { name: "Python", logo: "python" }, { name: "C#", logo: "csharp" },
            { name: "Dart", logo: "dart" },
        ],
    },
    {
        title: "Tools & Design",
        description: "The everyday toolkit behind my code and designs.",
        technologies: [
            { name: "Git", logo: "git" }, { name: "GitHub", logo: "github" },
            { name: "VS Code", logo: "vscode" }, { name: "Figma", logo: "figma" },
        ],
    },
    {
        title: "Currently Learning",
        description: "Exploring new ways to build for the web and beyond.",
        technologies: [
            { name: "Next.js", logo: "nextjs" }, { name: "Flutter", logo: "flutter" },
            { name: "Backend Development", logo: "backend" },
        ],
    },
];

function TechnologyLogo({ name }: { name: LogoName }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 shrink-0" aria-hidden="true" focusable="false">
            {paths[name] && <path d={paths[name]} />}
            {name === "react" && (
                <g fill="none" stroke="currentColor" strokeWidth="1.1">
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                </g>
            )}
            {(name === "css" || name === "javascript" || name === "csharp") && (
                <>
                    {name !== "csharp" && <rect width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />}
                    <text x="12" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize={name === "css" ? "9" : "12"} fontWeight="900">
                        {name === "css" ? "CSS" : name === "javascript" ? "JS" : "C#"}
                    </text>
                </>
            )}
            {name === "vscode" && <path d="m17 1 6 3v16l-6 3L6 13l-4 3-2-1V9l2-1 4 3L17 1Zm0 5-8 6 8 6V6ZM2 10v4l2-2-2-2Z" />}
            {name === "figma" && (
                <g fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 1H8a3.7 3.7 0 0 0 0 7.4h4V1Zm0 0h4a3.7 3.7 0 0 1 0 7.4h-4M12 8.4H8a3.7 3.7 0 0 0 0 7.4h4V8.4Zm0 7.4H8a3.7 3.7 0 1 0 4 3.7v-3.7Z" />
                    <circle cx="15.7" cy="12.1" r="3.7" />
                </g>
            )}
            {name === "backend" && (
                <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="7" rx="1" />
                    <rect x="2" y="14" width="20" height="7" rx="1" />
                    <path d="M6 6.5h.01M6 17.5h.01M15 6.5h3M15 17.5h3M12 10v4" />
                </g>
            )}
        </svg>
    );
}

function TechnologyBadge({ technology }: { technology: Technology }) {
    return (
        <li className="flex min-w-0 items-center gap-4 rounded-2xl border border-[#587fba]/20 bg-white/70 dark:bg-[#182b45] dark:border-[#38516f] px-5 py-4 text-[#3565a0] shadow-[0_4px_12px_rgba(53,101,160,0.05)] transition-[translate,background-color,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#587fba]/40 hover:bg-blue-50/80 hover:shadow-[0_8px_20px_rgba(53,101,160,0.12)] motion-reduce:translate-none motion-reduce:transform-none motion-reduce:transition-none">
            <TechnologyLogo name={technology.logo} />
            <span className="min-w-0 break-words text-[13px] sm:text-sm font-semibold leading-relaxed text-slate-700">{technology.name}</span>
        </li>
    );
}

export default function TechStackPage() {
    return (
        <SectionShell
            number="04"
            title="Tech Stack"
            subtitle="Technologies I Use"
            description="The languages, frameworks, and creative tools I use to bring ideas to life, alongside the technologies I am learning next."
        >
            <div className="grid grid-cols-1 items-start gap-8 pb-2 md:grid-cols-2 lg:gap-10">
                {groups.map((group, index) => (
                    <RevealCard key={group.title} index={index}>
                        <section aria-labelledby={`technology-group-${index}`} className="flex h-full flex-col">
                            <div className="mb-7 flex items-start justify-between gap-4 border-b border-[#587fba]/15 pb-6">
                                <div className="min-w-0 max-lg:break-words">
                                    <h2 id={`technology-group-${index}`} className="text-lg font-bold tracking-tight text-[#3565a0] sm:text-xl">{group.title}</h2>
                                    <p className="mt-3 max-w-sm text-[13px] sm:text-sm leading-relaxed text-slate-600">{group.description}</p>
                                </div>
                                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565a0] to-[#244975] font-mono text-xs font-semibold text-white shadow-md shadow-blue-900/20">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-4">
                                {group.technologies.map((technology) => (
                                    <TechnologyBadge key={technology.name} technology={technology} />
                                ))}
                            </ul>
                            {group.title === "Currently Learning" && (
                                <p className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#3565a0]">
                                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#3565a0]" />
                                    Always a work in progress
                                </p>
                            )}
                        </section>
                    </RevealCard>
                ))}
            </div>
        </SectionShell>
    );
}
