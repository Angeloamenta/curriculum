import Image from "next/image";
import { Mail, Phone, MapPin, Github, Download } from "lucide-react";
import InteractiveImage from "../components/InteractiveImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1920px] mx-auto border-x border-black min-h-screen flex flex-col">

        {/* HEADER */}
        <header className="border-b border-black grid grid-cols-1 lg:grid-cols-12 bg-white lg:min-h-[85vh]">
          <div className="lg:col-span-8 p-8 md:p-16 flex flex-col justify-center border-b border-black lg:border-b-0 lg:border-r relative overflow-hidden">
            <div className="z-10">
              <h1 className="text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-bold tracking-tighter text-black leading-[0.9] mb-10">
                ANGELO<br />AMENTA
              </h1>
              <div className="flex flex-wrap gap-4">
                <span className="bg-black text-white px-5 py-2 text-lg font-normal uppercase tracking-widest">
                  Frontend Developer
                </span>
                <span className="border border-black bg-white px-5 py-2 text-lg font-normal uppercase tracking-widest">
                  Web Designer
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative min-h-[600px] lg:min-h-full border-b border-black lg:border-b-0 bg-neutral-100 group overflow-hidden">
            <InteractiveImage
              src="/img/aa.png"
              fill
              className="absolute inset-0 w-full h-full"
              alt="Angelo Amenta"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </header>

        {/* INFO BAR */}
        <div className="border-b border-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black bg-white text-black text-sm md:text-base font-medium uppercase tracking-tight">
          <a href="mailto:angeloamenta7@gmail.com" className="p-6 flex items-center justify-center gap-3 hover:bg-neutral-100 transition-colors group">
            <Mail className="w-5 h-5" />
            <span className="truncate">angeloamenta7@gmail.com</span>
          </a>
          <div className="p-6 flex items-center justify-center gap-3 bg-white">
            <Phone className="w-5 h-5" />
            <span>+39 346 036 5742</span>
          </div>
          <div className="p-6 flex items-center justify-center gap-3 bg-white">
            <MapPin className="w-5 h-5" />
            <span>Modica, Italy</span>
          </div>
          <a href="https://github.com/Angeloamenta" target="_blank" className="p-6 flex items-center justify-center gap-3 hover:bg-neutral-100 transition-colors bg-white">
            <Github className="w-5 h-5" />
            <span>/Angeloamenta</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 items-stretch">
          {/* LEFT COLUMN: Skills & Education */}
          <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-black flex flex-col bg-white h-full">

            {/* DOWNLOAD */}
            <div className="p-8 border-b border-black bg-white hover:bg-neutral-100 transition-colors cursor-pointer text-center group">
              <a href="/amenta_cv_2026.docx" download className="text-xl font-bold uppercase flex items-center justify-center gap-3">
                Download CV <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* SKILLS */}
            <div className="p-8 md:p-10 border-b border-black bg-white">
              <h3 className="text-2xl font-bold uppercase mb-8">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript", "React", "Next.js", "WordPress", "PHP", "Laravel", "Java", "Spring Boot",
                  "Docker", "MySQL", "MongoDB", "GSAP", "Three.js", "Tailwind CSS", "Figma", "Payload CMS", "Git"
                ].map((skill, i) => (
                  <span key={i} className="px-3 py-1 border border-black text-xs font-semibold uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="p-8 md:p-10 flex-1 bg-white">
              <h3 className="text-2xl font-bold uppercase mb-8">Education</h3>
              <ul className="space-y-8">
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">GSAP 3 Express</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">Creative Coding Club • 10/2025</p>
                </li>
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">Advanced React Course</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">Codegrind • 08/2025</p>
                </li>
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">Java - Springboot</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">Formatemp • 02/2025 - 04/2025</p>
                </li>
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">Learn UI Design with Figma</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">Awwwards • 2024</p>
                </li>
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">UX/UI Design</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">Boolean • 08/2024</p>
                </li>
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">Python Coding Camp</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">Profession AI • 2024</p>
                </li>
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">Master Full Stack Developer</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">Boolean Careers • 2021-2022</p>
                </li>
                <li className="relative pl-6 border-l border-black">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black rounded-full"></div>
                  <h4 className="text-base font-bold uppercase leading-tight">Diploma Scuola Superiore</h4>
                  <p className="text-sm font-medium opacity-60 mt-1">IPA • 2012</p>
                </li>
              </ul>
            </div>
          </aside>

          {/* RIGHT COLUMN: Experience */}
          <div className="lg:col-span-8 bg-white flex flex-col h-full">

            {/* HEADER ABOUT (Small) */}
            <div className="border-b border-black p-8 md:p-10 bg-neutral-50">
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-5xl">
                I combine technical expertise with a strong design sensibility to create digital products that stand out. Passionate about minimalist aesthetics, performance, and interactive storytelling.
              </p>
            </div>

            <div className="p-8 md:p-16 flex-1">
              <h2 className="text-5xl md:text-6xl font-black uppercase mb-16 flex items-center gap-6">
                Experience
              </h2>

              <div className="space-y-16">

                {/* JOB 1 */}
                <div className="group relative pl-8 border-l border-neutral-300 hover:border-black transition-colors duration-500">
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-black transition-transform"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-2 md:mb-0">Ideology Creative Studio</h3>
                    <span className="font-mono text-sm font-bold opacity-60 shrink-0">05/2025 - Present</span>
                  </div>
                  <h4 className="text-lg font-semibold uppercase mb-4 text-neutral-500">Web Developer</h4>
                  <p className="text-lg leading-relaxed text-neutral-800 max-w-3xl font-light">
                    Design, development, and management of websites. Implementation of advanced features and animations (GSAP, Three.js). Custom WordPress plugin development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold font-mono uppercase text-neutral-400">
                    <span className="bg-neutral-100 px-2 py-1">WordPress</span>
                    <span className="bg-neutral-100 px-2 py-1">Next.js</span>
                    <span className="bg-neutral-100 px-2 py-1">GSAP</span>
                  </div>
                </div>

                {/* JOB 2 */}
                <div className="group relative pl-8 border-l border-neutral-300 hover:border-black transition-colors duration-500">
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-neutral-300 group-hover:bg-black transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-2 md:mb-0">Everest Innovation</h3>
                    <span className="font-mono text-sm font-bold opacity-60 shrink-0">02/2025 - 04/2025</span>
                  </div>
                  <h4 className="text-lg font-semibold uppercase mb-4 text-neutral-500">Back-End Developer</h4>
                  <p className="text-lg leading-relaxed text-neutral-800 max-w-3xl font-light">
                    Focus on Java, Spring Boot, REST API, and JPA. Design and implementation of a web platform for data management.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold font-mono uppercase text-neutral-400">
                    <span className="bg-neutral-100 px-2 py-1">Java</span>
                    <span className="bg-neutral-100 px-2 py-1">Spring Boot</span>
                  </div>
                </div>

                {/* JOB 3 */}
                <div className="group relative pl-8 border-l border-neutral-300 hover:border-black transition-colors duration-500">
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-neutral-300 group-hover:bg-black transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-2 md:mb-0">Switch Comunicazione</h3>
                    <span className="font-mono text-sm font-bold opacity-60 shrink-0">04/2024 - 02/2025</span>
                  </div>
                  <h4 className="text-lg font-semibold uppercase mb-4 text-neutral-500">Web Designer / Dev</h4>
                  <p className="text-lg leading-relaxed text-neutral-800 max-w-3xl font-light">
                    Maintenance and creation of websites using WordPress, HTML, CSS, JS, PHP. UI Design with Figma.
                  </p>
                </div>

                {/* JOB 4: Inventa Srl */}
                <div className="group relative pl-8 border-l border-neutral-300 hover:border-black transition-colors duration-500">
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-neutral-300 group-hover:bg-black transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-2 md:mb-0">Inventa Srl</h3>
                    <span className="font-mono text-sm font-bold opacity-60 shrink-0">10/2023 - 04/2024</span>
                  </div>
                  <h4 className="text-lg font-semibold uppercase mb-4 text-neutral-500">Web Developer</h4>
                  <p className="text-lg leading-relaxed text-neutral-800 max-w-3xl font-light">
                    Maintenance and implementation of new features for corporate websites. Creation of E-commerce solutions.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold font-mono uppercase text-neutral-400">
                    <span className="bg-neutral-100 px-2 py-1">WordPress</span>
                    <span className="bg-neutral-100 px-2 py-1">WooCommerce</span>
                  </div>
                </div>

                {/* JOB 5: Collaborazioni Freelance */}
                <div className="group relative pl-8 border-l border-neutral-300 hover:border-black transition-colors duration-500">
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-neutral-300 group-hover:bg-black transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-2 md:mb-0">Freelance</h3>
                    <span className="font-mono text-sm font-bold opacity-60 shrink-0">05/2023 - Present</span>
                  </div>
                  <h4 className="text-lg font-semibold uppercase mb-4 text-neutral-500">Web Developer</h4>
                  <p className="text-lg leading-relaxed text-neutral-800 max-w-3xl font-light">
                    Developing and maintaining custom websites. React, Angular, and Headless WordPress.
                  </p>
                </div>

                {/* JOB 6: Gruppo Zacco */}
                <div className="group relative pl-8 border-l border-neutral-300 hover:border-black transition-colors duration-500">
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-neutral-300 group-hover:bg-black transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-2 md:mb-0">Gruppo Zacco</h3>
                    <span className="font-mono text-sm font-bold opacity-60 shrink-0">06/2022 - 09/2023</span>
                  </div>
                  <h4 className="text-lg font-semibold uppercase mb-4 text-neutral-500">Web Developer</h4>
                  <p className="text-lg leading-relaxed text-neutral-800 max-w-3xl font-light">
                    Manutenzione e creazione siti web aziendali. Attivazione e gestione E-commerce.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold font-mono uppercase text-neutral-400">
                    <span className="bg-neutral-100 px-2 py-1">Shopify</span>
                    <span className="bg-neutral-100 px-2 py-1">WordPress</span>
                  </div>
                </div>

                {/* JOB 7: Boolean */}
                <div className="group relative pl-8 border-l border-neutral-300 hover:border-black transition-colors duration-500">
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-neutral-300 group-hover:bg-black transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-2 md:mb-0">Boolean</h3>
                    <span className="font-mono text-sm font-bold opacity-60 shrink-0">10/2021 - 03/2022</span>
                  </div>
                  <h4 className="text-lg font-semibold uppercase mb-4 text-neutral-500">Web Developer Trainee</h4>
                  <p className="text-lg leading-relaxed text-neutral-800 max-w-3xl font-light">
                    Immersive full-time course on Front-End and Back-End technologies. Built replicas of Netflix, WhatsApp Web, Spotify.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold font-mono uppercase text-neutral-400">
                    <span className="bg-neutral-100 px-2 py-1">Vue.js</span>
                    <span className="bg-neutral-100 px-2 py-1">Laravel</span>
                    <span className="bg-neutral-100 px-2 py-1">PHP</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-black p-8 md:p-12 bg-white text-black flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <p className="text-2xl font-black uppercase tracking-widest">Angelo Amenta</p>
            <p className="text-sm opacity-60 font-mono mt-1">© 2026. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
