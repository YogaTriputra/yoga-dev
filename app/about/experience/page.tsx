"use client";

import{ ArrowRight, ArrowLeft } from "lucide-react"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function WhatiDo() {
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col-2">

        <Link
        href="/about"
        className="absolute left-6 top-6 z-30 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#3565a0] shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:shadow-md sm:left-10"
    >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Overview</span>
        </Link>

            {/* Slider Controls (Bottom Floating Dots) */}
    <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/70 bg-white/75 px-4 py-2 shadow-[0_8px_24px_rgba(53,101,160,0.16)] backdrop-blur-md">
        <button
            type="button"
            onClick={() => router.push("/about/journey")}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3565a0] text-white transition duration-200 hover:scale-105 hover:bg-[#28558f]"
        >
            <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
            <button type="button" onClick={() => router.push("/about/introduction")} className="h-2 w-2 rounded-full bg-[#3565a0]/25 transition-all duration-300 hover:bg-[#3565a0]/60" aria-label="Slide 1 (Introduction)" />
            <button type="button" className="h-2 w-6 rounded-full bg-[#3565a0] transition-all duration-300" aria-label="Slide 2 (Journey)" />
            <button type="button" className="h-2 w-2 rounded-full bg-[#3565a0]/25 transition-all duration-300 hover:bg-[#3565a0]/60" aria-label="Slide 3" />
            <button type="button" className="h-2 w-2 rounded-full bg-[#3565a0]/25 transition-all duration-300 hover:bg-[#3565a0]/60" aria-label="Slide 4" />
            <button type="button" className="h-2 w-2 rounded-full bg-[#3565a0]/25 transition-all duration-300 hover:bg-[#3565a0]/60" aria-label="Slide 5" />
        </div>

        <button
            type="button"
            onClick={() => router.push("/about/ ")}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3565a0] text-white transition duration-200 hover:scale-105 hover:bg-[#28558f]"
        >
            <ArrowRight className="h-4 w-4" />
        </button>
    </div>
        </main>
    )
} 