import React from "react";
import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <nav>
      {articles.map((item) => {
        const { id, title, link, date, modified } = item;
        return <Article key={id} title={title} link={link} date={date} modified={modified} />;
      })}
    </nav>
  );
};

export default Articles;
