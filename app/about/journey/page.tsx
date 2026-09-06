"use client";

import {
    ArrowLeft
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function JourneyPage() {
    const [activeTab,setActiveTab] = useState < "education" | "career" > ("education");
    return (
        <main className="relative min-h-screen bg-[#bac5db] px-4 pt-16 sm:pt-20 lg:pt-24 pb-16 text-slate-900 flex flex-col items-center">
        {/* back button */}
        <div className="mb-8 w-full max-w-[1700px] z-20 px-2">
            <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-[#3565a0] shadow-sm backdrop-blur-md transition-all hover:bg-white hover:shadow-md"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to About Overview
            </Link>
        </div>
            <div className="w-full max-w-[1700px] px-2">
                {/* header section */}
                <div className = "flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className = "relative h-18 w-18 overflow-hidden rounded-full sm:h-26 sm:w-26 border-4 border-white bg-slate-200 shadow-[0_10px_30px_rgba(53,101,160,0.25)]">
                                <Image
                                    src="/reze.jpg"
                                    alt="Yoga Setia Triputra"
                                    fill className="object-cover"
                                />
                            </div>

                            <div>
                                <h1 className = "text-xl sm:text-xl font-bold text-[#3565a0] mb-2">
                                    Yoga Setia Triputra
                                </h1>
                                <div className="flex items-center gap-1">
                                    <span className="rounded-full bg-[#3565a0] h-0.5 w-30"/>
                                </div>
                                <p className = "text-xs font-semibold text-slate-600 mt-2">
                                    Informatics Student
                                </p>
                                <p className = "text-xs font-semibold text-slate-600">
                                    Universitas Amikom Yogyakarta
                                </p>
                            </div>
                        </div>

                    {/* Toggle Education / Career */}
                    <div className = "flex w-fit items-center gap-1 rounded-full bg-[#dce2ed] p-1.5 shadow-sm">
                        <button
                            type="button"
                            onClick={() => setActiveTab ("education")}
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
                            onClick={() => setActiveTab ("education")}
                            className={`rounded-full px-6 py-1.5 text-xs font-extrabold tracking-wider transition-all ${
                            activeTab === "education"
                            ? "bg-[#3565a0] text-white shadow-md"
                            : "bg-white text-[#3565a0] hover:bg-white/80"
                            }`}
                        >
                            CAREER
                        </button>
                    </div>

                    </div>
                </div>
            </div>
        </main>
    )
} 