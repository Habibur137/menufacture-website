import React from "react";
import a from "../../assets/partner/1.webp";
import b from "../../assets/partner/2.webp";
import c from "../../assets/partner/3.webp";
import d from "../../assets/partner/4.webp";
import e from "../../assets/partner/5.webp";

const Clints = () => {
  return (
    <div className="my-12 px-8 lg:px-16">
      <h3 className="text-slate-900 text-4xl font-bold">OUR CLINTS</h3>
      <div className="h-px  border-b-2 w-16 border-amber-500 mt-3 mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div>
          <img src={a} alt="" />
        </div>
        <div>
          <img src={b} alt="" />
        </div>
        <div>
          <img src={c} alt="" />
        </div>
        <div>
          <img src={d} alt="" />
        </div>
        <div>
          <img src={e} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clints;
