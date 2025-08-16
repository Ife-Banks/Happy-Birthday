import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './card.css';

import cardImage from "../public/WhatsApp Image 2025-08-16 at 18.24.35_171028d0.jpg";

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 2;

  return (
    <div className="wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        speed={500}
        loop={true}
        grabCursor={true}
        navigation={true}
        pagination={{
          type: 'fraction',
          el: '.swiper-pagination',
          clickable: true,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        onInit={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
      >
        {/* First Slide */}
        <SwiperSlide className="bg">
          {/* Your slide content */}
          <div className="pyro left">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="pyro center">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="pyro right">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-md-10 mauto">
                    <div className="img-container">
                      <div className="imgset">
                        <img width="100%" height="" src={cardImage} alt="Card" />
                      </div>
                      <div className="card text-center">
                        <div className="position-relative progress-wrapper" >
                          <div className="wave" data-progress="90%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          {/* Your slide content */}
          <div className="pyro left">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="pyro center">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="pyro right">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="swiper-avatar"></div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."</p>
                <p className="cite">- Katie Kookaburra, Cyclist</p>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CardSlider;







