import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Clock, 
  Wrench, 
  Layers, 
  Phone, 
  Mail, 
  FileText, 
  Cpu
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { companyInfo } from '../data/company';

export default function About() {
  const [equipmentFilter, setEquipmentFilter] = useState('');

  const filteredEquipment = equipmentFilter
    ? companyInfo.equipmentList.filter(e => e.name.toLowerCase().includes(equipmentFilter.toLowerCase()))
    : companyInfo.equipmentList;

  return (
    <>
      <SEO
        title="About Us | Corporate Profile & Project Report"
        description="Detailed corporate profile of G.B SOLUTION PEB. Promoter Mr. G. Satish, 15+ years experience, plant & machinery inventory, and industrial shed project proposal."
      />

      <PageHero
        title="About G.B SOLUTION PEB"
        eyebrow="Corporate Profile"
        subtitle="Industrial Shed and Civil Contractors delivering turnkey pre-engineered buildings, structural steel fabrication, and integrated civil construction solutions."
        breadcrumbs={[{ label: "About Us" }]}
        image="/images/og/shed_inner0.png"
        badgeText="Incorporated 01-07-2017 • Hyderabad, Telangana"
      />

      {/* 1. Brief About Promoters, Management & Organisation */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Company Information"
                title="Brief About The Promoters, Management and Organisation"
                description="M/s G.B SOLUTION is an established proprietorship enterprise incorporated in 2017, operating under experienced structural engineering leadership."
              />

              <div className="mt-8 border border-slate-200 rounded-xs overflow-hidden shadow-xs">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-500 uppercase w-1/3">Name of the Company</td>
                      <td className="px-4 py-3 font-bold text-slate-900">{companyInfo.legalName}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono font-bold text-slate-500 uppercase">Registered Office</td>
                      <td className="px-4 py-3 text-slate-700">{companyInfo.contact.address.full}</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-500 uppercase">Constitution</td>
                      <td className="px-4 py-3 font-semibold text-slate-900">{companyInfo.constitution}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono font-bold text-slate-500 uppercase">Date Of Incorporation</td>
                      <td className="px-4 py-3 font-mono text-slate-700">{companyInfo.dateOfIncorporation}</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-500 uppercase">Name of the Promoter</td>
                      <td className="px-4 py-3 font-bold text-orange-600">{companyInfo.promoter.name}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono font-bold text-slate-500 uppercase">Promoter Contact</td>
                      <td className="px-4 py-3 font-mono text-slate-700">
                        Phone: {companyInfo.promoter.phone} | Mail: {companyInfo.promoter.email}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-slate-200 bg-slate-900 rounded-xs overflow-hidden shadow-sm">
                <img
                  src="/images/og/shed_gate.png"
                  alt="G.B SOLUTION PEB Facility Structure"
                  className="w-full aspect-[4/5] object-cover object-center filter brightness-95"
                />
                <div className="p-4 bg-slate-900 text-white text-xs">
                  <p className="font-bold text-orange-400">G.B SOLUTION PEB</p>
                  <p className="text-slate-400 mt-0.5">Industrial Shed & Civil Construction Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Promoters Background: Mr G Satish */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-xs shadow-xs">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest text-orange-600 uppercase">
              <Award className="w-4 h-4 text-orange-600" />
              <span>Promoter's Background</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Experience That Shapes Every Structure.
            </h2>

            <p className="mt-3 text-orange-600 font-bold text-base">
              {companyInfo.promoter.name} • {companyInfo.promoter.experience} in Pre-Fabricated & Engineered Building Structural Products
            </p>

            <div className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong>Mr G Satish</strong> is a seasoned professional with over 15 years of expertise in the field of pre-fabricated and engineered building structural products. G Satish has a strong technical and business foundation, he has successfully led and contributed to numerous projects that emphasize innovation, efficiency, and sustainability in structural engineering.
              </p>
              <p>
                Under his leadership, the company has embraced cutting-edge manufacturing techniques and advanced engineering principles to deliver high-quality, cost-effective solutions tailored to diverse construction needs. His strategic vision focuses on fostering industry collaborations, optimizing production efficiency, and ensuring strict adherence to compliance standards.
              </p>
              <p>
                With a deep understanding of market dynamics and evolving construction trends, he continues to spearhead advancements that drive growth, enhance operational excellence, and reinforce the company’s reputation as a trusted name in the industry.
              </p>
              <p>
                Through his expertise and commitment to excellence, he remains dedicated to shaping the future of pre-fabricated structural solutions, contributing to the transformation of modern infrastructure development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project and Infrastructure Proposal & Social Impact */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Proposal"
            title="Project and Infrastructure"
            description="The Company is requesting for Land and proposes to establish an Industrial Shed - Pre-Fabricated & Engineered Building Structural Industry in Andhra Pradesh."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-xs">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-600" />
                <span>Employment & Social Impact</span>
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                The allotment of land under the Scheduled Castes scheme will foster economic empowerment, social inclusion, and sustainable development for marginalized communities. By facilitating the establishment of industries and enterprises, this initiative will create employment opportunities, enhance skill development, and improve livelihoods. Through equitable access to resources, the project aims to reduce socio-economic disparities and promote long-term progress, ensuring a more inclusive and resilient society.
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-slate-200">
                {companyInfo.projectProposal.socialImpact.slice(1).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-orange-400 font-bold">Project Overview</span>
                <h4 className="text-xl font-extrabold text-white mt-1">Proposed Industrial Unit</h4>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  {companyInfo.projectProposal.conclusion}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
                <p><strong className="text-white">Proposed Industry:</strong> Pre-Fabricated & Engineered Building Structural Industry</p>
                <p className="mt-1"><strong className="text-white">Proposed State:</strong> Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Details of Plant Machinery & Construction Equipment */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeading
              eyebrow="Equipment Fleet"
              title="Details of Plant Machinery, Furniture & Equipment"
              description="Complete inventory of heavy construction equipment and plant machinery supporting G.B SOLUTION PEB operations."
              className="mb-0"
            />

            <div className="mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search equipment..."
                value={equipmentFilter}
                onChange={(e) => setEquipmentFilter(e.target.value)}
                className="px-4 py-2 text-xs border border-slate-300 rounded-xs focus:outline-none focus:border-orange-600 bg-white"
              />
            </div>
          </div>

          <div className="border border-slate-200 rounded-xs overflow-hidden bg-white shadow-xs">
            <div className="max-h-[500px] overflow-y-auto">
              <table className="w-full text-xs text-left">
                <thead className="sticky top-0 bg-slate-900 text-white z-10">
                  <tr>
                    <th className="px-4 py-3 font-mono uppercase tracking-wider">#</th>
                    <th className="px-4 py-3 font-mono uppercase tracking-wider">Class</th>
                    <th className="px-4 py-3 font-mono uppercase tracking-wider">Asset Description</th>
                    <th className="px-4 py-3 font-mono uppercase tracking-wider text-right">Qty / Set</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredEquipment.map((eq, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-2.5 font-mono text-slate-400">{i + 1}</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-500">{eq.class}</td>
                      <td className="px-4 py-2.5 font-medium text-slate-900">{eq.name}</td>
                      <td className="px-4 py-2.5 font-mono text-right font-bold text-orange-600">{eq.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 text-right">
              Total {companyInfo.equipmentList.length} Heavy Construction Equipment Assets Documented
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Discuss Your Next Industrial Shed Project"
        description="Connect directly with Mr. G. Satish and our engineering team at IDA Nacharam, Hyderabad."
      />
    </>
  );
}
