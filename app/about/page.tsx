import { Coffee, Sprout, Handshake, Star, ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen bg-blue-50">
            <section id="about" className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2 px-8 pt-24 pb-10 items-center gap-100">
            <div className="relative z-10 mx-auto w-full max-w-[540px]">
                <h1 className="w-fit border-2 border-[#3565a0] px-4 py-2 rounded-2xl text-lg font-semibold text-[#3565a0] bg-white/60 backdrop-blur-sm">
                    About Me
                </h1>

                <h1 className="font-extrabold mt-4 text-4xl lg:text-5xl tracking-tight">
                    Get to Know <br/> More <span className="text-[#3565a0]">About me</span>
                </h1>

                <div className="flex items-center gap-2.5 mt-5">
                    <span className="rounded-full bg-[#3565a0] h-2 w-16"/>
                    <span className="rounded-full bg-[#3565a0] h-2 w-4"/>
                    <span className="rounded-full bg-[#3565a0] h-2 w-2.5"/>
                </div>

                <div className="text text-base lg:text-lg mt-5 leading-relaxed max-w-[440px] space-y-2.5">
                    <p className="text-slate-700"> I&apos;m an informatics student who loves turning ideas into real, interactive, and user-friendly web experiences.</p>

                    <p className="text-slate-700"> I enjoy building clean and responsive interfaces, exploring new technologies, and solving problems through code.</p>
                </div>

                <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border border-blue-200/60 shadow-sm">
                            <Coffee className="h-7 w-7"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-base lg:text-lg font-bold text-slate-700">
                                Coffee &amp; Code
                            </h2>

                            <p className="mt-0.5 text-xs lg:text-sm text-slate-600 leading-snug">
                                Most of my ideas start with curiosity, a cup of coffee, and the excitement of building something new.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border border-blue-200/60 shadow-sm">
                            <Sprout className="h-7 w-7"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-base lg:text-lg font-bold text-slate-700">
                                Keep Growing
                            </h2>

                            <p className="mt-0.5 text-xs lg:text-sm text-slate-600 leading-snug">
                                Every project is an opportunity to learn, improve, and become a better developer than yesterday.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border border-blue-200/60 shadow-sm">
                            <Handshake className="h-7 w-7"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-base lg:text-lg font-bold text-slate-700">
                                Open to Collaboration
                            </h2>

                            <p className="mt-0.5 text-xs lg:text-sm text-slate-600 leading-snug">
                                I enjoy working with others, exchanging ideas, and creating meaningful digital experiences together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mx-auto self-center">
                <div className="relative h-[460px] w-[360px] sm:h-[520px] sm:w-[410px] lg:h-[540px] lg:w-[430px] rounded-3xl border-4 border-white shadow-[0_20px_45px_-10px_rgba(53,101,160,0.22)] ring-1 ring-blue-900/10 overflow-hidden group transition-all duration-300 hover:shadow-2xl">
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

            <section className="grid min-h-screen bg-[#3565a0] px-10 grid-cols-2 items-center">
                <div className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col justify-center">
                    <h1 className="text-white text-xl font-semibold">
                        Discover my Portofolio
                    </h1>

                    <h1 className="text-white text-6xl font-extrabold mt-5">
                        Discover More <br/> <span className="inline-block rounded-2xl px-3 py-2 bg-white text-[#3565a0] mt-3">About Me</span>
                    </h1>

                    <p className="mt-5 text-white max-w-[400px]">
                        Each section opens a new story about my journey, skills, and passions.
                    </p>
                </div>

                {/* bagian kanan */}
                <div className="mr-auto w-full max-w-xl space-y-15">
                    <div className="flex items-center gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            1
                        </span>

                        <Link href="/about/introduction" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-3 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-4 w-4"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    Introduction
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    Get to Know Better
                                </span>
                            </span>

                            <ArrowRight className="h-5 w-5 shrink-0"/>
                        </Link>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            2
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-3 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-4 w-4"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    My Journew
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    My path and experience
                                </span>
                            </span>

                            <ArrowRight className="h-5 w-5 shrink-0"/>
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            3
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-3 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-4 w-4"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    What I Do
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    What I Love to Build
                                </span>
                            </span>

                            <ArrowRight className="h-5 w-5 shrink-0"/>
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            4
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-3 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-4 w-4"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    Tech Stack
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    Technologies I Use
                                </span>
                            </span>

                            <ArrowRight className="h-5 w-5 shrink-0"/>
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-[-4px_4px_0_#111827] bg-white text-lg font-bold text-black">
                            5
                        </span>

                        <a href="#experience" className="flex flex-1 items-center border-l-8 border-slate-900 bg-white px-3 py-4 text-slate-900 shadow-[0_5px_0_#111827] transition hover:translate-x-1 hover:bg-blue-900 hover:text-white">
                            <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center bg-[#3565a0] text-white">
                                <Star className="h-4 w-4"/>
                            </span>

                            <span className="flex-1">
                                <span className="block text-lg font-extrabold uppercase leading-none">
                                    Beyond Coding
                                </span>

                                <span className="mt-1 block text-xs leading-none">
                                    Passions And Interest
                                </span>
                            </span>

                            <ArrowRight className="h-5 w-5 shrink-0"/>
                        </a>
                    </div>
                </div>

                
            </section>
        </main>
    )
}
