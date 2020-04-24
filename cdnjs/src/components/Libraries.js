import React from "react";

const Libraries = ({ set, data, setData }) => {
  const handleClick = (e) => {
    window.scrollTo(0, 0);
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch(
          `https://api.cdnjs.com/libraries/${e.target.name}`
        );
        const json = await request.json();
        setData({ ...data, loading: false, currentLib: json });
      } catch (err) {
        setData({ ...data, error: true });
      }
    })();
  };
  return (
    <div className="libs">
      {set
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map((lib, index) => (
          <div key={index} className="lib">
            <div className="name">
              <div className="name__title">{lib.name}</div>
              <button
                className="name__button"
                onClick={(e) => handleClick(e)}
                name={lib.name}
              >
                View
              </button>
            </div>
            <a href={lib.latest} target="_blank" rel="noopener noreferrer">
              {lib.latest}
            </a>
          </div>
        ))}
    </div>
  );
};

export default Libraries;
