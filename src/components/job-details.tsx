import React from "react";

/*
 ** User selects a job by clicking on the card in the post list column on the left of the page
 ** Thise passes the slug into a useState at the top of the page Dashboard page
 ** Sluig is passed to the JobDetails component
 ** Database call made and job details are rendered
 ** Remember loading and error states
 ({ slug }: { slug: string })
 */
const JobDetails = () => {
  return (
    <section className="flex-1 border p-6 border-gray-300 rounded-md">
      <h1 className="text-3xl">Job is super duper good</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, debitis
        eveniet. Eligendi numquam magni dolorum inventore quibusdam nostrum
        exercitationem at consequatur praesentium? Enim, sequi? Animi adipisci
        alias fugit non voluptates.
      </p>
    </section>
  );
};

export default JobDetails;
