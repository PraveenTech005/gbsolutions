import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/company';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 border-b border-slate-800 transition-all duration-200">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-800 border border-slate-700 flex items-center justify-center rounded-xs group-hover:border-orange-500 transition-colors duration-200">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20V7H13.5V17H20V20H4V17H10.5V7H4V4Z" fill="#F8FAFC" />
                <path d="M15 10L18 12L15 14" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-sans">
                  G.B SOLUTION
                </span>
                <span className="px-1.5 py-0.5 text-[11px] font-black uppercase tracking-wider bg-orange-600 text-white rounded-xs">
                  PEB
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest -mt-0.5">
                Industrial Shed & Civil Contractors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-xs ${
                    isActive
                      ? "text-orange-400 bg-slate-800/60 border-b-2 border-orange-500"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Get a Quote */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors duration-200 shadow-sm"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 bg-orange-600 text-white font-bold text-[11px] uppercase tracking-wider rounded-xs"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xs text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xs text-base font-semibold ${
                  isActive
                    ? "bg-slate-800 text-orange-400 border-l-4 border-orange-500"
                    : "text-slate-200 hover:bg-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm uppercase tracking-wider rounded-xs"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
