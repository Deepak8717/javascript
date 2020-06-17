import React from 'react';

const Footer = () => {
  return (
    <div fluid className='m-0 text-muted p-3 bg-black'>
      <p className='m-0 text-center'>
        Inspired by&nbsp;
        <a
          className='text-light text-decoration-none'
          target='_blank'
          rel='noopener noreferrer'
          href='https://vscode-hacks.herokuapp.com'
        >
          VS Code Hacks
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
