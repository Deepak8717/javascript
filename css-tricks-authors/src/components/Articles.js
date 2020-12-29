import React from "react";
import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <nav>
      {articles.map((item) => {
        const { id, name, url, link, slug, avatar_urls } = item;
        return (
          <Article
            key={id}
            name={name}
            url={url}
            link={link}
            slug={slug}
            avatar_urls={avatar_urls}
          />
        );
      })}
    </nav>
  );
};

export default Articles;
