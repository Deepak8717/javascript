import React from 'react';

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' placeholder='Enter City' name='city' />
      </div>
      <button type='submit'>Search</button>
    </form>
  );
};

export default Form;
