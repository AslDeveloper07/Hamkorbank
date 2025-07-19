import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { sliderData } from "./DataBase";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [slideContent, setSlideContent] = useState(sliderData[0]);

  const nextSlide = () => {
    const next = (current + 1) % sliderData.length;
    setCurrent(next);
    setSlideContent(sliderData[next]);
  };

  const prevSlide = () => {
    const prev = (current - 1 + sliderData.length) % sliderData.length;
    setCurrent(prev);
    setSlideContent(sliderData[prev]);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="slider container">
      <div className="slider-wrapper">
        <AnimatePresence mode="wait">
          <motion.img
            key={slideContent.image}
            src={slideContent.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
            className="slider-image"
          />
        </AnimatePresence>

        <motion.div
          className="slider-caption"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="slideText">
            {slideContent.nameSlide && (
              <h2 className="caption-title">{slideContent.nameSlide}</h2>
            )}
            {slideContent.slideAbout && (
              <p className="caption-desc">{slideContent.slideAbout}</p>
            )}
          </div>
          {slideContent.SlideBtn && (
            <button className="caption-btn">{slideContent.SlideBtn}</button>
          )}
        </motion.div>

        <div className="slider-buttons">
          <button className="nav-btn" onClick={prevSlide}>
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button className="nav-btn" onClick={nextSlide}>
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
