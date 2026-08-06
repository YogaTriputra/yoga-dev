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
  return (
      <nav className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 rounded-full bg-[#dce2ed] p-2">
      {menu.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`rounded-full px-5 py-2 font-bold transition-colors ${
              isActive
                ? "bg-[#3565a0] text-white"
                : "text-[#587fba] hover:bg-white/50"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  )
}