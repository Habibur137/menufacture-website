import React from "react";
import { motion } from "framer-motion";

const summaryAnimated = {
  offScreen: {
    y: -100,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 3 },
  },
};

const SingleSummary = ({ summary }) => {
  const { title, desc, icon } = summary;
  return (
    <motion.div
      class="card card-side bg-base-100 shadow-xl choose"
      variants={summaryAnimated}
      initial="offScreen"
      whileInView="onScreen"
    >
      <figure>
        <img className="w-20 h-20" src={icon} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default SingleSummary;
