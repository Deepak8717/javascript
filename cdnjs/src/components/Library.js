import React from "react";
import CurrentLib from "./CurrentLib";
import Libraries from "./Libraries";

const Library = ({ data, setData }) => {
  const { results, currentLib } = data.content;
  const cssFiles = results.filter((i) => i.latest.includes(`.css`));
  const jsFiles = results.filter((i) => i.latest.includes(`.js`));
  return (
    <>
      <CurrentLib
        data={data}
        className={`currentLib ${
          currentLib && currentLib.length !== 0 ? "foo" : "boo"
        }`}
      />
      <h1>CSS</h1>
      <Libraries set={cssFiles} data={data} setData={setData} />
      <h1>JavaScript</h1>
      <Libraries set={jsFiles} data={data} setData={setData} />
    </>
  );
};

export default Library;
