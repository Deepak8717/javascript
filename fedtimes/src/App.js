import React, { useState } from 'react';
import data from './Data/Data';
import { uniqBy } from 'lodash';
import Listing from './Listing/Listing';
import { app, appWrapper, resource, text } from './App.module.scss';

const sortArray = (a, b) =>
  a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;

const App = () => {
  let emoji;
  const cleanData = uniqBy(data.sort(sortArray), 'url');
  const [state, setState] = useState({
    resources: cleanData,
    currentSelection: null,
  });
  const { resources, currentSelection } = state;
  const handleClick = (e, type) => {
    e.preventDefault();
    setState({
      ...state,
      currentSelection: type,
    });
  };
  const filters =
    currentSelection === null
      ? resources
      : resources.filter((i) => i.type === currentSelection);
  const listing = filters.map((item, index) => {
    const { title, url } = item;
    if (item.type === 'newsletter') {
      emoji = '🗞️';
    }
    if (item.type === 'blog') {
      emoji = '💻';
    }
    if (item.type === 'podcast') {
      emoji = '🎤';
    }
    if (item.type === 'community') {
      emoji = '👋';
    }
    return (
      <div key={index} className={resource}>
        <a rel='noopener noreferrer' target='_blank' href={url}>
          {title}
        </a>
        <span role='img' className={text} aria-label={resource}>
          {emoji}
        </span>
      </div>
    );
  });
  return (
    <>
      <Listing handleClick={handleClick} />
      <div className={appWrapper}>
        <div className={app}>{listing}</div>
      </div>
    </>
  );
};

export default App;
