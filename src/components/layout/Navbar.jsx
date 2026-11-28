import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { products } from "../../data/products";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [selectedProductCategory, setSelectedProductCategory] = useState(
    "Industrial Buildings",
  );
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 180);
  };

  const navLinksBefore = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const navLinksAfter = [
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all duration-200">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile menu button - Positioned on the LEFT in mobile view */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -ml-2 rounded-xs text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-orange-600" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo / Wordmark */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                <img
                  src="/icon.png"
                  alt="G.B SOLUTIONS PEB"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase font-sans group-hover:text-orange-600 transition-colors">
                    G.B SOLUTIONS
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-orange-600 text-white rounded-xs">
                    PEB
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-widest -mt-0.5 truncate max-w-[200px] sm:max-w-none">
                  Industrial Shed & Civil Contractors
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Right Aligned on desktop) */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1.5">
            {navLinksBefore.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 lg:px-3.5 py-2 text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-xs ${
                    isActive
                      ? "text-orange-600 bg-orange-50/80 border-b-2 border-orange-600 font-bold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Products Dropdown on Hover in lg / md screen */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-2.5 lg:px-3.5 py-2 text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-xs ${
                    isActive || productsDropdownOpen
                      ? "text-orange-600 bg-orange-50/80 border-b-2 border-orange-600 font-bold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
                  }`
                }
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen
                      ? "rotate-180 text-orange-600"
                      : "text-slate-500"
                  }`}
                />
              </NavLink>

              {/* Dropdown Menu on Hover */}
              {productsDropdownOpen && (
                <div
                  className="absolute top-full -left-28 lg:-left-20 pt-2 w-[640px] lg:w-[720px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white border border-slate-200 rounded-xs shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-12 divide-x divide-slate-200">
                      {/* Left Column: Product Categories (5 cols) */}
                      <div className="col-span-5 bg-slate-50/70 flex flex-col">
                        <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                            Categories ({Object.keys(products).length})
                          </span>
                          <span className="text-[10px] text-orange-600 font-mono font-bold">
                            Hover to view
                          </span>
                        </div>

                        <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-100">
                          {Object.keys(products).map((categoryName) => {
                            const isSelected =
                              selectedProductCategory === categoryName;
                            const subItems = products[categoryName] || [];

                            return (
                              <button
                                key={categoryName}
                                type="button"
                                onMouseEnter={() =>
                                  setSelectedProductCategory(categoryName)
                                }
                                onClick={() => {
                                  navigate(
                                    `/products?category=${encodeURIComponent(categoryName)}`,
                                  );
                                  setProductsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-3.5 py-2.5 text-xs transition-colors flex items-center justify-between group ${
                                  isSelected
                                    ? "bg-white text-orange-600 font-bold border-l-4 border-orange-600 shadow-xs"
                                    : "text-slate-700 hover:bg-white hover:text-slate-900"
                                }`}
                              >
                                <span className="truncate pr-2">
                                  {categoryName}
                                </span>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  <span
                                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-xs ${
                                      isSelected
                                        ? "bg-orange-100 text-orange-700 font-bold"
                                        : "bg-slate-200/80 text-slate-600 group-hover:bg-slate-300"
                                    }`}
                                  >
                                    {subItems.length}
                                  </span>
                                  <ChevronRight
                                    className={`w-3.5 h-3.5 ${
                                      isSelected
                                        ? "text-orange-600"
                                        : "text-slate-400 group-hover:text-slate-600"
                                    }`}
                                  />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Column: Sub-Products List (7 cols) */}
                      <div className="col-span-7 bg-white flex flex-col justify-between">
                        <div>
                          <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                            <div>
                              <span className="text-xs font-bold text-slate-900">
                                {selectedProductCategory}
                              </span>
                              <span className="text-[11px] text-slate-500 ml-2">
                                (
                                {
                                  (products[selectedProductCategory] || [])
                                    .length
                                }{" "}
                                sub-products)
                              </span>
                            </div>
                            <Link
                              to={`/products?category=${encodeURIComponent(selectedProductCategory)}`}
                              onClick={() => setProductsDropdownOpen(false)}
                              className="text-[11px] font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                            >
                              <span>Full Scope</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="p-4 max-h-[320px] overflow-y-auto space-y-1.5">
                            {(products[selectedProductCategory] || []).map(
                              (subItem, idx) => (
                                <Link
                                  key={idx}
                                  to={`/products?category=${encodeURIComponent(selectedProductCategory)}`}
                                  onClick={() => setProductsDropdownOpen(false)}
                                  className="flex items-center gap-2.5 p-2 rounded-xs hover:bg-orange-50 text-xs font-medium text-slate-700 hover:text-orange-600 transition-colors group"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 group-hover:scale-125 transition-transform"></span>
                                  <span className="leading-snug">
                                    {subItem.trim()}
                                  </span>
                                </Link>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                          <Link
                            to="/products"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="text-slate-700 font-semibold hover:text-orange-600 inline-flex items-center gap-1 text-[11px]"
                          >
                            <span>Explore All 22 Product Categories</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                          <Link
                            to="/contact"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="font-bold text-orange-600 hover:text-orange-500 uppercase tracking-wider text-[11px] inline-flex items-center gap-1"
                          >
                            <span>Get Quote</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinksAfter.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 lg:px-3.5 py-2 text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-xs ${
                    isActive
                      ? "text-orange-600 bg-orange-50/80 border-b-2 border-orange-600 font-bold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-lg max-h-[85vh] overflow-y-auto">
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xs text-base font-semibold ${
                isActive
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xs text-base font-semibold ${
                isActive
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            About
          </NavLink>

          {/* Mobile Products Link + Sub-products Expandable Section */}
          <div className="border-y border-slate-100 py-1">
            <div className="flex items-center justify-between">
              <NavLink
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex-grow px-4 py-2.5 rounded-xs text-base font-semibold ${
                    isActive
                      ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                Products
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="p-2.5 text-slate-500 hover:text-orange-600 focus:outline-none"
                aria-label="Toggle products dropdown"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180 text-orange-600" : ""
                  }`}
                />
              </button>
            </div>

            {/* Mobile Expanded Products List */}
            {mobileProductsOpen && (
              <div className="mx-2 p-3 space-y-3 max-h-[320px] overflow-y-auto bg-slate-50 rounded-xs border border-slate-200">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <span>Categories ({Object.keys(products).length})</span>
                  <Link
                    to="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-orange-600 hover:underline"
                  >
                    View All →
                  </Link>
                </div>
                {Object.entries(products).map(([categoryName, subItems]) => (
                  <div
                    key={categoryName}
                    className="py-1 border-b border-slate-100 last:border-b-0"
                  >
                    <Link
                      to={`/products?category=${encodeURIComponent(categoryName)}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold text-slate-900 hover:text-orange-600 flex items-center justify-between"
                    >
                      <span>{categoryName}</span>
                      <span className="text-[10px] text-slate-500 font-mono bg-white px-1.5 py-0.5 rounded-xs border border-slate-200">
                        {subItems.length}
                      </span>
                    </Link>
                    <div className="pl-2 mt-1 space-y-1">
                      {subItems.map((sub, i) => (
                        <Link
                          key={i}
                          to={`/products?category=${encodeURIComponent(categoryName)}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] text-slate-600 hover:text-orange-600 flex items-center gap-1.5 py-0.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0"></span>
                          <span className="truncate">{sub.trim()}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xs text-base font-semibold ${
                isActive
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/industries"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xs text-base font-semibold ${
                isActive
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Industries
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xs text-base font-semibold ${
                isActive
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Contact
          </NavLink>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm uppercase tracking-wider rounded-xs shadow-xs"
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
