import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="px-8 lg:p-16 bg-accent mt-12">
      <h3 className="text-slate-900 text-4xl font-bold">ABOUT CARPENTO</h3>
      <div className="h-px  border-b-2 w-28 mt-2 border-amber-500 mb-12"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl mb-6">
            Over 25 Years Experience in This Industry
          </h3>
          <p>
            Our commitment to bring professionalism, good service & trust to the
            home repair service & maintenance business. We take immense pride in
            sending some of the most of professional handymen to yours homes to
            fix things that aren't workings. We have fixed over 5,50,000 houses
            in our little over 25 years of existence so far.
          </p>
          <p className="mt-4 mb-6">
            Since our meetings take place in your home or office, we’ll work
            with you to help visualize a design solution that aligns with your
            taste and bugjet, To provide customers with home repair service
            experience that delights them and become their best-handy-friend.
          </p>
          <div className="flex gap-x-6">
            <button className="btn btn-primary">More About Us</button>
            <div className="flex items-center gap-3 mb-5">
              <span>
                <BiPhoneCall className="text-primary w-8 h-8 font-bold" />
              </span>
              <div className="font-semibold">
                <p className="text-primary">Hotline</p>
                <p>+44 567 890123</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="border-4 border-amber-500"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/KeV1r4wQeQA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
