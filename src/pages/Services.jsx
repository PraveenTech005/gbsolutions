import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, ShieldCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/common/ServiceCard';
import CTASection from '../components/common/CTASection';
import { servicesData } from '../data/services';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'Superstructure Engineering', label: 'Superstructure' },
    { key: 'Structural Products', label: 'Structural Products' },
    { key: 'Building Envelope', label: 'Roofing & Envelope' },
    { key: 'Civil Construction', label: 'Civil Works' },
    { key: 'Industrial Contracting', label: 'Industrial Sheds' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <>
      <SEO
        title="Engineering Services | Pre-Engineered Buildings & Civil Works"
        description="Comprehensive industrial services by G.B SOLUTION PEB: Pre-Engineered Buildings, Steel Frames, Precast Concrete Panels, Modular Units, Sandwich Panels, and Civil Construction."
      />

      <PageHero
        title="Engineering Solutions"
        eyebrow="Turnkey Services"
        subtitle="End-to-end industrial construction capabilities: pre-engineered buildings, steel frames, precast concrete panels, modular units, light gauge steel, sandwich panels, and turnkey civil construction."
        breadcrumbs={[{ label: "Services" }]}
        image="/images/og/shed_pre_build.png"
        badgeText="10 Specialized Industrial Engineering Capabilities"
      />

      {/* Services Filter Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 hidden sm:inline">
              Filter By Domain:
            </span>
            <div className="flex items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap ${
                    selectedCategory === cat.key
                      ? "bg-slate-900 text-white border border-slate-900"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-transparent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <span className="text-xs font-mono text-slate-400 shrink-0">
              Showing {filteredServices.length} of {servicesData.length}
            </span>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Lifecycle Walkthrough based strictly on report */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Turnkey Delivery Workflow"
            title="From Concept to Commissioning"
            description="Our turnkey project services range from concept to commissioning, covering concrete & steel structures in totality."
            centered={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-slate-200 p-6 rounded-xs bg-slate-50 relative">
              <span className="text-3xl font-black text-orange-500 font-sans">01</span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Design & Anchor Detailing</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Quick design turnaround on critical items such as anchor bolt drawings and building reactions.
              </p>
            </div>

            <div className="border border-slate-200 p-6 rounded-xs bg-slate-50 relative">
              <span className="text-3xl font-black text-orange-500 font-sans">02</span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Factory Steel Fabrication</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Components manufactured in a controlled environment using advanced machinery for high quality control.
              </p>
            </div>

            <div className="border border-slate-200 p-6 rounded-xs bg-slate-50 relative">
              <span className="text-3xl font-black text-orange-500 font-sans">03</span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Concrete & Civil Works</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Undertakes all kinds of concrete constructions: concrete foundations, concrete columns, and brick masonry flooring.
              </p>
            </div>

            <div className="border border-slate-200 p-6 rounded-xs bg-slate-50 relative">
              <span className="text-3xl font-black text-orange-500 font-sans">04</span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Sequenced On-Site Erection</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                On-time delivery of the steel, coordinated and sequenced the way you plan on performing the erection process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Technical Assistance or Quotation?"
        description="Share your plot requirements, clear-span needs, and building usage with our engineering team."
      />
    </>
  );
}
