import React from "react";
import Header from "./Header";

const Loading = ({ count, handleClick, handlePreviousClick }) => {
  return (
    <>
      <Header
        count={count}
        handleClick={handleClick}
        handlePreviousClick={handlePreviousClick}
      />
      <main>
        <p>Please wait...</p>
      </main>
    </>
  );
};

export default Loading;
