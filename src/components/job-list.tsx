import { Suspense } from "react";
import JobCard from "./job-card";

const JobList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex-1">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </Suspense>
  );
};

export default JobList;
