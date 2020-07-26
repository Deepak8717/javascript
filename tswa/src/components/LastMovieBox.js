/* eslint-disable react/prop-types */
/* eslint-disable camelcase */

import React from 'react';

const LastMovieBox = ({ lastMovie }) => {
  if (!lastMovie) return null;
  const { title, release_date } = lastMovie;
  return (
    <div className='text-center'>
      <h4>Name / Year of their last film:</h4>
      <div>
        {title}
        {' '}
        /&nbsp;
        {release_date}
      </div>
    </div>
  );
};

export default LastMovieBox;
