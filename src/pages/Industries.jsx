import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Building,
  Warehouse,
  Factory,
  Landmark,
  Globe,
} from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CTASection from "../components/common/CTASection";
import { industriesData } from "../data/industries";

export default function Industries() {
  const getIndustryIcon = (id) => {
    switch (id) {
      case "infrastructure-development":
        return <Landmark className="w-5 h-5 text-orange-600" />;
      case "industrial-expansion":
        return <Warehouse className="w-5 h-5 text-orange-600" />;
      case "rapid-urbanization":
        return <Building className="w-5 h-5 text-orange-600" />;
      case "remote-hilly-terrains":
        return <Factory className="w-5 h-5 text-orange-600" />;
      default:
        return <Globe className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <>
      <SEO
        title="Industries & Market Overview | Pre-Engineered Building Applications"
        description="Explore PEB industry applications and market growth drivers in India: Infrastructure development, industrial expansion, rapid urbanization, and remote terrain construction."
      />

      <PageHero
        title="Industries & Market Drivers"
        eyebrow="Market Overview"
        subtitle="India's Pre-Fabricated & Engineered Building Structural Industry is experiencing significant growth, projected to grow from USD 15.07 billion in 2025 to USD 23.13 billion by 2030."
        breadcrumbs={[{ label: "Industries" }]}
        image="/images/og/Logistics.png"
        badgeText="USD 15.07B to 23.13B (8.95% CAGR) • PEB USD 0.888B by 2032"
      />

      {/* Market Overview Context Banner */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-white text-slate-900 rounded-xs border border-slate-200 shadow-xs">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase text-orange-600 font-bold">
                Industry Trajectory
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                India's Pre-Fabricated & Engineered Building Structural Industry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                The Pre-Engineered Buildings (PEB) market in India has been
                growing steadily, with increasing demand for cost-effective and
                time-efficient construction solutions. The Prefabricated
                Buildings Market is projected to grow from USD 15.07 billion in
                2025 to USD 23.13 billion by 2030, at a CAGR of 8.95%. The PEB
                industry is expected to reach USD 0.888 billion by 2032, growing
                at a CAGR of 7.40%.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div>
                <p className="text-slate-500">Prefabricated Market (2025)</p>
                <p className="text-lg font-bold text-slate-900 mt-0.5">
                  USD 15.07 Billion
                </p>
              </div>
              <div>
                <p className="text-slate-500">Projected Market (2030)</p>
                <p className="text-lg font-bold text-orange-600 mt-0.5">
                  USD 23.13 Billion
                </p>
              </div>
              <div>
                <p className="text-slate-500">Prefab Market Growth</p>
                <p className="text-lg font-bold text-slate-900 mt-0.5">
                  8.95% CAGR
                </p>
              </div>
              <div>
                <p className="text-slate-500">PEB Industry by 2032</p>
                <p className="text-lg font-bold text-orange-600 mt-0.5">
                  USD 0.888 Billion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sections - Strictly from Report */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industriesData.map((ind, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={ind.id}
                id={ind.id}
                className="scroll-mt-28 bg-white border border-slate-200 rounded-xs overflow-hidden shadow-xs"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative bg-slate-100 overflow-hidden ${isEven ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full min-h-[300px] lg:min-h-[420px] object-cover object-center filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/95 text-orange-600 text-[10px] font-mono uppercase tracking-widest rounded-xs border border-slate-200 shadow-xs">
                        {ind.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isEven ? "lg:order-1" : ""}`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-orange-50 border border-orange-200 rounded-xs">
                          {getIndustryIcon(ind.id)}
                        </div>
                        <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">
                          Key Market Driver 0{index + 1}
                        </span>
                      </div>

                      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {ind.title}
                      </h2>

                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {ind.description}
                      </p>

                      {/* Key Points */}
                      <div className="mt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 border-l-2 border-orange-500 pl-2">
                          Industry Demand & Application Factors
                        </h4>
                        <div className="space-y-2">
                          {ind.keyPoints.map((point, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Advantages */}
                      <div className="mt-5 pt-5 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-l-2 border-slate-700 pl-2">
                          Documented PEB Advantages
                        </h4>
                        <div className="space-y-1.5">
                          {ind.advantages.map((adv, aIdx) => (
                            <div
                              key={aIdx}
                              className="flex items-start gap-2 text-xs text-slate-500"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                              <span>{adv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700"
                      >
                        <span>Discuss Facilities In This Sector</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to="/services"
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                      >
                        Explore Services
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Planning an Industrial Facility in Any of These Sectors?"
        description="Connect with Mr. G. Satish and our engineering team at IDA Nacharam, Hyderabad."
      />
    </>
  );
}
