import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Button from "./Button";

const menuData = [
  {
    title: "Kreditlar",
    items: ["Avtokredit", "Iste’mol krediti", "Online kredit"],
  },
  {
    title: "Kartalar",
    items: ["Humo", "Uzcard", "Visa"],
  },
  {
    title: "Ipoteka",
    items: ["Yangi uylar", "Ikkinchi bozordagi uylar"],
  },
  {
    title: "Omonatlar",
    items: ["Foizli", "Foizsiz"],
  },
  {
    title: "Valyuta kursi",
    items: ["USD", "EUR", "RUB"],
  },
  {
    title: "Yana",
    items: ["Mobil ilova", "Hamyon"],
  },
];


const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.25 }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const AccordionItem = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onToggle}>
        {title}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="accordion-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
    initial={{width:0, opacity:0}}
    animate={{width:"auto", opacity:1}}
    exit={{width: 'auto', opacity:1}}
    transition={{duration:0.01}}
    className="mobile-menu">
      <div className="navmenu">
        <Button className="menu_btn"/>
      </div>
      <div className="menu-card">

        <p className="menu-title">Jismoniy shaxslar uchun</p>
        {menuData.map((menu, index) => (
          <AccordionItem
            key={index}
            title={menu.title}
            items={menu.items}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Saytdan qidirish" />
        <ul>
          <li>Shaxsiy kabinet</li>
          <li>Bank ofislari va bankomatlar</li>
          <li>Valyuta kursi</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
