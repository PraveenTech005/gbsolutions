import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";
import { companyInfo } from "../../data/company";

export default function CTASection({
  title = "Let's Build Something That Lasts.",
  description = "Speak directly with our engineering team to discuss structural steel requirements, PEB specifications, site scheduling, and turnkey contracting for your upcoming industrial facility.",
  primaryButtonText = "Discuss Your Project",
  primaryButtonLink = "/contact",
}) {
  return (
    <section className="relative bg-white text-slate-900 py-16 sm:py-20 border-t border-slate-200 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Industrial accent glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest text-orange-600 uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              <span>Direct Project Engagement</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2 text-center mx-auto">
                <span className="text-orange-600 font-bold">15+</span> Years
                Industry Experience
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <div className="flex items-center gap-2 text-center mx-auto">
                <span className="text-orange-600 font-bold">Integrated</span>{" "}
                Civil + Steel Capability
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <div className="flex items-center gap-2 text-center mx-auto">
                <span className="text-orange-600 font-bold">Hyderabad</span>{" "}
                Base (IDA Nacharam)
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link
              to={primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm tracking-wide uppercase transition-colors duration-200 shadow-md group rounded-sm text-center"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <a
              href={`tel:${companyInfo.contact.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium text-sm transition-colors duration-200 rounded-sm text-center shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-orange-600" />
              <span>Call +91 95055 52033</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
