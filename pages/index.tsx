import Head from "next/head";

import Nav from "../components/Nav";
import FirstCard from "../components/FirstCard";

export default function Home() {
  return (
    <div className="min-h-screen font-commissioner w-full bg-gray-100">
      <Head>
        <title>Frontend Mentor | Crowdfunding product page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <main className="flex flex-col items-center -mt-20 md:-mt-16 z-10 relative  w-full">
        <FirstCard />
      </main>
    </div>
  );
}
