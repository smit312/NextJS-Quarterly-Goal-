import Head from "next/head";
import ArticleList from "../component/ArticleList";
export default function Home({ articels }) {
  console.log(articels);
  return (
    <div>
      <Head>
        <title> Next App</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articels={articels} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const articels = await res.json();
  return {
    props: {
      articels,
    },
  };
};
