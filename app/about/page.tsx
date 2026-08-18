import { Coffee, Sprout, Handshake, Star, ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen bg-blue-50">
            <section id="about" className="relative isolate mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-100 overflow-hidden px-8 pb-10 pt-24 lg:grid-cols-2">
                <div className="pointer-events-none absolute left-[46%] top-[44%] -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3565a0]/10" />
                <div className="pointer-events-none absolute left-[46%] top-[44%] -z-10 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3565a0]/15" />
                <div className="pointer-events-none absolute left-[43%] top-[23%] -z-10 h-3 w-3 rounded-full bg-[#3565a0]/30 shadow-[0_0_24px_rgba(53,101,160,0.55)]" />
                <div className="pointer-events-none absolute bottom-20 left-[48%] -z-10 h-20 w-px rotate-[28deg] bg-gradient-to-b from-transparent via-[#3565a0]/25 to-transparent" />
                <div className="pointer-events-none absolute right-10 top-32 -z-10 grid grid-cols-5 gap-3 opacity-35">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#3565a0]/45" />
                    ))}
                </div>

            <div className="relative z-10 mx-auto w-full max-w-[540px]">
                <h1 className="w-fit border-2 border-[#3565a0] px-4 py-2 rounded-2xl text-lg font-semibold text-[#3565a0] bg-white/60 backdrop-blur-sm">
                    About Me
                </h1>

                <h1 className="mt-4 text-5xl font-extrabold tracking-tight lg:text-6xl">
                    Get to Know <br/> More <span className="text-[#3565a0]">About me</span>
                </h1>

                <div className="flex items-center gap-2.5 mt-5">
                    <span className="rounded-full bg-[#3565a0] h-2 w-16"/>
                    <span className="rounded-full bg-[#3565a0] h-2 w-4"/>
                    <span className="rounded-full bg-[#3565a0] h-2 w-2.5"/>
                </div>

                <div className="mt-6 max-w-[480px] space-y-4 text-lg leading-relaxed lg:text-xl">
                    <p className="text-slate-700"> I&apos;m an informatics student who loves turning ideas into real, interactive, and user-friendly web experiences.</p>

                    <p className="text-slate-700"> I enjoy building clean and responsive interfaces, exploring new technologies, and solving problems through code.</p>
                </div>

                <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border border-blue-200/60 shadow-sm">
                            <Coffee className="h-8 w-8"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-lg font-bold lg:text-xl text-slate-700">
                                Coffee &amp; Code
                            </h2>

                            <p className="mt-1 text-sm lg:text-base text-slate-600 leading-snug">
                                Most of my ideas start with curiosity, a cup of coffee, and the excitement of building something new.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border border-blue-200/60 shadow-sm">
                            <Sprout className="h-8 w-8"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-lg font-bold lg:text-xl text-slate-700">
                                Keep Growing
                            </h2>

                            <p className="mt-1 text-sm lg:text-base text-slate-600 leading-snug">
                                Every project is an opportunity to learn, improve, and become a better developer than yesterday.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border border-blue-200/60 shadow-sm">
                            <Handshake className="h-8 w-8"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-lg font-bold lg:text-xl text-slate-700">
                                Open to Collaboration
                            </h2>

                            <p className="mt-1 text-sm lg:text-base text-slate-600 leading-snug">
                                I enjoy working with others, exchanging ideas, and creating meaningful digital experiences together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative mx-auto self-center">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border-[10px] border-[#3565a0]/10" />
                <div className="pointer-events-none absolute -bottom-7 -left-7 h-28 w-28 border-b-4 border-l-4 border-[#3565a0]/35" />
                <div className="pointer-events-none absolute -left-12 top-1/3 flex flex-col gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#3565a0]/60" />
                    <span className="h-2 w-2 rounded-full bg-[#3565a0]/40" />
                    <span className="h-2 w-2 rounded-full bg-[#3565a0]/20" />
                </div>

                <div className="relative h-[480px] w-[380px] overflow-hidden rounded-3xl border-4 border-white shadow-[0_20px_45px_-10px_rgba(53,101,160,0.22)] ring-1 ring-blue-900/10 transition-all duration-300 group hover:shadow-2xl sm:h-[540px] sm:w-[430px] lg:h-[580px] lg:w-[460px]">
                    <Image
                    src="/reje.jpg"
                    alt="Foto Yoga about"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    />
                </div>
            </div>
            </section>

            <section className="relative isolate grid min-h-screen grid-cols-2 items-center overflow-hidden bg-[#3565a0] px-10">
                <div className="pointer-events-none absolute -left-44 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full border-[34px] border-white/5" />
                <div className="pointer-events-none absolute -right-36 -top-32 -z-10 h-[420px] w-[420px] rounded-full border border-white/15" />
                <div className="pointer-events-none absolute right-[36%] top-0 -z-10 h-full w-32 -skew-x-12 bg-white/[0.035]" />
                <div className="pointer-events-none absolute right-[31%] top-0 -z-10 h-full w-5 -skew-x-12 bg-white/[0.06]" />
                <p className="pointer-events-none absolute -bottom-12 left-8 -z-10 text-[180px] font-black uppercase leading-none tracking-tighter text-white/[0.035]">
                    About
                </p>
                <div className="pointer-events-none absolute bottom-16 right-16 -z-10 grid grid-cols-6 gap-3 opacity-50">
                    {Array.from({ length: 30 }).map((_, index) => (
                        <span key={index} className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    ))}
                </div>
                <div className="pointer-events-none absolute left-[48%] top-28 -z-10 flex items-center gap-2 text-sm font-bold tracking-[0.3em] text-white/15">
                    <span className="h-px w-16 bg-white/20" />
                    02
                </div>

                <div className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-white">
                        Discover my Portofolio
                    </h1>

                    <h1 className="mt-5 text-6xl font-extrabold text-white">
                        Discover More <br/> <span className="inline-block rounded-2xl px-3 py-2 bg-white text-[#3565a0] mt-3">About Me</span>
                    </h1>

                    <p className="mt-6 max-w-[460px] text-lg leading-relaxed text-white">
                        Each section opens a new story about my journey, skills, and passions.
                    </p>
                </div>

                {/* bagian kanan */}
                <div className="mr-auto w-full max-w-xl space-y-12">
                    <div className="flex items-center gap-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            1
                        </span>

                        <Link href="/about/introduction" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-4 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-5 w-5"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    Introduction
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    Get to Know Better
                                </span>
                            </span>

                            <ArrowRight className="h-6 w-6 shrink-0"/>
                        </Link>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            2
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-4 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-5 w-5"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    My Journew
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    My path and experience
                                </span>
                            </span>

                            <ArrowRight className="h-6 w-6 shrink-0"/>
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            3
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-4 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-5 w-5"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    What I Do
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    What I Love to Build
                                </span>
                            </span>

                            <ArrowRight className="h-6 w-6 shrink-0"/>
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            4
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-4 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-5 w-5"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    Tech Stack
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    Technologies I Use
                                </span>
                            </span>

                            <ArrowRight className="h-6 w-6 shrink-0"/>
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            5
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-4 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-5 w-5"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    Beyond Coding
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    Passions And Interest
                                </span>
                            </span>

                            <ArrowRight className="h-6 w-6 shrink-0"/>
                        </a>
                    </div>
                </div>

                
            </section>
        </main>
    )
}
