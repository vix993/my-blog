import Head from "next/head";

import { Intro } from "../components/Intro";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Victor Nascimento | Blockchain Developer</title>
      </Head>
      <Intro />
    </main>
  );
}
