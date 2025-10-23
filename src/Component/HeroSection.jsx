import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  const slides = [
    {
      img: "https://www.thejunglecollective.com.au/wp-content/uploads/2024/05/usqstuzgzl5l965sl.webp",
      title: "Welcome to GreenNest",
      subtitle: "Discover the beauty of nature at home",
    },
    {
      img: "https://www.thejunglecollective.com.au/wp-content/uploads/2024/05/usqstuzgzl5l965sl.webp",
      title: "Bring Nature Indoors",
      subtitle: "Create your own little green paradise",
    },
    {
      img: "https://www.thejunglecollective.com.au/wp-content/uploads/2024/05/usqstuzgzl5l965sl.webp",
      title: "Care. Grow. Thrive",
      subtitle: "Because every leaf deserves love",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slide, id) => (
        <SwiperSlide key={id}>
          <div className="relative w-full h-[500px]">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
