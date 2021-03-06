import React from "react";
import { FaShare, FaSearch } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";

const Tool = ({ ...tool }) => {
  const { name, price, image, _id } = tool;
  return (
    <div class="group card card-compact relative max-w-lg bg-base-100 transition-all duration-200">
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
          <Link
            to={`/detail/${_id}`}
            class="btn btn-primary  btn-lg mb-5 capitalize hover:bg-white hover:text-primary hover:border-2 rounded-none  text-white"
          >
            Product Detail
          </Link>
        </div>
      </div>
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title  justify-center">{name}</h2>
        <p className="text-center">Tk {price}</p>
        {/* btn here */}
      </div>
    </div>
  );
};

export default Tool;
