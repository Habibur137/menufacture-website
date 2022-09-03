import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import Tool from "./Tool";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("https://rocky-earth-57369.herokuapp.com/product").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-24 lg:px-20">
      <h4 className="text-center text-slate-500 mb-2">WOODWORKING TOOLS</h4>
      <h1 className="text-center text-4xl font-semibold mb-12">
        Featured Products
      </h1>
      <div className="grid lg:grid-cols-4 gap-4">
        {tools?.map((tool, index) => (
          <Tool key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
