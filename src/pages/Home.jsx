import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Hammer,
  Building2,
  Clock,
  TrendingUp,
  ShieldCheck,
  Compass,
  Maximize2,
} from "lucide-react";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/common/SectionHeading";
import ServiceCard from "../components/common/ServiceCard";
import CTASection from "../components/common/CTASection";
import ImageLightbox from "../components/common/ImageLightbox";
import { companyInfo } from "../data/company";
import { servicesData } from "../data/services";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Take first 6 services for homepage display
  const featuredServices = servicesData.slice(0, 6);

  const galleryImages = [
    {
      src: "/images/og/shed_pre_build.png",
      title: "Pre-Engineered Heavy Steel Portal Frame Assembly",
    },
    {
      src: "/images/og/shed_inner1.png",
      title: "Large Clear-Span 30–60m Warehouse Interior Framing",
    },
    {
      src: "/images/og/shed_foundation.png",
      title: "Concrete Foundations & Column Base Pedestals",
    },
    {
      src: "/images/og/shed_outer1.png",
      title: "Industrial Shed Exterior Profile & Cladding System",
    },
    {
      src: "/images/og/shed_inner0.png",
      title: "Steel Roof Truss & Longitudinal Purlin Assembly",
    },
    {
      src: "/images/og/Logistics.png",
      title: "Multi-Bay Logistics & Storage Facility",
    },
  ];

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEO
        title="G.B SOLUTIONS PEB | Industrial Shed & Civil Contractors"
        description="G.B SOLUTIONS PEB - Industrial Shed and Civil Contractors. Pre-Fabricated & Engineered Building Structural Products, Pre-Engineered Buildings, and Civil Construction in Hyderabad."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-white text-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/og/shed_pre_build.png"
            alt="Pre-Engineered Building Structural Steel Frame"
            className="w-full h-full object-cover object-center opacity-15 filter contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-left w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-xs">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping"></span>
              <span>
                G.B SOLUTIONS PEB • Industrial Shed and Civil Contractors • Est.
                2017
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] uppercase font-sans">
              ENGINEERING THE FUTURE OF{" "}
              <span className="text-orange-600">
                INDUSTRIAL SPACES.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Delivering pre-engineered building solutions, structural steel
              systems and civil construction services with a focus on quality,
              precision and reliability.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors duration-200 shadow-md group text-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-xs uppercase tracking-wider rounded-xs transition-colors duration-200 text-center shadow-xs"
              >
                <span>About Our Company</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </Link>
            </div>
          </div>

          {/* Market Stats Bar */}
          <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyInfo.marketOverview.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-orange-500 pl-3">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
                  {stat.value}
                </div>
                <div className="text-xs text-orange-600 font-semibold mt-0.5">
                  {stat.cagr}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 text-[10px] uppercase tracking-widest">
          <span className="mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-orange-600" />
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative border border-slate-200 bg-slate-100 overflow-hidden rounded-xs shadow-md">
                <img
                  src="/images/og/shed_inner1.png"
                  alt="Pre-Engineered Building Structure"
                  className="w-full aspect-[4/3] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
                  <p className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider">
                    G.B SOLUTIONS PEB
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5 leading-snug">
                    Pre-Engineered Building System - Large Clear-Span Structure
                  </p>
                </div>
              </div>

              {/* 15+ Years Promoter Experience Badge - White theme with navy text & orange accent */}
              <div className="absolute -top-6 -left-3 sm:-top-8 sm:left-6 bg-white text-slate-900 p-5 rounded-xs border-2 border-orange-500/50 shadow-xl max-w-[260px] z-20">
                <div className="text-2xl font-black text-orange-600 font-sans">
                  15+ Years
                </div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mt-1">
                  Promoter Industry Leadership
                </div>
                <div className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Mr G Satish: Over 15 years in pre-fabricated & engineered
                  building structural products.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 mt-6 lg:mt-0">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest text-orange-600 uppercase">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>Introduction</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {companyInfo.headlines.introTitle}
              </h2>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-semibold">
                  PRE-FABRICATED & ENGINEERED BUILDING STRUCTURAL PRODUCTS
                </strong>{" "}
                are advanced construction solutions designed and fabricated in a
                factory, then assembled on-site. These structures are widely
                used for industrial, commercial, and even residential purposes
                due to their cost efficiency, speed of construction, and
                durability.
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                The Covenant Management team's combined experience in steel
                design, steel fabrication, and general construction gives us a
                unique understanding of the needs and goals of our customers.
                Starting with quick design turnaround on critical items such as
                anchor bolt drawings and building reactions, to on-time delivery
                of the steel, coordinated and sequenced the way you plan on
                performing the erection process.
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                GB solutions have recently brought in a perfect solution for
                rapid multi-storied constructions in steel structural buildings
                or commercial complexes. It is the best combination of concrete
                and steel structural composite building solutions. With this
                type of construction, a multi-storey building can be built
                within a short span.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-900">
                      30% to 40% Faster:
                    </strong>{" "}
                    PEB Construction is 30 to 40% faster than traditional or
                    civil or masonry construction.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-900">
                      Tropical Climate Suitability:
                    </strong>{" "}
                    Well suited for India with its tropical climate as it
                    provides good insulation effects.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-900">
                      Turnkey Concept to Commissioning:
                    </strong>{" "}
                    Covering concrete & steel structures, undertaking concrete
                    foundations, concrete columns, and bricks masonry flooring
                    as required to complete a building in totality.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 group"
                >
                  <span>Read Full Company Profile & Promoter Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TYPES OF STRUCTURAL PRODUCTS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Structural Systems"
            title="Types of Structural Products"
            description="Factory-made components that are transported and assembled on-site, reducing construction time and labor costs."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            <div className="bg-white border border-slate-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex">
                  <span className="text-3xl font-mono font-bold text-orange-600">
                    &#8226;
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    Steel Frames
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Pre-engineered steel components for robust and flexible
                  construction.
                </p>
              </div>
              <Link
                to="/services/steel-frames"
                className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex">
                  <span className="text-3xl font-mono font-bold text-orange-600">
                    &#8226;
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    Precast Concrete Panels
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Factory-molded concrete sections for walls, floors, and
                  roofing.
                </p>
              </div>
              <Link
                to="/services/precast-concrete-panels"
                className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex">
                  <span className="text-3xl font-mono font-bold text-orange-600">
                    &#8226;
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    Modular Building Units
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Prefabricated sections that can be combined to create
                  residential and commercial spaces.
                </p>
              </div>
              <Link
                to="/services/modular-building-units"
                className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex">
                  <span className="text-3xl font-mono font-bold text-orange-600">
                    &#8226;
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    Light Gauge Steel
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Light Gauge Steel Structures: Ideal for quick-build homes and
                  commercial units.
                </p>
              </div>
              <Link
                to="/services/light-gauge-steel"
                className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex">
                  <span className="text-3xl font-mono font-bold text-orange-600">
                    &#8226;
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    Sandwich Panels
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Insulated structural panels used for walls and roofing,
                  enhancing energy efficiency.
                </p>
              </div>
              <Link
                to="/services/sandwich-panels"
                className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              eyebrow="Capabilities"
              title="Engineering Solutions"
              description="Turnkey project services ranging from concept to commissioning, covering concrete & steel structures."
              className="mb-0"
            />

            <Link
              to="/services"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-orange-600 transition-colors shrink-0"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 10 DOCUMENTED ADVANTAGES OF PEB */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Documented Industry Benefits"
            title="Advantages of Pre-Fabricated & Engineered Building Structural Industry"
            description="The 10 key technical and economic advantages of pre-engineered building systems over conventional construction."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {companyInfo.advantages.map((adv) => (
              <div
                key={adv.id}
                className="bg-white border border-slate-200 p-5 rounded-xs flex flex-col justify-between hover:border-orange-500/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex">
                    <span className="text-3xl font-mono font-bold text-orange-600">
                      &#8226;
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1.5">
                      {adv.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STRUCTURAL PHOTOGRAPHY SHOWCASE (Modal Lightbox - no separate projects page) */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Gallery"
            title="Structural Execution & Facilities"
            description="Actual field photographs of pre-engineered buildings, steel erection works, foundations, and shed structures from G.B SOLUTIONS PEB archives."
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative aspect-[4/3] bg-slate-100 border border-slate-200 rounded-xs overflow-hidden cursor-pointer shadow-xs"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-snug">{img.title}</p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-xs bg-white/90 hover:bg-orange-600 text-slate-900 hover:text-white transition-colors opacity-0 group-hover:opacity-100 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <CTASection />

      {/* Lightbox for Gallery Photos */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages.map((img) => ({
          image: img.src,
          title: img.title,
        }))}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </>
  );
}
