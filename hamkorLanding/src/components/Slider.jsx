import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { sliderData } from "./DataBase";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className="slider container">
      <div className="slider-wrapper">
        <AnimatePresence mode="wait">
          <motion.img
               key={sliderData[current].image}
            src={sliderData[current].image}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.01 }}
            className="slider-image"
          />
        </AnimatePresence>

        <div className="slider-caption">
         <div className="slideText">
           {sliderData[current].nameSlide && (
            <h2 className="caption-title">{sliderData[current].nameSlide}</h2>
          )}
          {sliderData[current].slideAbout && (
            <p className="caption-desc">{sliderData[current].slideAbout}</p>
          )}
         </div>
          {sliderData[current].SlideBtn && (
            <button className="caption-btn">
              {sliderData[current].SlideBtn}
            </button>
          )}
        </div>

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
