import Link from "next/link";

export const Intro = ({}) => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-12 mt-16 rounded-2xl">
        <h1>Junior Full-Stack Developer</h1>
        <span className="text-2xl">
          Hi. I'm Victor, I enjoy building useful things.
        </span>
        <img
          className="rounded-full max-h-64"
          src="https://avatars.githubusercontent.com/u/52217652?v=4"
          alt="Victor Nascimento"
        />
        <span className="text-2xl flex flex-row gap-2">Check out my <div className="rounded-2xl bg-yellow-500 py-1 px-1" ><Link href="/portfolio">work</Link></div></span>
      </div>
    </main>
  );
};
