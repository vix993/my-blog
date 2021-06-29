import { useEffect } from 'react';

import { Header } from "../components/Header";

import { SkillsContextProvider } from "../contexts/SkillsContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
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
