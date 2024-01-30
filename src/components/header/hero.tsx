import React from "react";
import SearchInputs from "./search-inputs";

const Hero = () => {
  return (
    <section id="hero" className="p-6 ">
      <div className="flex flex-col content-center gap-6">
        <SearchInputs />
        <div className="flex justify-center">
          <div>
            <p>Upload your CV - It only takes a few seconds</p>
            <p>Here to hire? Post a job to get started today</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
