import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && onNavigate && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];
  const imgSrc = typeof currentItem === 'string' ? currentItem : currentItem.image || currentItem.src;
  const imgTitle = typeof currentItem === 'string' ? '' : currentItem.title || currentItem.caption || '';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-orange-600 text-white transition-colors duration-200"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-slate-800/80 hover:bg-orange-600 text-white transition-colors duration-200"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation - Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-slate-800/80 hover:bg-orange-600 text-white transition-colors duration-200"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div 
        className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgSrc}
          alt={imgTitle || "G.B SOLUTIONS Project Photo"}
          className="max-h-[75vh] max-w-full object-contain rounded-sm border border-slate-700 shadow-2xl"
        />

        {/* Caption & Counter */}
        <div className="mt-4 text-center">
          {imgTitle && (
            <p className="text-white text-sm sm:text-base font-medium">
              {imgTitle}
            </p>
          )}
          {images.length > 1 && (
            <p className="text-slate-400 text-xs mt-1">
              Image {currentIndex + 1} of {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
