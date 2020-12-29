import React from "react";
import Header from "./Header";

const Home = ({ handleClick }) => {
  return (
    <>
      <Header handleClick={handleClick} />
      <main>
        <p>
          Welcome to CSS-Tricks Authors. Here, you can quickly run through the
          author directory who are registered on main site. You can find link to
          their personal website as well articles listing page.
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
      </main>
    </>
  );
};

export default Home;
