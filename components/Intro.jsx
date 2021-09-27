import Link from "next/link";

export const Intro = ({}) => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-12 mt-16 rounded-2xl">
        <h1>Junior Blockchain Developer</h1>
        <span className="text-2xl">
          Hi. I'm Victor, I enjoy building useful things.
        </span>
        <img
          className="rounded-full max-h-64"
          src="https://avatars.githubusercontent.com/u/52217652?v=4"
          alt="Victor Nascimento"
        />
      </div>
    </main>
  );
};
