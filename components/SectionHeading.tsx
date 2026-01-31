export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-4xl sm:text-5xl  tracking-tight text-slate-900">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}
