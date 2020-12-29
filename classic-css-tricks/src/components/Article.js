import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { FaRocket, FaPencilAlt } from "react-icons/fa";

const Article = ({ title, link, date, modified }) => {
  dayjs.extend(relativeTime);

  const newDate = dayjs(date).fromNow();
  const newModified = dayjs(modified).fromNow();

  return (
    <section>
      <a href={link} rel="noopener noreferrer" target="_blank">
        {title.rendered}
      </a>
      <ul>
        <li>
          <span><FaRocket /></span>
          <span>{newDate}</span>
        </li>
        <li>
          <span><FaPencilAlt /></span>
          <span>{newModified}</span>
        </li>
      </ul>
    </section>
  );
};

export default Article;
