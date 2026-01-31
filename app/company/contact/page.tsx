import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="Contact"
        subtitle="Tell us about your project. We’ll get back with next steps."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form className="rounded-2xl border border-slate-200 p-8">
          <div className="grid gap-4">
            <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Full Name" />
            <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Email" />
            <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Company (optional)" />
            <textarea className="min-h-[140px] rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Message" />
            <button type="button" className="rounded-xl bg-blue-800 px-3 py-3 text-sm font-medium text-white">
              Send Message 
            </button>
           
          </div>
        </form>

        <div className="rounded-2xl border border-slate-200 p-8">
          <div className="font-semibold">Contact Info</div>
          <p className="mt-3 text-sm text-slate-600">Email: {site.email}</p>
          <p className="mt-1 text-sm text-slate-600">Location: {site.location}</p>

          <div className="mt-8">
            <div className="font-semibold">Business hours</div>
            <p className="mt-2 text-sm text-slate-600">Sun–Thu: 10:00–18:00 </p>
          </div>
        </div>
      </div>
    </main>
  );
}
