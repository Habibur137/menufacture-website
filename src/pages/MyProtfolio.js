import React from "react";
import habib from "../assets/habib.jpg";

const MyProtfolio = () => {
  return (
    <div className="px-8 lg:px-16 lg:pt-20 about">
      <div class="card card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img className="h-96" src={habib} alt="Movie" />
        </figure>
        <div class="card-body lg:w-1/2 gr">
          <h2 class="card-title font-bold text-success">My Info</h2>
          <div>
            <p className="text-slate-600 font-bold">Habibur Rahman</p>
            <p className="text-slate-600 font-bold">infernohabib@gmail.com</p>
            <p className="text-slate-600 font-bold">+8801400626406</p>
          </div>
          <div className="pt-3">
            <h2 class="card-title font-bold text-info">My Education</h2>
            <div className="mt-2">
              <p className="text-slate-600 font-bold">SSC 2013</p>
              <p className="text-slate-600 font-bold">HSC 2015</p>
              <p className="text-slate-600 font-bold">Honours 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <h3 className="text-3xl font-bold">My Skills</h3>
        <div className="lg:flex lg:gap-24 pt-8">
          <div>
            <p className="text-slate-600 font-bold">HTML</p>
            <p className="text-slate-600 font-bold">CSS</p>
            <p className="text-slate-600 font-bold">JAVASCRIPT</p>
            <p className="text-slate-600 font-bold">REACT JS</p>
            <p className="text-slate-600 font-bold">MONGO DB</p>
          </div>
          <div>
            <p>
              <progress
                class="progress progress-success w-96"
                value="90"
                max="100"
              ></progress>
              <span className="text-primary font-bold"> 90%</span>
            </p>
            <p>
              <progress
                class="progress progress-success w-96"
                value="80"
                max="100"
              ></progress>
              <span className="text-primary font-bold"> 80%</span>
            </p>
            <p>
              <progress
                class="progress progress-success w-96"
                value="75"
                max="100"
              ></progress>
              <span className="text-primary font-bold"> 75%</span>
            </p>
            <p>
              <progress
                class="progress progress-success w-96"
                value="70"
                max="100"
              ></progress>
              <span className="text-primary font-bold"> 70%</span>
            </p>
            <p>
              <progress
                class="progress progress-success w-96"
                value="65"
                max="100"
              ></progress>
              <span className="text-primary font-bold"> 65%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
