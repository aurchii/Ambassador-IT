import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 0%, #1e293b, transparent), linear-gradient(135deg, #020617, #020617)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 text-slate-300">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* BRAND */}
          <div className="flex flex-col items-start">
            <h3 className="text-4xl font-semibold text-white">
              Ambassador IT
            </h3>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
              We deliver reliable, scalable, and modern IT solutions to help
              businesses grow in the digital era.
            </p>

            <Link
              href="/company/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Our Services
            </h4>
            <div className="mt-2 h-[2px] w-8 bg-blue-500" />

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud & DevOps",
                "AI & Data Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Quick Links
            </h4>
            <div className="mt-2 h-[2px] w-8 bg-blue-500" />

            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["About Us", "/company/about"],
                ["Our Services", "/services"],
                // ["Meet Our Team", "/company/team"],
                ["Contact Us", "/company/contact"],
                ["Need a Consultation?", "/company/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Contact Us
            </h4>
            <div className="mt-2 h-[2px] w-8 bg-blue-500" />

            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                +880 19019-29400
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                support@ambassadoritbd.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ambassador IT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
