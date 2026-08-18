"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  if (pathname == "/about/introduction" ) {
    return null
  }

  return (
      <nav className="fixed left-1/2 top-4 sm:top-6 z-50 flex -translate-x-1/2 rounded-full bg-[#dce2ed]/90 backdrop-blur-md p-1.5 sm:p-2 shadow-lg border border-white/40 max-w-[92vw]">
      {menu.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold transition-all ${
              isActive
                ? "bg-[#3565a0] text-white shadow-sm"
                : "text-[#3565a0] hover:bg-white/60"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  )
}