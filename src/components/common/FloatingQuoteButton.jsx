import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export default function FloatingQuoteButton() {
  const location = useLocation();

  // Hide the floating button on the contact page
  if (location.pathname === '/contact') return null;

  return (
    <aside aria-label="Quick Quote" className="fixed bottom-6 right-6 z-50">
      <Link
        to="/contact"
        className="group flex items-center gap-2.5 px-5 py-3.5 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 border border-orange-400/40 hover:shadow-orange-600/30 hover:-translate-y-0.5"
      >
        <FileText className="w-4 h-4 text-white" />
        <span>Get a Quote</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </aside>
  );
}
