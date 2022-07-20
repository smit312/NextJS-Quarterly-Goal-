import { server } from "../config";
import ArticleList from "../component/ArticleList";
export default function Home({ articels }) {
  return (
    <div>
      <ArticleList articels={articels} />
    </div>
  );
}
// const serverUrl = window.location.origin;
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articels = await res.json();
  return {
    props: {
      articels,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=10`
//   );
//   const articels = await res.json();
//   return {
//     props: {
//       articels,
//     },
//   };
// };
