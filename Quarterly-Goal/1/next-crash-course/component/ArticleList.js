import React from "react";
import ArticleItem from "./ArticleItem";
import articleStyle from "../styles/Article.module.css";
const ArticleList = ({ articels }) => {
  return (
    <div className={articleStyle.grid}>
      {" "}
      {articels.map((article) => (
        <ArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
