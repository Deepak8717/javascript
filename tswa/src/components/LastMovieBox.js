import React from 'react';
import { useSelector } from 'react-redux';

const LastMovieBox = () => {
  const charactersState = useSelector(state => state.characters);
  const { lastMovie, currentCharacter } = charactersState;
  const { title, release_date } = lastMovie;
  if (currentCharacter === '' || lastMovie === '') return <></>;
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
