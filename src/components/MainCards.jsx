import ImageOne from "../assets/foto-4.jpg";
import ImageTwo from "../assets/foto-5.jpg";
import ImageThree from "../assets/foto-6.jpg";
import { FaBed } from "react-icons/fa";
import { MdOutlineBathtub } from "react-icons/md";
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { GrTag } from "react-icons/gr";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

const MainCards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around w-full h-64 mt-10 mb-12">
        <motion.div 
         variants={fadeIn('right', 0.5)}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.5 }}
         className="w-96 h-[400px] bg-background shadow-2xl rounded-3xl mb-5">
          <div>
            <img className="rounded-t-2xl" src={ImageOne}></img>
          </div>
          <div>
            <div className="flex justify-between w-full mt-2">
              <span className="ml-4 text-gray-500 text-md">
                123 Street Angeles City
              </span>
              <div className="flex gap-2 mr-6">
                <FaBed className="text-xl" />3
                <MdOutlineBathtub className="text-lg" />4
              </div>
            </div>
            <Divider className="mt-3" />
            <div className="flex">
              <div className="flex flex-col w-full mt-5 ml-4">
                <span className="mb-2 text-xl font-bold">
                  Ocean Breeze Villa
                </span>
                <span className="text-xl font-bold">€ 910.000,00</span>
              </div>
              <div className="w-full h-[110px] flex justify-center items-center">
                <Button className="w-32 h-12 gap-4 text-xl" color="primary">
                  <GrTag className="text-xl" /> Buy
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
         variants={fadeIn('up', 0.5)}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.5 }}
         className="w-96 h-[400px] bg-background shadow-2xl rounded-3xl mb-5">
          <div>
            <img className="rounded-t-2xl" src={ImageTwo}></img>
          </div>
          <div>
            <div className="flex justify-between w-full mt-2">
              <span className="ml-4 text-gray-500 text-md">
                123 Street Angeles City
              </span>
              <div className="flex gap-2 mr-6">
                <FaBed className="text-xl" />3
                <MdOutlineBathtub className="text-lg" />4
              </div>
            </div>
            <Divider className="mt-3" />
            <div className="flex">
              <div className="flex flex-col w-full mt-5 ml-4">
                <span className="mb-2 text-xl font-bold">Jackson House</span>
                <span className="text-xl font-bold">€ 750.000,00</span>
              </div>
              <div className="w-full h-[110px] flex justify-center items-center">
                <Button className="w-32 h-12 gap-4 text-xl" color="primary">
                  <GrTag className="text-xl" /> Buy
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         variants={fadeIn('left', 0.5)}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.5 }}
         className="w-96 h-[400px]  bg-background shadow-2xl rounded-3xl mb-5">
          <div>
            <img className="rounded-t-2xl" src={ImageThree}></img>
          </div>
          <div>
            <div className="flex justify-between w-full mt-2">
              <span className="ml-4 text-gray-500 text-md">
                123 Street Angeles City
              </span>
              <div className="flex gap-2 mr-6">
                <FaBed className="text-xl" />3
                <MdOutlineBathtub className="text-lg" />4
              </div>
            </div>
            <Divider className="mt-3" />
            <div className="flex">
              <div className="flex flex-col w-full mt-5 ml-4">
                <span className="mb-2 text-xl font-bold">Lakeside Cotagge</span>
                <span className="text-xl font-bold">€ 1080.000,00</span>
              </div>
              <div className="w-full h-[110px] flex justify-center items-center">
                <Button className="w-32 h-12 gap-4 text-xl" color="primary">
                  <GrTag className="text-xl" /> Buy
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-center w-full h-12 gap-6 mt-2">
          <div className="w-5 h-5 rounded-full bg-primary"></div>
          <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </>
  );
};
export default MainCards;
