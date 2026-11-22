import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-medium text-slate-400">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-white transition-colors duration-200"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-slate-500" />
            {isLast || !item.to ? (
              <span className="text-orange-400 font-semibold truncate max-w-[240px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.to} 
                className="hover:text-white transition-colors duration-200 truncate max-w-[160px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
