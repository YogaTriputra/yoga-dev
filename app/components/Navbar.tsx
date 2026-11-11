"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, UserRound, PanelsTopLeft, Mail } from "lucide-react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";

const menu = [
  { name: "Home", href: "/", icon: House },
  { name: "About", href: "/about", icon: UserRound },
  { name: "Project", href: "/project", icon: PanelsTopLeft },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 320, damping: 30, mass: 0.8 };

  if (
    [
      "/about/introduction",
      "/about/journey",
      "/about/experience",
      "/about/tech-stack",
      "/about/beyond-coding",
    ].includes(pathname)
  ) {
    return null;
  }

  return (
    <LayoutGroup id="navigation-dock">
      <nav
        aria-label="Main navigation"
        className="site-dock fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex w-[360px] max-w-[92vw] -translate-x-1/2 items-end justify-between gap-2 rounded-[1.75rem] border border-white/60 bg-[#e7edf6]/80 px-3 pb-1.5 pt-2 shadow-[0_12px_40px_-10px_rgba(25,50,85,0.35),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl sm:w-[420px] sm:px-7"
      >
        {menu.map(({ name, href, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === href : pathname.startsWith(href);

          return (
            <Link
              key={name}
              href={href}
              aria-label={name}
              aria-current={isActive ? "page" : undefined}
              className="group relative flex w-14 shrink-0 flex-col items-center gap-1.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#3565a0] focus-visible:ring-offset-4 sm:w-16"
            >
              <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 translate-y-1 rounded-lg border border-white/60 bg-[#edf2fa]/95 px-3 py-1.5 text-xs font-semibold text-[#3565a0] opacity-0 shadow-md transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
                {name}
              </span>
              <motion.span
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.08 }}
                whileTap={reduceMotion ? undefined : { y: -2, scale: 0.94 }}
                transition={spring}
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/55 shadow-sm"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tile"
                    transition={spring}
                    className="absolute -inset-px rounded-2xl border border-[#507eb7] bg-gradient-to-br from-[#527fb8] to-[#2c568c] shadow-[0_5px_12px_-3px_rgba(35,75,125,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]"
                  />
                )}
                <Icon
                  className={`relative z-10 h-6 w-6 transition-colors duration-300 motion-reduce:transition-none ${isActive ? "text-white" : "text-[#3565a0]"}`}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </motion.span>
              <span aria-hidden="true" className="relative h-1 w-1">
                {isActive && (
                  <motion.span
                    layoutId="active-dot"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-[#3565a0]"
                  />
                )}
              </span>
            </Link>
          );
        })}
      </nav>
    </LayoutGroup>
  );
}
