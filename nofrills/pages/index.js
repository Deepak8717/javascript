import React from "react";
import Head from "next/head";
import Content from "../components/Content";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>NoFrills Canada</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
        <link rel="icon" href="https://cloverdalebia.com/wp-content/uploads/2018/08/388_nofrills.jpg" />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <Content data={data} />
    </>
  );
}

Home.getInitialProps = async () => {
  const response = await fetch(
    `https://www.nofrills.ca/api/pickup-locations?bannerIds=nofrills`
  );
  const data = await response.json();
  return {
    data,
  };
};
