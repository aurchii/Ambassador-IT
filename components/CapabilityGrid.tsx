import SectionHeading from "./SectionHeading";
import { capabilities } from "@/lib/data";
import {
  Layers,
  Settings,
  ShieldCheck,
  Cloud,
  Code,
  BarChart3,
} from "lucide-react";

const icons = [
  Layers,
  Settings,
  ShieldCheck,
  Cloud,
  Code,
  BarChart3,
];

export default function CapabilityGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        title="Our Capabilities"
        subtitle="Cross-functional teams built to execute quickly without sacrificing quality."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => {
          const Icon = icons[i % icons.length];

          return (
            <div
              key={c}
              className="
                group rounded-3xl
                border border-slate-200/60
                bg-white
                p-8
                transition-all duration-300
                hover:border-blue-200
                hover:bg-slate-50
              "
            >
              {/* ICON */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={20} strokeWidth={1.8} />
              </div>

              <h3 className="text-base font-semibold text-slate-900">
                {c}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Planning, execution, and delivery with clear communication.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
