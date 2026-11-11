import { Code2, PanelsTopLeft, AppWindow } from "lucide-react";
import SectionShell, { RevealCard } from "../SectionShell";

const services = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building modern, responsive, and interactive websites that feel great on every screen.",
    focus: "Responsive layouts · Clean code · Interaction",
  },
  {
    title: "UI/UX Design",
    icon: PanelsTopLeft,
    description: "Designing appealing, intuitive interfaces that make everyday interactions clear and comfortable.",
    focus: "Visual design · Prototyping · Usability",
  },
  {
    title: "Web Application Development",
    icon: AppWindow,
    description: "Developing web applications with functional features and thoughtful experiences that put users first.",
    focus: "Useful features · User flows · Web experiences",
  },
];

export default function WhatIDoPage() {
  return (
    <SectionShell number="03" title="What I Do" subtitle="What I Love to Build" description="Turning ideas into useful digital experiences, from the first interface sketch to the details that make a website feel right.">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
        {services.map(({ title, icon: Icon, description, focus }, index) => (
          <RevealCard key={title} index={index} className="flex h-full flex-col">
            <div className="mb-7 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565a0] to-[#244975] text-white shadow-md shadow-blue-900/20"><Icon className="h-6 w-6" aria-hidden="true" /></span>
              <span className="font-mono text-xs font-bold text-[#3565a0]/60">0{index + 1}</span>
            </div>
            <h2 className="text-lg font-bold leading-snug tracking-tight text-[#3565a0] dark:text-[#a8c4e8] sm:text-xl">{title}</h2>
            <p className="mb-8 mt-5 text-[13px] sm:text-sm leading-relaxed text-slate-600">{description}</p>
            <p className="mt-auto border-t border-[#587fba]/15 pt-6 text-xs font-semibold leading-6 text-[#3565a0]">{focus}</p>
          </RevealCard>
        ))}
      </div>
    </SectionShell>
  );
}
