import React from "react";
import { useQuery } from "react-query";
import qoute from "../../assets/quote.svg";
import Loading from "../../components/Loading";
import SingleReview from "./SingleReview";

const ClintReviews = () => {
  const { data, isLoading } = useQuery("reviews", () =>
    fetch(`https://rocky-earth-57369.herokuapp.com/review`).then((res) =>
      res.json()
    )
  );
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-12 px-8 lg:px-16 mb-20 gr lg:py-8">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary">Testimonial</h3>

          <h3 className="text-slate-900 text-4xl font-bold">
            WHAT OUR CLIENTS SAY
          </h3>
          <div className="h-px  border-b-2 w-24 border-amber-500 mt-3 mb-12"></div>
        </div>
        <img className="w-24 lg:w-48 h-20 lg:h-44" src={qoute} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {data?.map((review, index) => (
          <SingleReview review={review} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ClintReviews;
