import { Header } from "../components/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="w-screen h-screen">
      <Header></Header>
      <div className="mx-auto my-8 w-9/12">
        
        <Component {...pageProps} />
      </div>
    </main>
  )
}

export default MyApp
