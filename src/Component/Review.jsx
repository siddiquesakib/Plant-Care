import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3} // 2 cards per view
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden ">
              {/* Image */}
              <div className="relative">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white text-lg font-semibold">
                    {review.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <p className="text-gray-600 font-medium mb-3">{`"${review.review}"`}</p>
                <p className="text-black text-sm mb-2">{review.location}</p>
                <p className="text-yellow-500 font-semibold">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewCarousel;
