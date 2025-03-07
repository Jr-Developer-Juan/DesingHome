import { Button } from "@nextui-org/react";
import { PiArrowRightThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Info = () => {
  return (
    <div className="w-full sm:w-1/2 h-[400px] text-background gap-10 flex flex-col justify-between mt-8 ml-0 sm:ml-10 sm:items-center">
      <motion.h1
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-5xl sm:text-center lg:flex lg:mt-4 lg:w-full lg:text-start"
      >
        Finding Your New <br />
        Home Is <span className="text-white">Simple</span>
      </motion.h1>

      {/* Descripción */}
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-xl leading-relaxed sm:text-center lg:text-start sm:ml-2 lg:ml-0"
      >
        At <span className="font-semibold text-white">NobleNest.com</span>, we
        make it easy to find your ideal home. Explore thousands of
        verified listings across the{" "}
        <span className="font-extrabold text-white">United States</span> and{" "}
        <span className="font-extrabold text-white">Europe</span>, from modern city
        apartments to cozy suburban houses.
        <br />
        Use advanced filters and detailed property insights to find a
        place that truly feels like home.
      </motion.p>
      
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Button className="lg:ml-[-320px] bg-white/30 flex justify-between h-12 px-4 py-2 mx-auto mt-8 text-lg text-white transition-colors duration-300 shadow-lg w-52 rounded-2xl backdrop-filter backdrop-blur-md hover:bg-opacity-50 sm:mx-0">
          Search <PiArrowRightThin className="text-4xl" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Info;
