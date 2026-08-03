import Image from "next/image";
export default function Home() {
  return( <main className="relative min-h-screen">
    <nav className="absolute left-1/2 top-6 z-10 flex -translate-x-1/2 rounded-full bg-[#dce2ed] p-2">
      <a href="#home" className="rounded-full  bg-[#3565a0] px-5 py-2 font-bold text-white">
        Home
      </a>
      <a href="#about" className="px-5 py-2 font-bold text-[#587fba]">
        About
      </a>
      <a href="#project" className="px-5 py-2 font-bold text-[#587fba]">
        Project
      </a>
      <a href="#contact" className="px-5 py-2 font-bold text-[#587fba]">
        Contact
      </a>
    </nav>

    <section className="grid min-h-screen grid-cols-2">
      <div className="flex flex-col justify-center bg-[#587fba] px-14 text-white">
        <div className="mx-auto w-full max-w-[560px]">

        <div className="relative mx-auto mb-8 h-[250px] w-[250px] flex justify-center">
          <Image
          src="/reze.jpg"
          alt="Foto Profile Yoga"
          fill
          className="rounded-full border-4  border-[#728fd0] object-cover"/>
          <div className="absolute -bottom-1 -right-3 flex items-center gap-2 rounded-none border-2 border-white bg-[#171717] px-3 py-2 text-xs text-white">
          <span className="h-3 w-3 rounded-full bg-green-400" />
          Activate
      </div>
        </div>
      <p className="text-xl text-white/80">
        Frontend Developer
      </p>
      <h1 className="mt-2 text-5xl font-extrabold uppercase md:text-6xl">
        Hi! I'm {" "} <span className="text-[#c3cae5]">
          Yoga
        </span><br/>
        Setia Triputra
      </h1>
      <p className="mt-5 max-w-[560px] text text-lg leading-6">
        Informatics student focused on frontend development.
        I create responsive, accessible, and visually appealing
        web applications with React and Tailwind CSS.
      </p>

      <div className="mt-7 gap-5 flex flex-wrap">
        <a href="#project" className="border-2 border-white bg-[#f0eee9] px-3 py-2 font-bold text-black shadow-[4px_5px_0_#111827] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-blue-400 hover:text-white">
          Viem my Works ↗
        </a>
        <a href="#myCV" className="border-2 border-white bg-[#f0eee9] px-3 py-2 font-bold text-black shadow-[4px_5px_0_#111827] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-blue-400 hover:text-white">
          Download CV ↗
        </a>
      </div>

      <div className="mt-15 flex items-center gap-6 text-white/80">
        <a
          href="https://github.com/YogaTriputra"
          aria-label="GitHub"
          className="transition hover:scale-110 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
          </svg>
        </a>

        <a
          href="#"
          aria-label="Discord"
          className="transition hover:scale-110 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M19.54 5.32A16.7 16.7 0 0 0 15.42 4l-.5 1.02a15.3 15.3 0 0 0-5.84 0L8.58 4a16.7 16.7 0 0 0-4.12 1.32C1.85 9.3 1.15 13.2 1.5 17.05a16.6 16.6 0 0 0 5.08 2.58l1.22-1.67a10.5 10.5 0 0 1-1.91-.92l.47-.36c3.68 1.7 7.67 1.7 11.3 0l.48.36c-.6.36-1.24.67-1.91.92l1.22 1.67a16.6 16.6 0 0 0 5.08-2.58c.4-4.47-.68-8.33-3-11.73ZM8.52 14.82c-1.1 0-2-.98-2-2.2s.88-2.2 2-2.2c1.12 0 2.02.98 2 2.2 0 1.22-.88 2.2-2 2.2Zm6.96 0c-1.1 0-2-.98-2-2.2s.88-2.2 2-2.2c1.12 0 2.02.98 2 2.2 0 1.22-.88 2.2-2 2.2Z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/yoga-triputra-2a3345416/"
          aria-label="LinkedIn"
          className="transition hover:scale-110 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.75h4.46V21H2.75V9.75Zm7.25 0h4.28v1.54h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V21h-4.46v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44V21H10V9.75Z" />
          </svg>
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="transition hover:scale-110 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </div>
    </div>
      <div className="[#bac5db]"/>
    </section>

  </main>
  );
}
