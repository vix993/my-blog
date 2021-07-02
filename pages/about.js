import Head from "next/head";

import Icon from "@material-ui/core/Icon";

import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function About() {
  return (
    <div className="py-2">
      <Head>
        <title>Victor Nascimento | About me</title>
      </Head>

      <main className="flex flex-col gap-6 flex-wrap items-center py-4">
        <h1 className="flex justify-center items-center">About me</h1>
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
            under{" "}
            <a
              className="rounded-md p-1 bg-yellow-500"
              href="https://open.spotify.com/artist/03Ka7Eewewpe6Kw5lRmXbv?si=sMFzOwk1Qqi-7YSpxw5umA&dl_branch=1"
              target="_blank"
            >
              Desvious Order.
            </a>{" "}
            <Icon component={MusicNoteIcon}></Icon>{" "}
            <Icon component={MusicNoteIcon}></Icon>
          </span>
          <span>
            <strong className="text-yellow-500">Proficiencies:</strong>{" "}
            <div className="flex flex-row flex-wrap my-4 gap-4">
            <a href="https://reactjs.org/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" /></a>
            <a href="https://www.typescriptlang.org/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg" /></a>
            <a href="https://www.python.org/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" /></a>
            <a href="https://www.djangoproject.com/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg" /></a>
            <a href="https://docs.docker.com/compose/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg" /></a>
            <a href="https://nodejs.org/en/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" /></a>
            <a href="https://www.rust-lang.org/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/rust-lang/rust-lang-ar21.svg" /></a>
            <a href="https://id.heroku.com/login"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg" /></a>
            <a href="https://www.linux.org/pages/download/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/linux/linux-ar21.svg" /></a>

            </div>
          </span>
          <span>
            <strong className="text-yellow-500">Interests:</strong>
            <div className="flex flex-row flex-wrap my-4 gap-4">
            <a href="https://aws.amazon.com/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" /></a>
            <a href="https://cloud.google.com/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" /></a>
            <a href="https://pytorch.org/"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg" /></a>
            <a href="https://stripe.com/en-br"><img className="w-24" height="50" src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" /></a>
            </div>
          </span>
          <span className="text-2xl mt-4">
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
