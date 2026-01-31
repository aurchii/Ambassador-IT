import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "@/components/Reveal";
import type { ServiceGroup } from "@/lib/services";

function ServiceCard({
  title,
  desc,
  href = "/company/contact",
  tag,
}: {
  title: string;
  desc: string;
  href?: string;
  tag?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-purple-100/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      {/* soft white hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-24 right-[-80px] h-56 w-56 rounded-full bg-white blur-3xl" />
      </div>

      {tag && (
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          {tag}
        </div>
      )}

      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        <span className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500 transition group-hover:text-slate-700">
          ↗
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {desc}
      </p>

      <div className="mt-6">
        {/* <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 transition hover:text-slate-900"
        >
          Learn more
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link> */}
      </div>
    </div>
  );
}

export default function ServiceGroupSection({
  group,
}: {
  group: ServiceGroup;
}) {
  return (
    <section id={group.id} className="scroll-mt-28 py-4">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title={group.title}
            subtitle={group.subtitle}
          />

          <Link
            href="/company/contact"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            Talk to an expert
            <span className="text-slate-400">→</span>
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((item, idx) => (
          <Reveal key={item.title} delay={Math.min(0.12, idx * 0.03)}>
            <ServiceCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
