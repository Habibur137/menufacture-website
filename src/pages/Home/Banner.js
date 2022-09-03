import React from "react";
import banner from "../../assets/slider-3.webp";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="h-[70vh] lg:h-[90vh] text-white bg-cover bg-left"
      style={{ background: `url(${banner})` }}
    >
      <div className="flex items-center px-6 lg:pl-24 lg:h-[90vh]">
        <div>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {" "}
            Best Carpenter’s Company{" "}
          </motion.h1>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl text-primary text-[900] mt-4"
          >
            Professional & Quality <br /> Carpenter Service
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className=" mt-4 text-xl"
          >
            If the chocolate eu vengeful life of the author eu augue utac
            inhabited the street dict.{" "}
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.6 }}
            className=" mt-1 text-xl"
          >
            Pregnant with a bow and a torturer, aeneas and a torturer at the
            end.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            whileHover={{
              textShadow: "0px 0px 5px rgb(255, 255, 255)",
              boxShadow: "0px 0px 5px rgb(255, 255, 255)",
            }}
            className="btn btn-primary mt-6 text-white border-0 px-8 text-2xl font-semibold rounded"
          >
            READ MORE
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
