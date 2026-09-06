import {
    ArrowRight,
    ExternalLink,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const project = [
    {
            number : "01",
            title : "TukangAja",
            category : "Marketplace",
            description : "Marketplace platform that connects customers with local service providers.",
            image : "",
            href : "#",
            featured : true,
    },

    {
            number : "02",
            title : "Locan Coffee",
            category : "Landing Page",
            description : "Modern landing page for a local coffee shop.",
            image : "",
            href : "#",
            featured : true,
    },

    {
            number : "03",
            title : "Hydroponic IoT System",
            category : "IoT Project",
            description : "Monitoring system for hydroponic plants.",
            image : "",
            href : "#",
            featured : true,
    },

]

export default function ProjectPage() {
    return (
        <main className= "min-h-screen">
            <section className="flex min-h-screen items-center bg-[#3565a0] px-8 text-[#f0eee9] lg:px-16">
                <div className= "mx-auto w-full  max-w-7xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                        <Sparkles className = "h-4 w-4"/>
                            Selected Work
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-6">
                        <h1 className="text-6xl font-black uppercase leading-none tracking-tight lg:text-8xl">
                            Project
                        </h1>

                        <span className="hidden h-20 w-px bg-white/70 sm:block"/>

                        <p className="text-xl font-bold leading-tight text-[#c3cae5] lg:text-2xl">
                            Things <br/> I&apos;ve Built
                        </p>

                        <div className="mt-5 h-0.5 w-16 bg-[#c3cae5]"/>

                        <p className="mt-6 max-w-md text-base leading-7 text-white/80 lg:text-lg">
                            A collection of projects I&apos;ve built, designed, and explored
                            throughout my journey as an Informatics student.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
