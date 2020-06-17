import React from 'react';
import { Navbar, Nav, Container, Row, Col, Accordion } from 'react-bootstrap';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';

const Content = ({ settings }) => {
  const { content } = settings;
  let data = [];
  let keys = [
    'Playlists by category',
    'Playlists by country',
    'Playlists by language',
  ];
  let page = content['IPTV'];
  for (let i = 0; i < keys.length; i++) {
    const revisedText =
      page[keys[i]].raw && page[keys[i]].raw.replace(/→|->/gi, '');
    data.push({
      index: i,
      title: keys[i],
      text: revisedText,
    });
  }
  return (
    <div className='bg-dark'>
      <Navbar
        variant='dark'
        expand='lg'
        fixed='top'
        className='shadow-lg bg-black'
      >
        <Navbar.Brand>Black Lives Matter</Navbar.Brand>
        <Nav className='ml-auto text-white'>
          <Nav>
            <em>Say No to Racism</em>
          </Nav>
        </Nav>
      </Navbar>
      <main className='min-vh-100 m-0'>
        <Container fluid>
          <Row>
            <Col xs={12} className='mt-3 mb-0'>
              <Header />
            </Col>
            <Col xs={12} className='my-3'>
              <Accordion className='rounded'>
                {data
                  .sort((a, b) =>
                    a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
                  )
                  .map((i, index) => (
                    <Item
                      key={index}
                      index={index}
                      source={i.text}
                      title={i.title}
                    />
                  ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer className='mt-0 mb-3' />
    </div>
  );
};

export default Content;
