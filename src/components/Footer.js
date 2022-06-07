import React from "react";
import { Link } from "react-router-dom";
import footer from "../assets/footer.webp";
import { BiLocationPlus } from "react-icons/bi";
import { GiEarthAmerica, GiClockwork } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <div
        className="py-12 mt-12 px-8 lg:px-16"
        style={{ background: `url(${footer})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-white text-3xl font-bold">CARPENTO DEMO</h3>
            <p className="text-slate-200 mt-6">
              Our professionalism, good service & trust to the home repair
              maintenance business. We take immense pride in sending some of the
              most of professional seds handymen to yours that aren't workings
              every day.
            </p>
          </div>
          <div>
            <h3 className="text-white text-3xl font-bold mb-6">POPULAR TAGS</h3>
            <div className="flex flex-col w-1/3">
              <Link
                to={`/detail/628a6e3e091fb4dc3ff0e5c9`}
                class="btn btn-primary   mb-5 capitalize hover:bg-white hover:text-primary border-2 rounded-none  text-white"
              >
                Hand Show
              </Link>
              <Link
                to={`/detail/628a6e3e091fb4dc3ff0e5cd`}
                class="btn btn-primary   mb-5 capitalize hover:bg-white hover:text-primary border-2 rounded-none  text-white"
              >
                Caliper
              </Link>
              <Link
                to={`/detail/628a6e3e091fb4dc3ff0e5d0`}
                class="btn btn-primary mb-5 capitalize hover:bg-white hover:text-primary border-2 rounded-none  text-white"
              >
                Pliers
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-3xl font-bold">CONTACT DETAILS</h3>
            <div className="flex items-center gap-3 my-5">
              <span>
                <BiLocationPlus className="text-primary w-8 h-8" />
              </span>
              <div className="text-white">
                <p>STRUCTURE AVENUE,</p>
                <p>Melbourne City, Austalia 3002</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <span>
                <GiEarthAmerica className="text-primary w-8 h-8" />
              </span>
              <div className="text-white">
                <p>+321 4567 89 012</p>
                <p>supportyou@woodwork.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <GiClockwork className="text-primary w-8 h-8" />
              </span>
              <div className="text-white">
                <p>WORKING HOURS</p>
                <p>supportyou@woodwork.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8 bg-black">
        <h3 className="text-white font-semibold">
          Copyrights &copy; 2022 All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
