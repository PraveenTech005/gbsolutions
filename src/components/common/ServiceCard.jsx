import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <article className="group bg-white border border-slate-200 hover:border-orange-500/50 transition-all duration-300 flex flex-col h-full rounded-sm overflow-hidden shadow-xs hover:shadow-md">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>

        {/* Category tag */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-orange-600 border border-slate-200 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-xs shadow-xs">
          {service.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
          <Link to={`/services/${service.slug}`}>
            {service.title}
          </Link>
        </h3>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-grow">
          {service.tagline || service.overview}
        </p>

        {/* Key capabilities bullet preview */}
        {service.capabilities && service.capabilities.length > 0 && (
          <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
            {service.capabilities.slice(0, 2).map((cap, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{cap}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-orange-600 transition-colors duration-200"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </article>
  );
}
