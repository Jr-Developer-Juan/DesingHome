import { GoHome } from "react-icons/go";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { PiRocketFill } from "react-icons/pi"; 


const Navbar = () => {
  return (
    <div className="font-sans">
      <nav className="fixed top-0 z-50 flex items-center justify-between w-full h-20 px-6 lg:px-12 bg-black/30 backdrop-blur-md">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-center"
        >
          <GoHome className="w-8 h-8 text-white" />
          <p className="ml-2 text-lg font-semibold text-white">Noble Nest</p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Button className="w-32 h-12 px-4 py-2 text-white transition-all duration-300 shadow-lg bg-white/30 rounded-2xl backdrop-blur-md hover:bg-opacity-50">
            Try now
            <PiRocketFill className="text-xl text-white" />
          </Button>
        </motion.div>

      </nav>
    </div>
  );
};

export default Navbar;
