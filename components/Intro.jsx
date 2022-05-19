import Link from "next/link";

export const Intro = ({ }) => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-10 mt-16 rounded-2xl">
        <h1>Software Engineer</h1>
        <span className="text-2xl flex items-center flex-col gap-4 text-center">
          Hi. I'm Victor, I enjoy building{" "}
          <Link href="/portfolio">
            <a className="rounded-md p-2 border border-yellow-500 bg-yellow-50 hover:text-gray-800 hover:bg-yellow-500">useful things</a>
          </Link>
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
