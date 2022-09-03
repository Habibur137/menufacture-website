import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import SingleSummary from "./SingleSummary";
import { BiCalendarCheck, BiHeartCircle } from "react-icons/bi";
import { FaHandshakeAltSlash } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const BusinessSummary = () => {
  const { data, isLoading } = useQuery("summary", () =>
    fetch(`expo.json`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div className="my-12 px-8 lg:px-16">
      <h3 className="text-slate-900 text-4xl font-bold text-center">
        WHY CHOOSE US?
      </h3>
      <div className="h-px  border-b-2 w-24 border-amber-500 mt-3 mb-12 mx-auto"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data?.map((summary, index) => (
          <SingleSummary summary={summary} key={index} />
        ))}
      </div>

      <div className="lg:mt-24 grid grid-cols-1 lg:grid-cols-4 ">
        <div className="flex gap-3">
          <BiCalendarCheck className="w-16 h-16 text-success" />
          <div>
            <p className="text-5xl font-bold">25+</p>
            <p className="text-slate-300 font-semibold mt-1">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <BiHeartCircle className="w-16 h-16 text-success" />
          <div>
            <p className="text-5xl font-bold">450+</p>
            <p className="text-slate-300 font-semibold mt-1">Happy Clients</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaHandshakeAltSlash className="w-16 h-16 text-success" />
          <div>
            <p className="text-5xl font-bold">50+</p>
            <p className="text-slate-300 font-semibold mt-1">
              {" "}
              Business Partners
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <RiMoneyDollarCircleLine className="w-16 h-16 text-success" />
          <div>
            <p className="text-5xl font-bold">1000K</p>
            <p className="text-slate-300 font-semibold mt-1">Annual Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
