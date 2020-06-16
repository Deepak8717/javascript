import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
  return (
    <Jumbotron fluid className='m-0 text-muted rounded p-3'>
      <p className='m-0'>
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
    </Jumbotron>
  );
};

export default Footer;
