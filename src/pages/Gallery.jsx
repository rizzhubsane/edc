import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const GalleryPage = ({ IMAGES }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filters = ['All', 'BECon', 'Moonshot', 'Workshops', 'Team'];

  const galleryItems = Object.entries(IMAGES || {}).map(([path, url], index) => {
    // Determine a mock category based on index just to keep the filters working,
    // or you can assign them all to 'All' if you prefer.
    const categories = ['BECon', 'Moonshot', 'Workshops', 'Team'];
    const category = categories[index % categories.length];
    
    return {
      id: index + 1,
      src: url,
      category: category,
      title: `Gallery Image ${index + 1}`,
      year: '2024'
    };
  });

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImage) return;
      
      const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
      
      if (e.key === 'Escape') setLightboxImage(null);
      if (e.key === 'ArrowRight' && currentIndex < filteredItems.length - 1) {
        setLightboxImage(filteredItems[currentIndex + 1]);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setLightboxImage(filteredItems[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, filteredItems]);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(13, 11, 46)"
      gradientBackgroundEnd="rgb(26, 17, 69)"
      firstColor="45, 27, 105"
      secondColor="56, 189, 248"
      thirdColor="37, 99, 235"
      fourthColor="13, 11, 46"
      fifthColor="58, 31, 142"
      pointerColor="56, 189, 248"
      blendingValue="hard-light"
      size="70%"
      containerClassName="min-h-screen"
      className="w-full"
    >
      {/* Page content */}
      <div className="relative z-10">

      {/* Page Header */}
      <Section variant="dark" className="!bg-transparent pt-32 lg:pt-40 pb-8">
        <div className="max-w-[800px] text-center mx-auto">
          <h1 className="font-heading font-bold text-text-primary text-[clamp(3.5rem,7vw,5.5rem)] mb-4">
            Gallery
          </h1>
          <p className="font-body text-text-body text-lg md:text-xl mb-10">
            eDC through the years.
          </p>
        </div>
      </Section>


      {/* Gallery Grid */}
      <Section variant="dark" className="!bg-transparent pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {filteredItems.map((item, index) => {
            const getBentoClass = (i) => {
              const pattern = i % 6;
              switch (pattern) {
                case 0: return 'md:col-span-2 md:row-span-2';
                case 1: return 'md:col-span-1 md:row-span-1';
                case 2: return 'md:col-span-1 md:row-span-1';
                case 3: return 'md:col-span-2 md:row-span-1';
                case 4: return 'md:col-span-1 md:row-span-2';
                case 5: return 'md:col-span-1 md:row-span-1';
                default: return '';
              }
            };

            return (
            <div 
              key={item.id}
              className={`relative rounded-[12px] overflow-hidden cursor-pointer group ${getBentoClass(index)}`}
              onClick={() => setLightboxImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          )})}
        </div>
      </Section>

      </div>{/* end relative z-10 */}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setLightboxImage(null)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.title} 
              className="max-w-full max-h-[85vh] object-contain rounded-[8px] shadow-2xl"
            />
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
            <button 
              className="pointer-events-auto p-3 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
                if (currentIndex > 0) setLightboxImage(filteredItems[currentIndex - 1]);
              }}
              disabled={filteredItems.findIndex(item => item.id === lightboxImage.id) === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              className="pointer-events-auto p-3 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
                if (currentIndex < filteredItems.length - 1) setLightboxImage(filteredItems[currentIndex + 1]);
              }}
              disabled={filteredItems.findIndex(item => item.id === lightboxImage.id) === filteredItems.length - 1}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </BackgroundGradientAnimation>
  );
};

export default GalleryPage;
