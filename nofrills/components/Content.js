import React, { useState } from "react";
import Store from "./Store";
import { uniqBy } from "lodash";

const Content = ({ data }) => {
  let cleanData = uniqBy(data, (e) => e.address.postalCode);
  const [settings, setSettings] = useState(cleanData);
  const handleSortByPostal = () => {
    const sortedData = [...settings].sort((a, b) =>
      a.address.postalCode.toLowerCase() > b.address.postalCode.toLowerCase()
        ? 1
        : -1
    );
    setSettings(sortedData);
  };
  const handleSortByName = () => {
    const sortedData = [...settings].sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
    setSettings(sortedData);
  };
  const handleSortByStreet = () => {
    const sortedData = [...settings].sort((a, b) =>
      a.address.line1.toLowerCase() > b.address.line1.toLowerCase() ? 1 : -1
    );
    setSettings(sortedData);
  };
  const handleSortByOpen = () => {
    const sortedData = [...settings].sort((a, b) =>
      a.openNowResponseData.openNow > b.openNowResponseData.openNow ? 1 : -1
    );
    setSettings(sortedData);
  };
  const handleSortByClosed = () => {
    const sortedData = [...settings].sort((a, b) =>
      !a.openNowResponseData.openNow > !b.openNowResponseData.openNow ? 1 : -1
    );
    setSettings(sortedData);
  };
  return (
    <main>
      <h1>See NoFrills locations and check their flyer!</h1>
      <div className="corner">
        <a
          className="github-button"
          href="https://github.com/tpkahlon/nofrills"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star tpkahlon/nofrills on GitHub"
        >
          Star
        </a>
      </div>
      <h3>Sort by:</h3>
      <aside>
        <button onClick={handleSortByStreet}>Street</button>
        <button onClick={handleSortByPostal}>Postal Code</button>
        <button onClick={handleSortByName}>Name</button>
        <button onClick={handleSortByOpen}>Open</button>
        <button onClick={handleSortByClosed}>Closed</button>
      </aside>
      {settings.map((store) => (
        <Store store={store} key={store.id} />
      ))}
    </main>
  );
};

export default Content;
