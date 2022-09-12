import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with nextJs",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "## this is a first post",
};
const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />

      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
