import React from "react";

const SingleSummary = ({ summary }) => {
  const { title, desc, icon } = summary;
  return (
    <div class="card card-side bg-base-100 shadow-xl choose">
      <figure>
        <img className="w-20 h-20" src={icon} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SingleSummary;
