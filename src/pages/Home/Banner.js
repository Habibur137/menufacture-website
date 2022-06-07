import React from "react";
import banner from "../../assets/slider-3.webp";

const Banner = () => {
  return (
    <div
      className="h-[70vh] lg:h-[90vh] text-white bg-cover bg-left"
      style={{ background: `url(${banner})` }}
    >
      <div className="flex items-center px-6 lg:pl-24 lg:h-[90vh]">
        <div>
          <h1 className="text-3xl font-bold"> Best Carpenter’s Company </h1>
          <h2 className="text-5xl text-primary text-[900] mt-4">
            Professional & Quality <br /> Carpenter Service
          </h2>
          <p className=" mt-4 text-xl">
            If the chocolate eu vengeful life of the author eu augue utac
            inhabited the street dict.{" "}
          </p>
          <p className=" mt-1 text-xl">
            Pregnant with a bow and a torturer, aeneas and a torturer at the
            end.
          </p>
          <button className="btn btn-primary mt-6 text-white border-0 px-8 text-2xl font-semibold rounded-none">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
