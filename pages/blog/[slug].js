import Head from 'next/head'

import { format, parseISO } from "date-fns";

import { blogPosts } from '../../lib/data'

export default function BlogPage({title, date, content}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="" />
      </Head>

      <main>
        <div className="border-b-2 border-gray-300 mb-4">
          <h2 className="text-2xl font-bold">
            {title}
          </h2>
          <div className="text-gray-600 text-md">{format(parseISO(date), 'MMMM do, uuu')}</div>
        </div>
        <section>{content}</section>
      
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    console.log(context)
    const {params} = context;
    return {
        props: blogPosts.find(item => item.slug === params.slug)
    }
}

export async function getStaticPaths() {
    return {
        paths: blogPosts.map(item => ({
            params: {
                slug: item.slug,
            },
        })),
        fallback: false
    };
}