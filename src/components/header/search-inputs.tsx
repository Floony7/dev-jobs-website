import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchInputs = () => {
  return (
    <section className="p-2 rounded-md bg-white border border-gray-700 text-gray-700 shadow-md h-20">
      <form className="flex items-center justify-between h-full">
        <span className="px-3">
          <FaMagnifyingGlass size="1.5em" />
        </span>
        <input className="flex-1 p-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
        <span className="vertical-separator mx-2">&nbsp;</span>
        <span className="px-3">
          <FaMapMarkerAlt size="1.5em" />
        </span>
        <input className="flex-1 p-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
      </form>
    </section>
  );
};

export default SearchInputs;
