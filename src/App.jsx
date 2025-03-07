import Navbar from "./components/Navbar";
import backgroundVideo from "/hero1.mp4";
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

function App() {
  return (
    <>
      <div className="w-full">
        <div className="relative flex items-center w-full min-h-screen bg-black">
          <video
            className="absolute top-0 left-0 object-cover w-full h-full"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Capa oscura para mejorar la visibilidad del contenido */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="relative w-full max-w-full flex flex-col justify-between text-white z-100 lg:mt-[-150px] sm:mt-24">
            <Navbar />
            <div className="flex-wrap items-center hidden sm:flex">
              {/* Info solo en pantallas grandes */}
              <Info />
            </div>

            {/* Título solo en pantallas pequeñas */}
            <div className="flex flex-wrap items-center sm:hidden">
              <motion.h1
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="text-5xl text-center sm:text-start"
              >
                Finding Your New <br />
                Home Is <span className="text-white">Simple</span>
              </motion.h1>
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
          <div className="flex flex-col w-full h-40 mt-64 sm:mt-0">
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
