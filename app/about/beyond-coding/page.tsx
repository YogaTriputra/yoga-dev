import { Brush, Gamepad2, Palette, Telescope } from "lucide-react";
import SectionShell, { RevealCard } from "../SectionShell";

const interests = [
  { title: "Anime & Illustration", icon: Brush, description: "Enjoying anime and digital illustration, discovering expressive characters, visual storytelling, and new artistic perspectives." },
  { title: "Gaming", icon: Gamepad2, description: "Playing games and exploring interactive experiences, from imaginative worlds to the small details that make gameplay engaging." },
  { title: "Creative Design", icon: Palette, description: "Exploring visual design, interfaces, and creative ideas. Experimenting with layouts and finding inspiration in everyday visuals." },
  { title: "Technology Exploration", icon: Telescope, description: "Trying new technologies, software, and tools to satisfy my curiosity and discover different ways to create and solve problems." },
];

export default function BeyondCodingPage() {
  return (
    <SectionShell number="05" title="Beyond Coding" subtitle="Passions and Interests" description="A little of what inspires me away from the editor. These interests keep me curious, creative, and open to new perspectives.">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
        {interests.map(({ title, icon: Icon, description }, index) => (
          <RevealCard key={title} index={index}>
            <div className="flex flex-col items-start gap-6 lg:flex-row">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565a0] to-[#244975] text-white shadow-md shadow-blue-900/20"><Icon className="h-6 w-6" aria-hidden="true" /></span>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-[#3565a0] sm:text-xl">{title}</h2>
                <p className="mt-4 text-[13px] sm:text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </SectionShell>
  );
}
