import CustomPortfolio from "@/components/CustomPortfolio";
import Portfolio from "../components/Portfolio";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Portfolio | Luis Alejandro Martinez Magallanes</title>
      </Head>
      <CustomPortfolio />
    </main>
  );
}
