import Head from 'next/head';
import Link from 'next/link';

import { format, parseISO } from "date-fns";

import { blogPosts } from '../lib/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="" />
      </Head>
      <div className="space-y-4">
        {blogPosts.map((item) => (
          <ListBlogItem
            key={item.slug}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

function ListBlogItem({ slug, title, date, content }) {
  return (
    <div className="border border-yellow-100 shadow hover:shadow-md hover:border-gray-100 rounded-lg p-4 transition duration-400 ease-in-out">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-lg font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-sm">{format(parseISO(date), 'MMMM do, uuu')}</div>
      <section>{content}</section>
    </div>
  )
}