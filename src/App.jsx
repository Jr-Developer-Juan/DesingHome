import Navbar from "./components/Navbar";
import backgroundVideo from "/video4.mp4";
import Info from "./components/Info";
import Price from "./components/Price";
import { Divider } from "@nextui-org/react";
import MainHouse from "./components/MainHouse";
import MainCards from "./components/MainCards";
import { CardData } from "./CardData";
import AboutMain from "./components/AboutMain";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Button } from "@nextui-org/react";
import { PiArrowRightThin } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="relative flex items-center w-full min-h-screen bg-black">
          <video
            className="absolute top-0 left-0 object-cover w-full h-full"
            src={backgroundVideo}
            loop
            muted
            playsInline
            autoPlay
            loading="lazy"
            poster="/house2.jpeg"
          />

          {/* Capa oscura para mejorar la visibilidad del contenido */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="relative w-full max-w-full flex flex-col justify-between text-white z-100 lg:mt-[-150px] sm:mt-24">
            <Navbar />
            <div className="flex-wrap items-center hidden mt-24 sm:flex">
              <Info />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 sm:hidden">
              <motion.h1
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="text-5xl text-center sm:text-start"
              >
                Finding Your New <br />
                Home Is{" "}
                <span className="font-bold text-white ">Simple</span>
              </motion.h1>
              <div className="flex flex-col justify-center">
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
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="items-center justify-center hidden w-full sm:flex h-60">
            <Price />
          </div>
          <div className="w-full h-10 flex justify-center items-center mt-[-30px]">
            <Divider className="w-72" />
          </div>
          <div className="flex flex-col w-full h-40 mt-20 sm:mt-0">
            <MainHouse />
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-24">
            {CardData.map((card, index) => (
              <MainCards
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                text={card.text}
                bed={card.bed}
                bath={card.bath}
                price={card.price}
                buttonText={card.buttonText}
                videoSrc={card.videoSrc}
                animation={card.animation}
              />
            ))}
          </div>
        </div>
        <Divider className="mx-auto mt-10 w-72" />
        <div className="mt-10">
          <AboutMain />
        </div>
        <Divider className="mx-auto mt-10 w-72" />
        <div className="mt-10">
          <Steps />
        </div>
        <Divider className="mx-auto mt-10 w-72" />
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
