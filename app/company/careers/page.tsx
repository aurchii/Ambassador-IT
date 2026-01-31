import SectionHeading from "@/components/SectionHeading";

const roles = [
  { title: "Frontend Engineer", desc: "React / Next.js, UI systems, performance." },
  { title: "Backend Engineer", desc: "APIs, databases, security, scalability." },
  { title: "UI/UX Designer", desc: "Design systems, product thinking, prototypes." },
  { title: "DevOps Engineer", desc: "CI/CD, cloud infra, observability." },
];

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="Careers"
        subtitle="Join a team that values learning, collaboration, and craftsmanship."
      /><br/>
      <div className="mt-10 grid gap-4 justify-center text-3xl font-semibold text-black-700">
        Currently no positions are open. Please check back later.
      </div>
    </main>
  );
}
