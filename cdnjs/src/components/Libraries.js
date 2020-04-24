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
    <div className="list-group">
      {set.map((lib, index) => (
        <div
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center text-capitalize"
        >
          {lib.name}
          <div>
            <button
              href="#"
              className="btn btn-link badge badge-primary badge-pill text-white text-decoration-none"
              onClick={(e) => handleClick(e)}
              name={lib.name}
            >
              View
            </button>
            <a
              href={lib.latest}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-secondary badge-pill ml-3"
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
