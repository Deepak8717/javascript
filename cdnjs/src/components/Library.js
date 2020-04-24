import React from "react";

const Set = ({ set }) => {
  return (
    <div className="libs">
      {set
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map((lib, index) => (
          <div key={index} className="lib">
            <div>{lib.name}</div>
            <a href={lib.latest} target="_blank" rel="noopener noreferrer">
              {lib.latest}
            </a>
          </div>
        ))}
    </div>
  );
};

const Library = ({ library }) => {
  const { results } = library;
  const cssFiles = results.filter((i) => i.latest.includes(`.css`));
  const jsFiles = results.filter((i) => i.latest.includes(`.js`));
  return (
    <>
      <h1>CSS</h1>
      <Set set={cssFiles} />
      <h1>JavaScript</h1>
      <Set set={jsFiles} />
    </>
  );
};

export default Library;
