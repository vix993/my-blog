import Head from 'next/head';

import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S0W1S87WNK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-S0W1S87WNK');
            `,
          }}
        />
        <script>
          
        </script>
      </Head>
      <Carousel />
    </div>
  )
}