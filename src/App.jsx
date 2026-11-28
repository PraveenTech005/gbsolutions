import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import FloatingQuoteButton from './components/common/FloatingQuoteButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-white">
      <div className="text-5xl font-black text-orange-600 font-sans">404</div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
        Page Not Found
      </h1>
      <p className="text-slate-600 mt-3 text-sm max-w-md">
        The requested URL was not found on the G.B SOLUTIONS PEB corporate portal. Please check the address or return to the homepage.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors"
        >
          Return to Homepage
        </Link>
        <Link
          to="/services"
          className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs uppercase tracking-wider rounded-xs transition-colors"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-orange-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingQuoteButton />
      </div>
    </Router>
  );
}
