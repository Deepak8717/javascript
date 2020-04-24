import React from "react";
import CurrentLib from "./CurrentLib";
import Libraries from "./Libraries";

const Library = ({ data, setData }) => {
  const { results } = data.content;
  const cssFiles = results
    .filter((i) => i.latest.includes(`.css`))
    .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
  const jsFiles = results
    .filter((i) => !i.latest.includes(`.css`))
    .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
  return (
    <>
      <div className="container mb-3">
        <div className="row">
          <div className="col col-12">
            <CurrentLib data={data} />
            <h1 className="my-3">CSS</h1>
            <Libraries set={cssFiles} data={data} setData={setData} />
            <h1 className="my-3">JavaScript</h1>
            <Libraries set={jsFiles} data={data} setData={setData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
