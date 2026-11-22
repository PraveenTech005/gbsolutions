export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
  className = ""
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase ${
          dark ? "text-orange-400" : "text-orange-600"
        }`}>
          <span className="w-2 h-2 rounded-full bg-orange-600"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      
      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}>
          {title}
        </h2>
      )}

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {description}
        </p>
      )}

      <div className={`mt-4 h-0.5 w-16 bg-orange-600 ${centered ? "mx-auto" : ""}`}></div>
    </div>
  );
}
