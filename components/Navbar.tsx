"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/30" />

      <div className="relative mx-auto flex h-[78px] max-w-[1320px] items-center justify-between px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png" 
            alt="Ambassador IT"
            width={180}
            height={20}
            priority
          />
        </Link>

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>

          {/* SERVICES */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Services <span className="text-xs opacity-70">▾</span>
            </button>

            <div className="dropdown glass-dropdown">
              <DropdownItem href="/services#software-development">
                Web Development
              </DropdownItem>
              <DropdownItem href="/services#app-development">
                App Development
              </DropdownItem>
              <DropdownItem href="/services#ui-ux-design">
                UI/UX Design
              </DropdownItem>
              <DropdownItem href="/services#cloud-devops">
                Cloud & DevOps
              </DropdownItem>
              <DropdownItem href="/services#ml-ai-development">
                ML & AI Development
              </DropdownItem>
              <DropdownItem href="/services#maintenance-support">
                Maintenance & Support
              </DropdownItem>

              <div className="my-2 border-t border-slate-200/60" />

              <DropdownItem href="/services">
                <span className="font-semibold text-blue-600">
                  Show All →
                </span>
              </DropdownItem>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Solutions <span className="text-xs opacity-70">▾</span>
            </button>

            <div className="dropdown glass-dropdown">
              <DropdownItem href="#">Startup Solutions</DropdownItem>
              <DropdownItem href="#">Enterprise Systems</DropdownItem>
              <DropdownItem href="#">Custom Software</DropdownItem>
              <DropdownItem href="#">Digital Transformation</DropdownItem>
            </div>
          </div>

          {/* COMPANY */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Company <span className="text-xs opacity-70">▾</span>
            </button>

            <div className="dropdown glass-dropdown">
              <DropdownItem href="/company/about">
                About Us
              </DropdownItem>
              {/* <DropdownItem href="/resources/case-studies">
                Case Studies
              </DropdownItem> */}
              <DropdownItem href="/company/careers">
                Careers
              </DropdownItem>
              {/* <DropdownItem href="/company/team">
                Team
              </DropdownItem> */}
            </div>
          </div>

          <Link href="/company/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/company/contact"
          className="rounded-full bg-blue-600/90 px-6 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-blue-800"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}

/* DROPDOWN ITEM */
function DropdownItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-5 py-2.5 text-[13.5px] text-slate-800 transition hover:bg-slate-100/70 hover:text-blue-600"
    >
      {children}
    </Link>
  );
}
