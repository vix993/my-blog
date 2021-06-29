import Head from "next/head";

import { Intro } from "../components/Intro";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Victor Nascimento | Full Stack Developer</title>
      </Head>
      <Intro />
    </main>
  );
}
