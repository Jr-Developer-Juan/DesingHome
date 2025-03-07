import React from "react";
import { motion } from "framer-motion";

const AboutMain = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-auto gap-10 p-8 lg:flex-row sm:p-4">
        {/* Video */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center w-full h-auto lg:w-1/2"
        >
          <video
            src="./src/assets/video8.mp4"
            muted
            controls
            autoPlay
            loop
            loading="lazy"
            className="object-cover w-full h-[400px] sm:h-[300px] lg:h-[600px] rounded-2xl"
          />
        </motion.div>

        <div className="flex flex-col items-center w-full h-auto lg:items-start lg:w-1/2 justify-evenly">
          {/* Título */}
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="mb-4 text-4xl font-bold text-center lg:text-left"
          >
            Welcome to Our <span className="text-primary">Modern Home</span>
          </motion.h1>

          {/* Párrafo 1 */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-2 text-lg text-center font-roboto lg:text-left"
          >
            Discover your dream home with our{" "}
            <span className="text-primary">exclusive real estate services</span>
            . We offer a curated selection of properties designed to meet your
            every need, from luxury apartments to spacious family homes. Our
            team of experts is dedicated to helping you find the perfect space
            that combines style, comfort, and modern living. Whether you're
            buying for the first time or looking for a new investment, we’re
            here to guide you every step of the way, ensuring a seamless and
            rewarding experience.
          </motion.p>

          {/* Párrafo 2 */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-2 text-lg text-center font-roboto lg:text-left"
          >
            Ready to take the next step?{" "}
            <span className="text-primary">Contact us today</span> and unlock
            access to the best properties in the market. With our personalized
            approach, we make the process easy, transparent, and tailored just
            for you. Let us help you find a place that not only meets your
            expectations but exceeds them. Your perfect home is just a call
            away!
          </motion.p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            {/* Botón 1 */}
            <motion.button
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full px-6 py-2 text-white rounded-md bg-primary sm:w-auto"
            >
              Learn More
            </motion.button>

            {/* Botón 2 */}
            <motion.button
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full px-6 py-2 text-white rounded-md bg-primary sm:w-auto"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
