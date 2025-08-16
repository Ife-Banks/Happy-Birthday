import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Card.css'; 
import cardImage from "../public/WhatsApp Image 2025-08-16 at 18.24.35_171028d0.jpg"

const CardSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      autoHeight: false,
      centeredSlides: true,
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 40,
        }
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="swiper">
        <div className="swiper-wrapper">
          {/* First Slide */}
          <div className="swiper-slide bg">
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
          </div>

          {/* Second Slide */}
          <div className="swiper-slide">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;