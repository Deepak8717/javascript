import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar
      bg='dark'
      expand='lg'
      variant='dark'
      className='shadow-lg'
      fixed='top'
    >
      <Navbar.Brand href='/'>Multiple Images</Navbar.Brand>
      <Nav className='ml-auto'>
        <Nav.Link
          href='https://github.com/tpkahlon/javascript/tree/master/multiply-images'
          target='_blank'
        >
          Source
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Menu;
