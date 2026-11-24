import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Layers, 
  ChevronRight,
  FileCheck
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { servicesData } from '../data/services';
import { companyInfo } from '../data/company';

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900">Service Not Found</h1>
        <p className="text-slate-600 mt-2 text-sm">The requested engineering service could not be located.</p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Services</span>
        </Link>
      </div>
    );
  }

  const otherServices = servicesData.filter(s => s.id !== service.id).slice(0, 4);

  return (
    <>
      <SEO
        title={`${service.title} | Services`}
        description={`${service.title} by G.B SOLUTIONS PEB. ${service.overview}`}
      />

      <PageHero
        title={service.title}
        eyebrow={service.category}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: service.shortTitle }
        ]}
        image={service.image}
        badgeText="G.B SOLUTIONS PEB • Engineering Delivery"
      />

      {/* Main Service Content */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Main Column (8 cols) */}
            <div className="lg:col-span-8">
              {/* Overview */}
              <div>
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold tracking-widest text-orange-600 uppercase">
                  <span>Scope Overview</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Engineering Overview & Core Delivery
                </h2>
                <div className="mt-4 h-0.5 w-16 bg-orange-600"></div>

                <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Service Hero Image */}
              <div className="mt-8 border border-slate-200 bg-slate-900 rounded-xs overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[16/9] object-cover object-center filter brightness-95"
                />
              </div>

              {/* Capabilities Breakdown */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Capabilities & Construction Scope
                </h3>
                <div className="mt-3 h-0.5 w-12 bg-orange-600"></div>

                <div className="mt-6 space-y-3">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xs">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Highlights */}
              {service.technicalHighlights && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Technical Highlights & Engineering Standards
                  </h3>
                  <div className="mt-3 h-0.5 w-12 bg-orange-600"></div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.technicalHighlights.map((tech, idx) => (
                      <div key={idx} className="p-4 bg-slate-900 text-white border border-slate-800 rounded-xs">
                        <div className="text-xs font-mono text-orange-400 uppercase font-semibold">{tech.label}</div>
                        <div className="text-sm sm:text-base font-bold text-slate-100 mt-1">{tech.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Typical Industrial Applications
                </h3>
                <div className="mt-3 h-0.5 w-12 bg-orange-600"></div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 border border-slate-200 rounded-xs bg-white text-xs sm:text-sm font-medium text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Inquiry Box */}
              <div className="p-6 bg-slate-900 text-white rounded-xs border border-slate-800">
                <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">Direct Engineering Consultation</div>
                <h4 className="text-lg font-bold text-white mt-1">Discuss This Capability</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Have questions about clear spans, column reactions, or civil foundation packages for this service? Speak with our team.
                </p>

                <div className="mt-6 space-y-3">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${companyInfo.contact.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs tracking-wider rounded-xs transition-colors"
                  >
                    <span>Call +91 95055 52025</span>
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prompt review of structural drawings & site requirements</span>
                </div>
              </div>

              {/* Other Services Navigation List */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xs">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-l-2 border-orange-500 pl-2">
                  Other Engineering Services
                </h4>
                <ul className="mt-4 divide-y divide-slate-200 text-xs">
                  {otherServices.map(other => (
                    <li key={other.id} className="py-2.5">
                      <Link
                        to={`/services/${other.slug}`}
                        className="group flex items-center justify-between text-slate-700 hover:text-orange-600 font-medium"
                      >
                        <span className="truncate">{other.shortTitle}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-orange-600 transition-all shrink-0 ml-2" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Link
                    to="/services"
                    className="text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Technical Notice */}
              <div className="p-4 bg-slate-100 border border-slate-200 rounded-xs text-[11px] text-slate-500 leading-relaxed">
                <strong className="text-slate-800">Engineering Note:</strong> All structural sections, welding tolerances, and bolt torque specifications are executed strictly in accordance with certified Indian and international structural engineering standards.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Execute Your ${service.shortTitle} With Precision.`}
        description="Connect directly with Mr. G. Satish and our engineering team at IDA Nacharam, Hyderabad."
      />
    </>
  );
}
