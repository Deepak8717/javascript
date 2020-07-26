import React from 'react';
import { useSelector } from 'react-redux';

const FilmsBox = ({ films, currentCharacterName }) => {
  if (!currentCharacterName) return null;

  return (
    <div className='text-center my-3'>
      <h4>
          <span>
            <em>{currentCharacterName}</em>
            {' '}
            featured in:
          </span>
      </h4>
      {
        films.map(({ title }) => <div key={title}>{title}</div>)
      }
    </div>
  );
};

export default FilmsBox;
