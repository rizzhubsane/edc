import { useRef, useState } from "react";

export default function Gallery({ IMAGES, SVGs }) {
  const scrollRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  // IMAGES is an object: { "<path>": "<url>", ... }
  const galleryItems = Object.values(IMAGES).map((url, index) => ({
    id: index + 1,
    src: url, // ✅ direct URL now
    span: "",
  }));

  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="mx-8 relative pt-10 w-[90%] sm:w-[90%] md:w-[90%] lg:w-full">
        <div
          ref={scrollRef}
          className="w-full h-[500px] overflow-x-hidden overflow-y-hidden" // 👈 allow horizontal scroll if desired
        >
          <div className="grid grid-flow-col auto-cols-[200px] md:auto-cols-[400px] gap-4 grid-rows-2 content-center h-full">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setModalOpen(true);
                }}
                className={`flex items-center justify-center bg-blue-500 text-white rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 h-full ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 -translate-y-1/2 px-3 py-2 bg-gray-800/70 rounded hover:bg-gray-800"
        >
          <img src={SVGs.galleryleftarrow} alt="Left" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 -translate-y-1/2 px-3 py-2 bg-gray-800/70 rounded hover:bg-gray-800"
        >
          <img src={SVGs.galleryrightarrow} alt="Right" />
        </button>

        {/* Enlarged View */}
        {modalOpen && activeItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div
              onClick={() => setModalOpen(false)}
              className="flex items-center justify-center w-[67vw] h-[80vh] bg-transparent rounded-lg shadow-xl cursor-pointer"
            >
              <img
                src={activeItem.src}
                alt="Enlarged gallery item"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
