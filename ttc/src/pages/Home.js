import React from "react";
import Iframe from "react-iframe";

const Home = () => {
  return (
    <>
      <Iframe
        url="https://widget.transitapp.com/ttc"
        width="100%"
        height="100vh"
        id="iframe"
        className="iframe border-0"
        display="initial"
        position="relative"
      />
    </>
  );
};

export default Home;
