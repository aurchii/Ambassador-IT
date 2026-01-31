import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

const chips = [
  "Fast delivery",
  "Clean architecture",
  "Conversion-first UI",
  "Security & performance",
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 right-[-120px] h-96 w-96 rounded-full bg-purple-100/40 blur-[160px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        {/* LEFT CONTENT */}
        <div>
       

          <Reveal delay={0.05}>
            <h1 className="mt-4 text-4xl  tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Build with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {site.name}
              </span>
              <br />
              Modern engineering, real outcomes
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              From websites and apps to AI and cloud, we deliver clean, scalable
              solutions that look great and perform even better.
            </p>
          </Reveal>

          {/* ACTION BUTTONS */}
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                Get a free consultation
                <span className="opacity-70">→</span>
              </Link>

              <Link
                href="#software-development"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md"
              >
                Explore services
                
              </Link>
            </div>
          </Reveal>

          {/* CHIPS */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-slate-200 bg-blue-100/80 px-4 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition hover:border-slate-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT IMAGE */}
        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-xl backdrop-blur-sm">
            {/* soft decorative glows */}
            <div className="pointer-events-none absolute -left-14 -top-14 h-56 w-56 rounded-full bg-blue-100/50 blur-[140px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-100/40 blur-[160px]" />

            <Image
              src="/images/services-hero.gif"
              alt="Services illustration"
              width={1200}
              height={900}
              priority
              className="relative h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
