import Link from "next/link";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "@material-ui/core/Icon";

export const Header = ({}) => {
  return (
    <header className="w-screen h-20 flex items-center px-8 border-b-2 border-yellow-200 bg-yellow-500">
      <nav className="flex flex-row w-full">
        <ul className="flex flex-row gap-4 ml-8">
          <li>
            <a href="https://github.com/vix993" target="_blank">
              <Icon component={GitHubIcon}></Icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victor-nascimento-dev/"
              target="_blank"
            >
              <Icon component={LinkedInIcon}></Icon>
            </a>
          </li>
        </ul>
        <ul className="flex flex-row space-x-4 text-3xl gap-4 ml-auto mr-8">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="ml-auto mr-0">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
