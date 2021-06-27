import Head from "next/head";

import Icon from "@material-ui/core/Icon";

import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

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
          <span className="flex items-center text-2xl gap-4">
            Hello Universe! <Icon component={SentimentVerySatisfiedIcon}></Icon>
          </span>
          <span>
            My name is Victor, I'm Brazilian 🇧🇷 and I lived in the UK 🇬🇧 most of
            my life.
          </span>
          I am a Software Developer, honing my skills as a student at Ecole 42
          Sao Paulo.
          <span>
            I like to define myself as a creative person, with a connection to
            the arts and I am motivated to provide solutions for creators.
          </span>
          <span>
            I am also a musician, performer and poet, publishing my content
            under Desvious Order. <Icon component={MusicNoteIcon}></Icon>{" "}
            <Icon component={MusicNoteIcon}></Icon>
          </span>
          <span>
            <strong className="text-yellow-500">Proficiencies:</strong>{" "}
            Typescript, React, Node.js, Next.js, Heroku, Django, Docker
          </span>
          <span>
            <strong className="text-yellow-500">Interests:</strong> Rust, AWS,
            Actix, Football, Rust, Basketball, Music and Rust
          </span>
          <span className="text-2xl">
            Give me a shout!{" "}
            <a href="https://www.instagram.com/vic_birth/" target="_blank">
              <Icon
                className="cursor-pointer text-yellow-600"
                component={InstagramIcon}
              ></Icon>{" "}
            </a>
            <a href="https://wa.me/5511999046898" target="_blank">
              <Icon
                className="cursor-pointer text-yellow-600"
                component={WhatsAppIcon}
              ></Icon>{" "}
            </a>
            <a href="https://github.com/vix993" target="_blank">
              <Icon
                className="cursor-pointer text-yellow-600"
                component={GitHubIcon}
              ></Icon>
            </a>
          </span>
        </span>
      </main>
    </div>
  );
}
