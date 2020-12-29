import React from "react";
import Articles from "./Articles";
import Header from "./Header";
import Footer from "./Footer";

const Home = ({ handleClick, handlePreviousClick, articles, count }) => {
  return (
    <>
      <Header
        count={count}
        handleClick={handleClick}
        handlePreviousClick={handlePreviousClick}
      />
      <main>
        <Articles articles={articles} />
        <Footer count={count} />
      </main>
    </>
  );
};

export default Home;
