"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CareerTimeline from "./CareerTimeline";
import EducationTimeline from "./EducationTimeline";

export default function JourneyPage() {
const router = useRouter();
const [activeTab, setActiveTab] = useState<"education" | "career">("education");

return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#bac5db] px-4 pb-16 pt-16 text-slate-900 sm:pt-20 lg:pt-24">
      {/* back button */}
    <Link
        href="/about"
        className="absolute left-6 top-6 z-30 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#3565a0] shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:shadow-md sm:left-10"
    >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Overview</span>
    </Link>

    <div className="w-full max-w-[1700px] px-2">
        {/* header section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-6">
            <div className="flex items-center gap-4">
            <div className="relative h-18 w-18 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-[0_10px_30px_rgba(53,101,160,0.25)] sm:h-26 sm:w-26">
                <Image
                src="/reze.jpg"
                alt="Yoga Setia Triputra"
                fill
                className="object-cover"
                />
            </div>

            <div>
                <h1 className="mb-2 text-xl font-bold text-[#3565a0] sm:text-xl">
                Yoga Setia Triputra
                </h1>
                <div className="flex items-center gap-1">
                <span className="h-0.5 w-30 rounded-full bg-[#3565a0]" />
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-600">
                Informatics Student
                </p>
                <p className="text-xs font-semibold text-slate-600">
                Universitas Amikom Yogyakarta
                </p>
            </div>
            </div>

            {/* Toggle Education / Career */}
            <div className="flex w-fit items-center gap-1 rounded-full bg-[#dce2ed] p-1.5 shadow-sm">
            <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`rounded-full px-6 py-1.5 text-xs font-extrabold tracking-wider transition-all ${
                activeTab === "education"
                    ? "bg-[#3565a0] text-white shadow-md"
                    : "bg-white text-[#3565a0] hover:bg-white/80"
                }`}
            >
                EDUCATION
            </button>

            <button
                type="button"
                onClick={() => setActiveTab("career")}
                className={`rounded-full px-6 py-1.5 text-xs font-extrabold tracking-wider transition-all ${
                activeTab === "career"
                    ? "bg-[#3565a0] text-white shadow-md"
                    : "bg-white text-[#3565a0] hover:bg-white/80"
                }`}
            >
                CAREER
            </button>
            </div>
        </div>

        {/* section kanan */}
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <p className="text-xl font-semibold text-slate-800">about Me</p>
                <span className="h-0.5 w-16 bg-slate-800" />
            </div>
            <h2 className="mt-2 text-6xl font-black uppercase tracking-tight text-slate-800 text-left">
                MY <span className="text-[#3565a0]">JOURNEY</span> |
            </h2>
            <p className="text-xl text-slate-800 max-w-[400px]">
                A path of learning, exploring, and becoming 
                a better version of myself
            </p>
        </div>
        </div>

        {/* Konten berdasarkan Tab */}
            {activeTab === "education" ? (
                <EducationTimeline />
            ) : (
                <CareerTimeline />
            )}
    </div>

    <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/70 bg-white/75 px-4 py-2 shadow-[0_8px_24px_rgba(53,101,160,0.16)] backdrop-blur-md">
        <button
            type="button"
            onClick={() => router.push("/about/introduction")}
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
            disabled
            className="flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-full text-[#3565a0] opacity-25"
        >
            <ArrowRight className="h-4 w-4" />
        </button>
    </div>
    </main>
);
}
