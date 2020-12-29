import React from "react";
import Header from "./Header";

const Loading = ({ handleClick, handlePreviousClick, count }) => {
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
