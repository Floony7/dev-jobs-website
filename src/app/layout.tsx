import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Search | InDev",
  description:
    "With InDev, you can search millions of jobs online to find the next step in your Dev career.",
  keywords:
    "software development, web development, nextjs, react, vue, angular, javascript, typescript, nuxt, svelte, nodejs, expressjs, graphql, rest apis, programming jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="w-full">
          <section className="w-4/6 flex gap-5 mx-auto max-w-5xl">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
