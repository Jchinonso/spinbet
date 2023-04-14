import Head from "next/head";
import MatchesListContainer from "@/components/MatchesListContainer";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Matches</title>
      </Head>
      <main className="mt-10">
        <MatchesListContainer />
      </main>
    </div>
  );
}
