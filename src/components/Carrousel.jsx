import React, { useEffect, useRef } from "react";

const Carrousel = () => {
  const carrouselRef = useRef(null);

  useEffect(() => {
    const carrousel = carrouselRef.current;
    let interval;

    const startCarrousel = () => {
      interval = setInterval(() => {
        carrousel.scrollBy({
          left: carrousel.offsetWidth,
          behavior: "smooth",
        });

        // Revenir au début lorsque la fin est atteinte
        if (
          carrousel.scrollLeft + carrousel.offsetWidth >=
          carrousel.scrollWidth
        ) {
          setTimeout(() => {
            carrousel.scrollTo({ left: 0, behavior: "smooth" });
          }, 2000);
        }
      }, 3000);
    };

    startCarrousel();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex space-x-6 w-[1200px] md:w-[1600px] xl:w-[2000px] animate-scroll overflow-hidden"
        ref={carrouselRef}
      >
        {[
          { src: "logo-hm.png", alt: "Logo H&M" },
          { src: "logo-ob.png", alt: "Logo Oberoi" },
          { src: "logo-lev.png", alt: "Logo Levi's" },
          { src: "logo-lac.png", alt: "Logo Lacoste" },
          { src: "logo-sho.png", alt: "Logo Shopify" },
          { src: "logo-ama.png", alt: "Logo Amazon" },
        ].map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 xl:w-40 xl:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;