import Head from "next/head";

import Icon from "@material-ui/core/Icon";

import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default function About() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="" />
      </Head>

      <main className="flex flex-col gap-6 flex-wrap items-center">
        <h1 className="flex justify-center items-center">About</h1>
        <span className="flex flex-col justify-center items-center gap-3 text-lg rounded-2xl leading-8 max-w-xl">
          <span className="flex items-center text-2xl gap-4">Hello Universe! <Icon component={SentimentVerySatisfiedIcon}></Icon></span>
          <span>
            My name is Victor, I'm Brazilian 🇧🇷 and I lived in the UK 🇬🇧 most of my
            life.
          </span>
          I am a Software Developer, honing my skills as a student at Ecole 42
          Sao Paulo.
          <span>
            I like to define myself as a creative person, with a connection to
            the arts and I am motivated to provide solutions for creators.
          </span>
          <span>
            I am also a musician, performer and poet, publishing my content
            under Desvious Order. <Icon component={MusicNoteIcon}></Icon> <Icon component={MusicNoteIcon}></Icon>
          </span>
          <span>
            <strong className="text-yellow-500">Proficiencies:</strong> Typescript, React, Node.js, Next.js, Heroku, Django,
            Docker
          </span>
          <span>
            <strong className="text-yellow-500">Interests:</strong> Rust, AWS, Actix, Football, Rust, Basketball, Music and
            Rust
          </span>
          <span>Give me a shout!</span>
        </span>
      </main>
    </div>
  );
}
