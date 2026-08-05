import Link from "next/link";

export default function Home() {
  return (
      <nav className="fixed left-1/2 top-6 z-10 flex -translate-x-1/2 rounded-full bg-[#dce2ed] p-2">
        <Link href="/" className="rounded-full bg-[#3565a0] px-5 py-2 font-bold text-white">
          Home
        </Link>
        <Link href="/About" className="px-5 py-2 font-bold text-[#587fba]">
          About
        </Link>
        <Link href="/Project" className="px-5 py-2 font-bold text-[#587fba]">
          Project
        </Link>
        <Link href="/Contact" className="px-5 py-2 font-bold text-[#587fba]">
          Contact
        </Link>
      </nav>
  )
}