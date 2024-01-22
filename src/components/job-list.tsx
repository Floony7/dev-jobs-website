import React from "react";
import JobCard from "./job-card";

const JobList = () => {
  return (
    <section className="flex-1">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </section>
  );
};

export default JobList;
