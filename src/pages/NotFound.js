import React from "react";
import { Link } from "react-router-dom";
import not from "../assets/notfound.webp";

const NotFound = () => {
  return (
    <div>
      <img className="h-[480px] w-full" src={not} alt="" />
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary text-white font-bold mx-auto">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
