import Head from "next/head";

import Nav from "../components/Nav";
import FirstCard from "../components/FirstCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-commissioner max-w-full bg-gray-100">
      <Head>
        <title>Frontend Mentor | Crowdfunding product page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <FirstCard />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
