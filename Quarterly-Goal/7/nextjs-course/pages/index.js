import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJs is a the React framework for production - it makes building fullstack react apps and site a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJs is a the React framework for production - it makes building fullstack react apps and site a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJs is a the React framework for production - it makes building fullstack react apps and site a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJs is a the React framework for production - it makes building fullstack react apps and site a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
export default HomePage;
