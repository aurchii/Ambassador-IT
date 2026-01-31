"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden flex items-center">
      {/* ANIMATED GRADIENT */}
       {/* ANIMATED GRADIENT */}
  <div className="absolute inset-0 -z-20 hero-gradient" />

      {/* SOFT BLOB */}
      <div
        className="
  absolute -bottom-48 left-[-10%]
  h-[650px] w-[140%]
  -z-10
  rounded-[100%]
  bg-blue-100/40
  blur-[160px]
"

        style={{
          animation: "wave-move 22s ease-in-out infinite",
        }}
      />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 py-40 w-full">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/Metaball.gif"
                alt="Hero visual"
                width={560}
                height={460}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-6xl  tracking-tight text-slate-900 leading-tight">
              <span className="block drop-shadow-sm">
                Building Reliable
              </span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software for Modern Businesses
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-700">
              We help startups and enterprises design, build, and scale web,
              mobile, & cloud products with speed, clarity, and quality.
            </p>

            <div className="flex gap-5 pt-4">
              <Link
                href="/company/contact"
                className="rounded-full bg-blue-600 px-9 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl hover:bg-blue-700"
              >
                Book a Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-slate-900/20 px-9 py-4 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white/60 hover:-translate-y-0.5"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
