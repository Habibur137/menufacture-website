import React from "react";
import { FaShare, FaSearch } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const imageAnimate = {
  offScreen: {
    x: 100,
  },
  onScreen: {
    x: 0,
    rotate: [0, 45, 90, 45],
    transition: { type: "spring", bounce: 0.3, duration: 3 },
  },
};
const textAnimate = {
  offScreen: {
    y: 100,
  },
  onScreen: {
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 3 },
  },
};
const Tool = ({ ...tool }) => {
  const { name, price, image, _id } = tool;
  return (
    <motion.div
      transition={{ staggerChildren: 0.5 }}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: false, amount: 0.8 }}
      class="group card card-compact relative max-w-lg bg-base-100 transition-all duration-200"
    >
      <div className="bg-[rgba(255,255,255,0.59)] transition-all duration-500 w-full h-full absolute top-0 hidden group-hover:block">
        <div class="flex justify-between items-center flex-col h-full">
          <h1></h1>
          <div className="flex gap-x-3 cursor-pointer">
            <div className=" text-white bg-primary hover:bg-black p-3">
              <FaShare />
            </div>
            <div className=" text-white bg-primary hover:bg-black p-3 cursor-pointer">
              <GiSelfLove />
            </div>
            <div className=" text-white bg-primary p-3 hover:bg-black cursor-pointer">
              <FaSearch />
            </div>
          </div>
          <motion.div>
            <Link
              to={`/detail/${_id}`}
              className="btn btn-primary   mb-5 capitalize hover:bg-white hover:text-primary hover:border-2 rounded-none  text-white"
            >
              Product Detail
            </Link>
          </motion.div>
        </div>
      </div>
      <figure className="overflow-hidden">
        <motion.img
          variants={imageAnimate}
          // initial="offScreen"
          // animate="onScreen"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <motion.h2
          variants={textAnimate}
          // initial="offScreen"
          // animate="onScreen"
          className="card-title  justify-center"
        >
          {name}
        </motion.h2>
        <motion.p
          variants={textAnimate}
          // initial="offScreen"
          // animate="onScreen"
          className="text-center"
        >
          Tk {price}
        </motion.p>
        {/* btn here */}
      </div>
    </motion.div>
  );
};

export default Tool;
