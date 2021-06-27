import { Header } from "../components/Header";

import { SkillsContextProvider } from "../contexts/SkillsContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SkillsContextProvider>
      <main className="w-screen h-screen">
        <Header></Header>
        <div className="mx-auto my-8 w-9/12">
          <Component {...pageProps} />
        </div>
      </main>
    </SkillsContextProvider>
  );
}

export default MyApp;
