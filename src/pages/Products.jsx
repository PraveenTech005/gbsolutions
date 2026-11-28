import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Building2,
  Warehouse,
  Factory,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CTASection from "../components/common/CTASection";
import { products } from "../data/products";

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(initialCategory || "all");

  useEffect(() => {
    if (initialCategory) {
      setSelectedFilter(initialCategory);
    }
  }, [initialCategory]);

  const categories = Object.keys(products);

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    const entries = Object.entries(products);

    return entries
      .filter(([catName, subItems]) => {
        // Filter by category tab if selected
        if (selectedFilter !== "all" && catName !== selectedFilter) {
          return false;
        }

        // Filter by search query
        if (!searchTerm.trim()) return true;

        const query = searchTerm.toLowerCase();
        const matchesCategory = catName.toLowerCase().includes(query);
        const matchesSubItem = subItems.some((item) =>
          item.toLowerCase().includes(query)
        );

        return matchesCategory || matchesSubItem;
      })
      .map(([catName, subItems]) => {
        if (!searchTerm.trim()) {
          return [catName, subItems];
        }
        const query = searchTerm.toLowerCase();
        // Highlight matching sub-items
        const matched = subItems.filter(
          (item) =>
            item.toLowerCase().includes(query) ||
            catName.toLowerCase().includes(query)
        );
        return [catName, matched.length > 0 ? matched : subItems];
      });
  }, [searchTerm, selectedFilter]);

  const getCategoryIcon = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes("warehouse") || name.includes("godown")) {
      return <Warehouse className="w-5 h-5 text-orange-600" />;
    }
    if (name.includes("mill") || name.includes("plant") || name.includes("industr")) {
      return <Factory className="w-5 h-5 text-orange-600" />;
    }
    return <Building2 className="w-5 h-5 text-orange-600" />;
  };

  return (
    <>
      <SEO
        title="Products & Building Systems | G.B SOLUTIONS PEB"
        description="Explore the comprehensive building products and sub-products catalog of G.B SOLUTIONS PEB: Industrial Buildings, Warehouses, Godowns, Rice Mills, Cotton Mills, Convention Halls, and Heavy Steel Structures."
      />

      <PageHero
        title="Products & Building Systems"
        eyebrow="Engineered Catalog"
        subtitle="Turnkey pre-engineered steel buildings, industrial sheds, logistics warehouses, processing plants, and commercial structures tailored to client specifications."
        breadcrumbs={[{ label: "Products" }]}
        image="/images/og/shed_outer1.png"
        badgeText={`${categories.length} Specialized Building Product Classifications`}
      />

      {/* Search & Category Filter Section */}
      <section className="bg-white border-b border-slate-200 py-8 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products & sub-products (e.g. Rice Mill, Godown, Warehouse)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xs focus:outline-none focus:border-orange-600 focus:bg-white text-slate-900 transition-colors"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Quick Filter */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap ${
                  selectedFilter === "all"
                    ? "bg-orange-600 text-white font-bold shadow-xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                All Categories ({categories.length})
              </button>
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap ${
                    selectedFilter === cat
                      ? "bg-orange-600 text-white font-bold shadow-xs"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Building Portfolio Classifications
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Showing {filteredProducts.length} product categories
                {searchTerm ? ` matching "${searchTerm}"` : ""}
              </p>
            </div>

            {selectedFilter !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className="text-xs font-bold text-orange-600 hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 p-12 text-center rounded-xs">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">
                No matching products found
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                No products or sub-products matched "{searchTerm}". Try a different keyword or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedFilter("all");
                }}
                className="mt-5 px-5 py-2.5 bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xs"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map(([categoryName, subItems]) => (
                <div
                  key={categoryName}
                  className="bg-white border border-slate-200 hover:border-orange-500/50 rounded-xs shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-10 h-10 rounded-xs bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {getCategoryIcon(categoryName)}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xs">
                        {subItems.length} Products
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-4 group-hover:text-orange-600 transition-colors">
                      {categoryName}
                    </h3>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Sub-Products & Scope:
                      </p>
                      <ul className="space-y-2">
                        {subItems.map((sub, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                            <span>{sub.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Standard / Turnkey Execution
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-500 transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Turnkey Assurance Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xs bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 text-orange-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Custom Engineering Design
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Tailored clear-spans, anchor bolt configurations, and building reactions planned around your facility's operational workflow.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xs bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 text-orange-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Precision Steel Fabrication
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Factory-engineered structural members with stringent quality tolerances, high strength-to-weight ratios, and durable protective coatings.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xs bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 text-orange-600">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Turnkey Civil Integration
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Integrated execution covering concrete foundations, column base pedestals, brick masonry, and flooring alongside steel superstructure erection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Industrial Shed or Facility?"
        description="Share your plot size, building type, and clear-span specifications to receive a detailed engineering proposal from G.B SOLUTIONS PEB."
        primaryButtonText="Request Product Proposal"
        primaryButtonLink="/contact"
      />
    </>
  );
}
