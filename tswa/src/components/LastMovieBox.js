import React from 'react';
import PropTypes from 'prop-types';

const LastMovieBox = ({ data }) => {
  const { lastMovie, currentCharacter } = data;
  if (currentCharacter === '') return <></>;
  return (
    <div className='text-center'>
      <h4>Name / Year of their last film:</h4>
      <div>
        {lastMovie.title}
        {' '}
        /
        {lastMovie.date}
      </div>
    </div>
  );
};

LastMovieBox.defaultProps = {
  data: {},
};

LastMovieBox.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default LastMovieBox;
