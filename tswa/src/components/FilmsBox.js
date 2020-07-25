import React from 'react';
import { useSelector } from 'react-redux';

const FilmsBox = () => {
  const charactersState = useSelector(state => state.characters);
  const { films, currentCharacter } = charactersState;
  if (currentCharacter === '' || films.length === 0) return <></>;
  const filmsList = films.map((i, index) => <div key={index}>{i.title}</div>);
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
      {filmsList}
    </div>
  );
};

export default FilmsBox;
