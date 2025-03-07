import { FaBed } from "react-icons/fa";
import { GrTag } from "react-icons/gr";
import { MdOutlineBathtub } from "react-icons/md";
import { Divider, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { useState, useRef, useEffect } from "react";

const MainCards = ({
  imgSrc,
  text,
  bed,
  bath,
  title,
  price,
  buttonText,
  videoSrc,
  animation
}) => {
  
  const animationVariants = {
    left: { x: -100, opacity: 0, transition: { duration: 1 } },
    right: { x: 100, opacity: 0, transition: { duration: 1 } },
    up: { y: -100, opacity: 0, transition: { duration: 1 } },
    down: { y: 100, opacity: 0, transition: { duration: 1 } },
    default: { opacity: 1, transition: { duration: 1 } },
  };
  
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("playsinline", "true");
      videoRef.current.setAttribute("webkit-playsinline", "true"); // Para compatibilidad con iOS más antiguos
    }
  }, []);

  return (
    <div className="">
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        animate={animationVariants[animation] || animationVariants.default}
        className="w-96 h-[400px] bg-background shadow-2xl rounded-3xl mb-5"
      >
        <div
          onClick={handlePlayVideo}
          className="relative w-full h-[220px] overflow-hidden"
        >
          {!isPlaying && (
            <img
              className="object-cover w-full h-full rounded-t-2xl"
              src={imgSrc}
              alt="Preview"
            />
          )}
          <video
            playsinline
            ref={videoRef}
            className="object-cover w-full h-full rounded-t-2xl"
            src={videoSrc}
            controls
            muted
            onPause={handlePauseVideo}
            onEnded={() => setIsPlaying(false)}
            style={{ display: isPlaying ? "block" : "none" }}
            loading="lazy"
            onClick={(e) => e.preventDefault()}
          ></video>
        </div>
        <div>
          <div className="flex justify-between w-full mt-2">
            <span className="ml-4 text-gray-500 text-md">{text}</span>
            <div className="flex gap-2 mr-6">
              <FaBed className="text-xl" />
              {bed}
              <MdOutlineBathtub className="text-lg" />
              {bath}
            </div>
          </div>
          <Divider className="mt-3" />
          <div className="flex">
            <div className="flex flex-col w-full mt-5 ml-4">
              <span className="mb-2 text-xl font-bold">{title}</span>
              <span className="text-xl font-bold">{price}</span>
            </div>
            <div className="w-full h-[110px] flex justify-center items-center">
              <Button className="w-32 h-12 gap-4 text-xl" color="primary">
                <GrTag className="text-xl" /> {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainCards;
