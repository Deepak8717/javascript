import React from "react";
import Header from "./Header";

const Home = ({ handleClick }) => {
  return (
    <>
      <Header handleClick={handleClick} />
      <main>
        <p>
          Welcome to Classic CSS-Tricks. Here, you can quickly run through the
          articles available on main site and see if anything entice your
          curiosity.
        </p>
        <p>
          <em>
            If you want to see list of authors, see this{" "}
            <a
              href="https://tiny.cc/csstricksauthors"
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
