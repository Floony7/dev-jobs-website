import React from "react";
import ArrowRight from "./common/arrow-right";

// TODO: Currently card uses active style as border. Add functionality to toggle border colour
const JobCard = () => {
  return (
    <div className="relative mt-2 flex w-full flex-col rounded-md bg-white border border-blue-700 text-gray-700 shadow-md">
      <div className="p-6">
        <header className="flex justify-between">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            UI/UX Review Check
          </h5>
        </header>
        <p>
          Because it is about motivating the doers. Because I am here to follow
          my dreams and inspire others.
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
          href="#"
        >
          <button
            className="flex select-none items-center gap-2 rounded-lg p-1 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Learn More
            <ArrowRight />
          </button>
        </a>
      </div>
    </div>
  );
};

export default JobCard;
