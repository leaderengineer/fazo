import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";
import sliderImage from "../../assets/slider-image.png";

const SwiperSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={sliderImage} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="Slide 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
