import Hero from "@/components/header/hero";
import JobDetails from "@/components/job-details";
import JobList from "@/components/job-list";

export default function Home() {
  return (
    <section className="rounded-md p-6 min-h-screen">
      <Hero />
      <article className="flex gap-3">
        <JobList />
        <JobDetails />
      </article>
    </section>
  );
}
