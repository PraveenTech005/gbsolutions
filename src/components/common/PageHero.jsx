import Breadcrumbs from './Breadcrumbs';

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs = [],
  image = "/images/og/shed_pre_build.png",
  badgeText
}) {
  return (
    <section className="relative bg-white text-slate-900 overflow-hidden py-14 sm:py-20 border-b border-slate-200">
      {/* Background image strictly from /public/images/og/ with white overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center opacity-10 filter contrast-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold tracking-wider uppercase rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></span>
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {badgeText && (
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 border-l-2 border-orange-600 pl-3">
              {badgeText}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
