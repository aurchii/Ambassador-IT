import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, #eff6ff, #eef2ff, #f5f3ff)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-blue-600/80">
              <span className="h-px w-10 bg-blue-400/40" />
              Do you have a project?
            </div>

            <h3 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Let’s talk about building reliable
              <br className="hidden sm:block" />
              digital solutions together
            </h3>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-end">
            <Link
              href="/company/contact"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-blue-600
                px-7 py-3
                text-sm font-semibold
                text-white
                shadow-md
                transition
                hover:-translate-y-0.5
                hover:bg-blue-700
              "
            >
              Start a Conversation →
            </Link>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>+880 (190) 192 9400</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
