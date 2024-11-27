import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
const Price = () => {
  return (
    <div className="w-3/5 h-[110px] bg-background border shadow-xl rounded-full flex justify-evenly items-center font-sans p-5">
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col justify-center">
        <p className="flex mb-2 text-gray-500">
          City Street{" "}
          <MdKeyboardArrowDown className="ml-1 text-2xl cursor-pointer" />
        </p>
        <span>
          <strong>123Street</strong>
        </span>
      </motion.div>
      <motion.div 
       variants={fadeIn('up', 0.6)}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col justify-center">
        <p className="flex mb-2 text-gray-500">
          Tipology Of Rent{" "}
          <MdKeyboardArrowDown className="ml-1 text-2xl cursor-pointer" />
        </p>
        <span>
          <strong>Villa</strong>
        </span>
      </motion.div>
      <motion.div 
       variants={fadeIn('up', 0.6)}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col justify-center">
        <p className="flex mb-2 text-gray-500">
          Price <MdKeyboardArrowDown className="ml-1 text-2xl cursor-pointer" />
        </p>
        <span>
          <strong>€ 950.000,00</strong>
        </span>
      </motion.div>
      <div>
        <Button className="bg-primary text-background w-32 h-[60px] rounded-r-2xl rounded-l-none flex justify-center mr-[-60px]">
          <CiSearch className="text-2xl" /> Buscar
        </Button>
      </div>
    </div>
  );
};

export default Price;
