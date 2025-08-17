import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './card.css';

import cardImage from "../public/WhatsApp Image 2025-08-16 at 18.24.35_171028d0.jpg";

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const totalSlides = 2;
  const [isMobile, setIsMobile] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = `Happy Birthday, Chidi 🎉💛.
I'm so grateful for the gift of your life and for all the love, kindness, and support you've shown me. You've been more than a friend.You've been a blessing, a confidant, and a source of joy. Your presence in my life reminds me of the beauty of true friendship.

"A sweet friendship refreshes the soul." Proverbs 27:9 💐
May God continue to bless you, keep you, and make you shine even brighter in the years ahead.

With love and gratitude,
Toke ❤`;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let typingInterval;
    let cursorInterval;

    if (startTyping && currentIndex < fullText.length) {
      typingInterval = setInterval(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);

      cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
    }

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [startTyping, currentIndex, fullText]);

  // Reset typing when leaving second slide
  useEffect(() => {
    if (currentSlide !== 1) {
      setStartTyping(false);
      setDisplayText('');
      setCurrentIndex(0);
    } else {
      setStartTyping(true);
    }
  }, [currentSlide]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pyroVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div 
      className="wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={isMobile ? 20 : 40}
        slidesPerView={1}
        centeredSlides={true}
        speed={500}
        loop={true}
        grabCursor={true}
        navigation={!isMobile}
        pagination={{
          type: 'fraction',
          el: '.swiper-pagination',
          clickable: true,
        }}
        touchRatio={0.5}
        touchAngle={45}
        shortSwipes={false}
        longSwipes={true}
        threshold={15}
        followFinger={true}
        resistance={true}
        resistanceRatio={0.4}
        touchStartPreventDefault={!isMobile}
        edgeSwipeDetection={isMobile}
        edgeSwipeThreshold={20}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
        }}
        onInit={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {/* First Slide */}
 <SwiperSlide className="bg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
            
            <motion.section 
              className="section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-md-10 mauto">
                    <motion.div 
                      className="img-container"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="imgset">
                        <motion.img 
                          width="100%" 
                          height="" 
                          src={cardImage} 
                          alt="Card"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        />
                      </div>
                      <div className="card text-center">
                        <div className="position-relative progress-wrapper">
                          <motion.div 
                            className="wave" 
                            data-progress="90%"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </SwiperSlide>
        {/* Second Slide with Typewriter */}
        <SwiperSlide className='bg'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
            
            <motion.p 
              className='p-text'
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {displayText}
              {startTyping && (
                <span style={{
                  opacity: showCursor ? 1 : 0,
                  color: 'gold',
                  fontWeight: 'bold'
                }}>
                  |
                </span>
              )}
            </motion.p>
          </motion.div>
        </SwiperSlide>
      </Swiper>
      
      <motion.div 
        className="swiper-pagination"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      />
    </motion.div>
  );
};

export default CardSlider;