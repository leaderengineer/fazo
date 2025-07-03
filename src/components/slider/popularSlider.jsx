import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import computer from "../../assets/slider/computer.png";
import phone from "../../assets/slider/phone.png";
import laptop from "../../assets/slider/laptop.png";
import officeCamera from "../../assets/slider/office-camera.png";

import "swiper/css";
import "swiper/css/navigation";
import "./popularSlider.css"; // 🔗 Stil fayl

const PopularSlider = () => {
  return (
    <div className="category-slider">
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
          <div className="head-category">
            <div className="category">
              <h2>Компьютеры</h2>
              <img src={computer} alt="" />
            </div>
            <div className="category">
              <h2>Телефоны, планшеты</h2>
              <img src={phone} alt="" />
            </div>
            <div className="category">
              <h2>Ноутбуки</h2>
              <img src={laptop} alt="" />
            </div>
            <div className="category">
              <h2>Товары для офиса</h2>
              <img src={officeCamera} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="head-category">
            <div className="category">
              <h2>Компьютеры</h2>
              <img src={computer} alt="" />
            </div>
            <div className="category">
              <h2>Телефоны, планшеты</h2>
              <img src={phone} alt="" />
            </div>
            <div className="category">
              <h2>Ноутбуки</h2>
              <img src={laptop} alt="" />
            </div>
            <div className="category">
              <h2>Товары для офиса</h2>
              <img src={officeCamera} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="head-category">
            <div className="category">
              <h2>Компьютеры</h2>
              <img src={computer} alt="" />
            </div>
            <div className="category">
              <h2>Телефоны, планшеты</h2>
              <img src={phone} alt="" />
            </div>
            <div className="category">
              <h2>Ноутбуки</h2>
              <img src={laptop} alt="" />
            </div>
            <div className="category">
              <h2>Товары для офиса</h2>
              <img src={officeCamera} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="head-category">
            <div className="category">
              <h2>Компьютеры</h2>
              <img src={computer} alt="" />
            </div>
            <div className="category">
              <h2>Телефоны, планшеты</h2>
              <img src={phone} alt="" />
            </div>
            <div className="category">
              <h2>Ноутбуки</h2>
              <img src={laptop} alt="" />
            </div>
            <div className="category">
              <h2>Товары для офиса</h2>
              <img src={officeCamera} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularSlider;
