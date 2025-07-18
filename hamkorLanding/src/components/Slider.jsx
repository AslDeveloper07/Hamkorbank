import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            key={sliderData[current]  .image}
            src={sliderData[current].image}
            alt="slide"
            className="slider-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -10 }}
            transition={{ duration: 0.1 }}
          />
        </AnimatePresence>

        <div className="slider-buttons">
          <button className="nav-btn" onClick={prevSlide}>‹</button>
          <button className="nav-btn" onClick={nextSlide}>›</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
