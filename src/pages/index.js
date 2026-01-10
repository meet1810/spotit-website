import Head from "next/head";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import About from "../components/home/About";
import DownloadApp from "../components/home/DownloadApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>SPOT IT - Swachh Bharat Mission Initiative</title>
        <meta
          name="description"
          content="Report and track cleanliness issues in your city. An initiative under Swachh Bharat Mission."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <HowItWorks />
        <About />
        <DownloadApp />
      </main>
    </>
  );
}
