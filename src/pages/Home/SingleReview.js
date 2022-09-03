import React from "react";

const SingleReview = ({ review }) => {
  const { rating, comment } = review;
  return (
    <div className="card w-auto bg-base-100 shadow-2xl summary">
      <div className="card-body">
        <p>{comment}</p>
        <p>Rating: {rating}</p>
      </div>
      <div className="flex items-center">
        <div className="avatar pl-8 pb-3">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
            <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
          </div>
        </div>
        <div className="pl-6">
          <h3>William Jhonson</h3>
          <p>California</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
