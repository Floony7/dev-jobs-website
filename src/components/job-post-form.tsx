"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

const JobPostForm = () => {
  const [isUrgent, setIsUrgent] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);

  const handleIsMultipleChecked = () => {
    setIsMultiple(!isMultiple);
  };

  const handleIsUrgentChecked = () => {
    setIsUrgent(!isUrgent);
  };

  console.log(`IS_MULTIPLE: ${isMultiple}
  IS_URGENT: ${isUrgent}
  `);

  return (
    <form className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <section className="sm:col-span-2">
          <label
            htmlFor="title"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Job Title
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </section>
        <section className="sm:col-span-2">
          <label
            htmlFor="location"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Location
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="location"
              id="location"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </section>
        <section>
          <label
            htmlFor="remuneration"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Remuneration
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="remuneration"
              id="remuneration"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </section>
        <section>
          <label
            htmlFor="job-type"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Job Type
          </label>
          <div className="mt-2.5">
            <select
              name="job-type"
              id="job-type"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            >
              <option>Choose a job type</option>
              <option value="FULL_TIME">Full-Time</option>
              <option value="PART_TIME">Part-Time</option>
              <option value="PERMANENT">Permanent</option>
              <option value="CONTRACT">Contract</option>
              <option value="TEMPORARY">Temporary</option>
            </select>
          </div>
        </section>
        <section className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-semibold leading-6"
          >
            Job Description
          </label>
          <div className="mt-2.5">
            <textarea
              name="description"
              id="description"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </section>
        <section className="flex gap-x-4 sm:col-span-2">
          <div className="flex items-center">
            <input
              id="hiring-multiple-candidates"
              name="hiring-multiple-candidates"
              type="checkbox"
              checked={isMultiple}
              onChange={handleIsMultipleChecked}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="hiring-mul;tiple-candidates"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Hiring Multiple Candidates
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="urgently-needed"
              name="urgently-needed"
              type="checkbox"
              checked={isUrgent}
              onChange={handleIsUrgentChecked}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="urgently-needed"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Urgently Needed
            </label>
          </div>
        </section>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Job
        </button>
      </div>
    </form>
  );
};

export default JobPostForm;
