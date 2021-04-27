import Link from 'next/link';

export const Header = ({}) => {
        return (
            <header className="w-screen h-20 bg-yellow-100 flex items-center justify-end px-8 border-b-2 border-yellow-200">
                <nav>
                <ul className="flex flex-row space-x-4 text-3xl">
                    <li>
                        <Link href="/">
                        <a>Home</a>
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
}