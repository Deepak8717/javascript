import React from "react";

const Footer = ({ count }) => {
  return (
    <footer>
      <p>
        <em>By the way, you are on Page {count}...</em>
      </p>
      <p>
        <em>
          If you want to see list of articles, see this{" "}
          <a
            href="https://tiny.cc/csstricks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>link</strong>
          </a>
          !
        </em>
      </p>
    </footer>
  );
};

export default Footer;
