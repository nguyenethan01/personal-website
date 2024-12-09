import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Add custom styles for the navigation arrows
import './ImageCarousel.css'

export function ImageCarousel() {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1000}
        className="custom-swiper"
      >
        <SwiperSlide>
          <div className="flex flex-col max-h-screen">
            <div className="h-[70vh]">
              <img 
                src="/images/romephoto/romephoto-1600w.jpg"
                alt="Rome Photo"
                className="w-full h-full object-contain"
                loading="lazy"
                srcSet="
                  /images/romephoto/romephoto-800w.webp 800w,
                  /images/romephoto/romephoto-1200w.webp 1200w,
                  /images/romephoto/romephoto-1600w.webp 1600w"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 80vw,
                       1600px"
              />
            </div>
            <div className="p-4 text-sm overflow-y-auto">
              <h3 className="font-bold mb-2">Colosseum, Rome</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <span>📍 Rome, Italy</span>
                <span>📸 Sony A7IV</span>
                <span>🎞️ f/2.8</span>
                <span>⚡ ISO 100</span>
                <span>⏱️ 1/250s</span>
                <span>🔍 24mm</span>
              </div>
              <p className="mt-2 text-gray-700">
                Captured during sunset, this view of the Colosseum showcases the ancient architecture against the warm evening light.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col max-h-screen">
            <div className="h-[70vh]">
              <img 
                src={`${import.meta.env.BASE_URL}images/icelanddog/icelanddog-1600w.jpg`}
                alt="Iceland Dog Photo"
                className="w-full h-full object-contain"
                loading="lazy"
                srcSet={`
                  ${import.meta.env.BASE_URL}images/icelanddog/icelanddog-800w.webp 800w,
                  ${import.meta.env.BASE_URL}images/icelanddog/icelanddog-1200w.webp 1200w,
                  ${import.meta.env.BASE_URL}images/icelanddog/icelanddog-1600w.webp 1600w`}
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 80vw,
                       1600px"
              />
            </div>
            <div className="p-4 text-sm overflow-y-auto">
              <h3 className="font-bold mb-2">Icelandic Dog</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <span>📍 Reykjavik, Iceland</span>
                <span>📸 Sony A7IV</span>
                <span>🎞️ f/1.8</span>
                <span>⚡ ISO 400</span>
                <span>⏱️ 1/500s</span>
                <span>🔍 35mm</span>
              </div>
              <p className="mt-2 text-gray-700">
                A friendly Icelandic dog enjoying the scenic landscapes near Reykjavik.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}