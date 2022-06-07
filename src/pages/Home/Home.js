import React from "react";
import About from "./About";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ClintReviews from "./ClintReviews";
import Clints from "./Clints";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <About />
      <BusinessSummary />
      <ClintReviews />
      <Clints />
    </div>
  );
};

export default Home;
