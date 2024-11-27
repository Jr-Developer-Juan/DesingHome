import { useState } from 'react';
import { GoHome } from "react-icons/go";
import { Button } from "@nextui-org/react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans">
      <nav className="flex sm:text-start items-center justify-between w-full h-24 p-10 text-background">
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-end">
          <GoHome className="w-10 h-10 ml-5 text-background" />{" "}
          <p className="ml-2 font-sans text-lg text-background">Noble Nest</p>
        </motion.div>
       
        <motion.div 
        variants={fadeIn('up', 1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}>
        <Button className="hidden w-32 h-12 px-4 py-2 text-white transition-colors duration-300 bg-white bg-opacity-25 shadow-lg sm:block rounded-2xl backdrop-filter backdrop-blur-md hover:bg-opacity-50">
          Try now
        </Button>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
