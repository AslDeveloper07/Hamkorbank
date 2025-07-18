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
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.1 }}
            className="slider-image"
          />
        </AnimatePresence>

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
