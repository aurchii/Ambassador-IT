import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

export default function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      
      <div className="mb-32 grid items-center gap-16 lg:grid-cols-[1fr_1.6fr]">

  {/* LEFT – IMAGE */}
  <div className="flex justify-center lg:justify-start lg:-ml-24">
    <Image
      src="/images/download.gif"
      alt="Abstract circular graphic"
      width={400}
      height={400}
    />
  </div>

  {/* RIGHT – TEXT */}
  <div className=" text-2xl leading-relaxed text-slate-700 lg:ml-10">
    <p>
      Our mission is to empower businesses with cutting-edge technology
      and strategic insights. From startups to established enterprises,
      we partner with organizations to transform their digital presence
      and achieve their goals.
    </p>
  </div>

</div>

      {/* SERVICES HEADING */}
      <SectionHeading
    title="Our Services"
    subtitle="End-to-end product engineering, from strategy and design to development and scale."
  />

  {/* SERVICE CARDS */}
  <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((s) => (
      <div
        key={s.title}
        className="
          group relative rounded-3xl
          border border-slate-200/60
          bg-purple-100/50
          p-8
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
          hover:bg-white
        "
      >
        {/* LEFT ACCENT */}
        <div className="absolute left-0 top-6 h-12 w-[3px] rounded-full bg-blue-500/70 opacity-60 transition-all duration-300 group-hover:h-20 group-hover:opacity-100" />

        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
          {s.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {s.desc}
        </p>
      </div>
    ))}
  </div>
    </section>
  );
}
