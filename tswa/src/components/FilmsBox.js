import React from 'react';
import PropTypes from 'prop-types';

const FilmsBox = ({ data }) => {
  const { films, currentCharacter } = data;
  if (currentCharacter === '') return <></>;
  return (
    <div className='text-center my-3'>
      <h4>
        {currentCharacter && (
          <span>
            <em>{currentCharacter}</em>
            {' '}
            featured in:
          </span>
        )}
      </h4>
      <div>{films}</div>
    </div>
  );
};

FilmsBox.defaultProps = {
  data: {},
};

FilmsBox.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default FilmsBox;
