import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";
import { companyInfo } from "../../data/company";
import { servicesData } from "../../data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 font-sans">
      {/* Upper Footer */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-600/10 border border-orange-500/30 flex items-center justify-center rounded-xs text-orange-500 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-wider">
                Industrial Engineering Precision & Turnkey Delivery
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                From sub-grade concrete foundations to pre-engineered steel
                superstructures since 2017.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>Get Project Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={companyInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>WhatsApp Us</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-40 h-40 bg-slate-800 border border-slate-700 flex items-center justify-center rounded-xs">
                <img src="/icon.png" />
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase">
                G.B SOLUTIONS <span className="text-orange-500">PEB</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-center">
              G.B. Solutions delivering turnkey pre-engineered buildings,
              pre-fabricated structural steel solutions, and civil construction
              services.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1 text-center">
              <p>
                <span className="text-slate-200 font-semibold">Promoter:</span>{" "}
                {companyInfo.promoter.name}
              </p>
              <p>
                <span className="text-slate-200 font-semibold">
                  Industry Experience:
                </span>{" "}
                {companyInfo.promoter.experience}
              </p>
              <p>
                <span className="text-slate-200 font-semibold">
                  Date of Incorporation:
                </span>{" "}
                {companyInfo.dateOfIncorporation}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col justify-center items-center">
            <h4 className="font-bold uppercase tracking-widest text-white text-lg">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm flex flex-col justify-center items-center">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-white transition-colors"
                >
                  Industries & Drivers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Engineering Services (3 cols) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col justify-center items-center">
            <h4 className="font-bold uppercase tracking-widest text-white text-lg">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs flex flex-col justify-center items-center">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-orange-400 transition-colors line-clamp-1"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-orange-400 font-semibold hover:underline"
                >
                  <span>View All 10 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col justify-center items-center">
            <h4 className="text-lg font-bold uppercase tracking-widest text-white">
              Registered Office
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400 flex flex-col justify-center items-center">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {companyInfo.contact.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phoneRaw}`}
                  className="hover:text-white font-mono text-slate-300"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-white text-slate-300 truncate"
                >
                  {companyInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 text-slate-500">
                <Clock className="w-4 h-4 shrink-0 text-slate-500" />
                <span>{companyInfo.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} {companyInfo.name}. All Rights Reserved.{" "}
            <span className="text-orange-400">Shine CoreX Technologies.</span>
          </p>
          <p className="text-[11px] text-slate-500">
            Engineered Pre-Fabricated Structural Building Solutions • Hyderabad,
            India
          </p>
        </div>
      </div>
    </footer>
  );
}
