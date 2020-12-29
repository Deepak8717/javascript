import React from "react";
import { DiCssTricks } from "react-icons/di";
import { IoEarth } from "react-icons/io5";

const Article = ({ name, url, link, slug, avatar_urls }) => {
  return (
    <section>
      {name && <img src={avatar_urls["96"]} alt={slug} />}
      <div>
        {name && <h1>{name}</h1>}
        {slug && <p>@{slug}</p>}
        {link && (
          <a href={link} rel="noopener noreferrer" target="_blank">
            <DiCssTricks />
          </a>
        )}
        {url && (
          <a href={url} rel="noopener noreferrer" target="_blank">
            <IoEarth />
          </a>
        )}
      </div>
    </section>
  );
};

export default Article;
