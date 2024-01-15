import Navbar from "@/components/navbar";
import { ReactNode } from "react";

type DashboardProps = {
  children: ReactNode;
  posts: ReactNode;
};

export default function DashboardLayout({ children, posts }: DashboardProps) {
  return (
    <section className="min-h-screen bg-white">
      <Navbar />
      <main className="w-full">
        <section className="w-4/6 flex gap-1 mx-auto max-w-5xl">
          <div className="flex-1 bg-fuchsia-400">
            <h3>Post list</h3>
            {posts}
          </div>
          <div className="flex-1 bg-fuchsia-600">{children}</div>
        </section>
      </main>
    </section>
  );
}
