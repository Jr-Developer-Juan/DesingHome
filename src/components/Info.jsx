import { Button } from '@nextui-org/react'
import { PiArrowRightThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

const Info = () => {
  return (
    <div className="w-full sm:w-1/2 h-[400px] text-background gap-4 flex flex-col justify-between mt-8 ml-0 sm:ml-10 sm:items-center">
      <motion.h1
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.5 }}
      className="text-5xl sm:text-center sm:ml-6 lg:flex lg:mt-4 lg:w-full lg:text-start">
        Finding Your New <br />
        Home Is Simple
      </motion.h1>
      <br />
      <motion.p 
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.5 }}
      className="text-xl text-start sm:text-start">
        RentHomea.com is your go-to destination <br /> for finding the perfect rental home to suit your needs.
        <br />
        With thousands of property listings across the United States, and Europe
      </motion.p>
      <p className="text-xl"></p>
      <motion.div
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.5 }}>
      <Button className="lg:ml-[-320px] flex justify-between h-12 px-4 py-2 mx-auto mt-8 text-lg text-white transition-colors duration-300 bg-white bg-opacity-25 shadow-lg w-52 rounded-2xl backdrop-filter backdrop-blur-md hover:bg-opacity-50 sm:mx-0">
        Search <PiArrowRightThin className="text-4xl" />
      </Button>
    </motion.div>
    </div>
  );
};

export default Info;
