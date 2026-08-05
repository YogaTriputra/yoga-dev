import { Coffee, Sprout, Handshake } from "lucide-react";
import image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-blue-50 grid grid-cols-2 px-10 py-32 items-start">
            <div className="relative z-10 mx-auto w-full max-w-[560px]">
                <h1 className="w-fit border-2 border-[#3565a0] p-3 rounded-2xl text-xl font-semibold text-[#3565a0]">
                    About Me
                </h1>

                <h1 className="font-extrabold mt-5 text-5xl md:text-6xl">
                    Get to Know <br/> More <span className="text-[#3565a0]">About me</span>
                </h1>

                <div className="flex items-center gap-3 mt-8">
                    <span className="rounded-full bg-[#3565a0] h-2 w-20 "/>
                    <span className="rounded-full bg-[#3565a0] h-2 w-5 "/>
                    <span className="rounded-full bg-[#3565a0] h-2 w-3 "/>
                </div>

                <div className="text text-lg mt-8 leading-6 max-w-[400px] space-y-4">
                    <p className="text-slate-700"> I&apos;m an informatics student who loves turning ideas into real, interactive, and user-friendly web experiences.</p>

                    <p className="text-slate-700"> I enjoy building clean and responsive interfaces, exploring new technologies, and solving problems through code..</p>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border-1">
                            <Coffee className="h-8 w-8"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-lg font-bold text-slate-700">
                                Coffee & Code
                            </h2>

                            <p className="mt-1 text-base text-slate-600">
                                Most of my ideas start with curiosity, a cup of coffee, and the excitement of building something new.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border-1">
                            <Sprout className="h-8 w-8"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-lg font-bold text-slate-700">
                                Keep Growing
                            </h2>

                            <p className="mt-1 text-base text-slate-600">
                                Every project is an opportunity to learn, improve, and become a better developer than yesterday.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#dce4f3] text-[#3565a0] border-1">
                            <Handshake className="h-8 w-8"/>
                        </div>

                        <div className="max-w-[400px]">
                            <h2 className="text-lg font-bold text-slate-700">
                                Open to Collaboration
                            </h2>

                            <p className="mt-1 text-base text-slate-600">
                                I enjoy working with others, exchanging ideas, and creating meaningful digital experiences together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
