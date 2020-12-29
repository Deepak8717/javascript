import React from "react";
import Header from "./Header";

const Error = ({ handleClick }) => {
  return (
    <>
      <Header handleClick={handleClick} />
      <main>
        <p>Something went wrong...</p>
      </main>
    </>
  );
};

export default Error;
