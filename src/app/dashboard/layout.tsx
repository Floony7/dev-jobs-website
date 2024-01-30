import Navbar from "@/components/header/navbar";
import { ReactNode } from "react";

type DashboardProps = {
  children: ReactNode;
  posts: ReactNode;
};

export default function DashboardLayout({ children }: DashboardProps) {
  return (
    <section className="min-h-screen bg-white">
      <Navbar />
      <main className="w-full">
        <section className="w-4/6 flex gap-5 mx-auto max-w-5xl">
          <div className="flex-1">{children}</div>
        </section>
      </main>
    </section>
  );
}
