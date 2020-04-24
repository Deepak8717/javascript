import React from "react";

const Libraries = ({ set, data, setData }) => {
  const handleClick = (e) => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch(
          `https://api.cdnjs.com/libraries/${e.target.name}`
        );
        const json = await request.json();
        setData({ ...data, loading: false, currentLib: json });
        window.scrollTo(0, 0);
      } catch (err) {
        setData({ ...data, error: true });
      }
    })();
  };
  return (
    <div className="list-group">
      {set.map((lib, index) => (
        <div
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center text-capitalize"
        >
          <span className="text-break mr-3 text-truncate">{lib.name}</span>
          <div className="btn-group">
            <button
              className="btn btn-primary btn-sm"
              onClick={(e) => handleClick(e)}
              name={lib.name}
            >
              View
            </button>
            <a
              href={lib.latest}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Source
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Libraries;
