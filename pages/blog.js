import Link from "next/link";
import Head from "next/head";

import { format, parseISO } from "date-fns";

import { blogPosts } from "../lib/data";

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Victor Nascimento | Blog</title>
      </Head>
      <header>
        <h1 className="text-6xl font-bold text-center my-8">My Blog</h1>
      </header>
      <div className="space-y-4">
        {!(blogPosts.length > 0) && (
          <div className="border border-yellow-100 shadow hover:shadow-lg hover:border-yellow-200 rounded-lg p-4 transition duration-400 ease-in-out text-xl">
            Coming soon!
          </div>
        )}
        {blogPosts.map((item) => (
          <ListBlogItem key={item.slug} {...item} />
        ))}
      </div>
    </main>
  );
}

function ListBlogItem({ slug, title, date, content }) {
  return (
    <div className="border border-yellow-100 shadow hover:shadow-lg hover:border-yellow-200 rounded-lg p-4 transition duration-400 ease-in-out">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-lg font-bold hover:text-yellow-500">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-sm">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>
      <section>{content}</section>
    </div>
  );
}
