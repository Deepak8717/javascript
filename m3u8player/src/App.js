import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Modal,
  Card,
  Table,
  ButtonGroup,
  Accordion,
} from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy, FaListUl, FaPlayCircle, FaBars } from 'react-icons/fa';

const App = () => {
  const [channel, setChannel] = useState({
    keyword: '',
    url: null,
    toggle: false,
    urls: [],
  });
  const { keyword, url, toggle, urls } = channel;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setChannel({
      ...channel,
      url: `https://cors-unlimited.herokuapp.com/${keyword}`,
      keyword: '',
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannel({ ...channel, [name]: value });
  };
  const handleToggle = () => {
    setChannel({ ...channel, toggle: !toggle });
  };
  const handlePlay = (currentUrl) => {
    setChannel({
      ...channel,
      url: `https://cors-unlimited.herokuapp.com/${currentUrl}`,
      keyword: '',
    });
  };

  useEffect(() => {
    (async () => {
      const r = await fetch(
        `https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u`
      );
      const t = await r.text();
      return t;
    })()
      .then((d) => {
        const codes = d
          .split('#')
          .map((i) => i.replace(/\n/gi, ''))
          .filter((i) => i !== '')
          .filter((i) => (i.includes('EXTM3U') ? null : i))
          .map((i) => i.split('channels'))
          .map((i) => i[0])
          .map((i) => i.split(','))
          .map((i) => i[1]);
        const urls = d
          .split('#')
          .map((i) => i.replace(/\n/gi, ''))
          .map((i) => i.replace(/EXTINF:-1,/gi, ''))
          .filter((i) => i !== '')
          .filter((i) => (i.includes('EXTM3U') ? null : i))
          .map((i) => i.split('/'))
          .map((i) => i[1])
          .map((i) => i.split('.'))
          .map((i) => i[0])
          .map(
            (i) =>
              `https://cors-unlimited.herokuapp.com/https://raw.githubusercontent.com/iptv-org/iptv/master/channels/${i}.m3u`
          );
        const promises = urls.map((url) => fetch(url).then((y) => y.text()));
        Promise.all(promises).then((results) => {
          const data = results
            .map((i) => i.split('#'))
            .map((i) => i.filter((j) => j !== ''))
            .map((i) => i.filter((j) => (j.includes('EXTM3U') ? null : j)))
            .map((i) => i.map((j) => j.split(',')))
            .map((i) => i.map((j) => j[1]))
            .map((i) => i.filter((j) => (typeof j === undefined ? null : j)))
            .map((i) => i.map((j) => j.split('\n')))
            .map((i, index) =>
              i.map((j) => ({ title: j[0], url: j[1], country: codes[index] }))
            );
          setChannel({
            ...channel,
            urls: data,
          });
        });
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <aside>
        {!toggle && (
          <Form className='d-flex justify-content-end' onSubmit={handleSubmit}>
            <InputGroup className='input'>
              <FormControl
                type='url'
                name='keyword'
                value={keyword}
                onChange={handleChange}
                placeholder='Enter M3U8 URL'
              />
              <InputGroup.Append>
                <ButtonGroup>
                  <Button
                    className='rounded-0'
                    variant='dark'
                    onClick={handleShow}
                  >
                    <div className='d-flex justify-content-center align-items-center'>
                      <FaListUl />
                    </div>
                  </Button>
                  <Button type='submit' variant='secondary'>
                    <div className='d-flex justify-content-center align-items-center'>
                      <FaPlayCircle />
                    </div>
                  </Button>
                </ButtonGroup>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        )}
        <Button className='ml-3 menu' variant='dark' onClick={handleToggle}>
          <div className='d-flex justify-content-center align-items-center'>
            <FaBars />
          </div>
        </Button>
      </aside>
      {url === null ? (
        <div className='bg-black vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-white'>
          <div className='mx-3 text-center'>
            <p>Please enter a URL to watch!</p>
            <p>
              See available channels by pressing <strong>Listing</strong>{' '}
              button...
            </p>
          </div>
        </div>
      ) : (
        <>
          <ReactPlayer className='app' playing controls url={url} />
        </>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          className='bg-dark text-white rounded-0 d-flex justify-content-between align-items-center'
          closeButton
        >
          <Modal.Title>Available Channels</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white p-0 rounded-0 '>
          {urls.length === 0 ? (
            <p className='pt-3 px-3'>Loading Channels...</p>
          ) : (
            <Accordion defaultActiveKey='0' className='rounded-0'>
              {urls.map((i, idx) => {
                return (
                  <Card key={idx} className='rounded-0 border-0 shadow-lg'>
                    <Accordion.Toggle
                      className='bg-dark'
                      variant='dark'
                      as={Card.Header}
                      eventKey={idx}
                    >
                      {i.length !== 0 ? i[0].country : 'Undefined'}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={idx}>
                      <Card.Body className='bg-dark p-0'>
                        <Table
                          variant='dark'
                          size='sm'
                          //bordered
                          hover
                          striped
                          className='m-0'
                        >
                          <thead>
                            <tr>
                              <td className='p-3'>Title</td>
                              <td className='p-3'>URL</td>
                            </tr>
                          </thead>
                          <tbody>
                            {i.map((j, id) => {
                              return (
                                <tr key={id}>
                                  <td className='text-wrap p-3'>{j.title}</td>
                                  <td className='text-wrap p-3'>
                                    <ButtonGroup>
                                      <Button
                                        variant='dark'
                                        className='shadow-lg'
                                        onClick={() => handlePlay(j.url)}
                                      >
                                        <div className='d-flex justify-content-center align-items-center'>
                                          <FaPlayCircle />
                                        </div>
                                      </Button>
                                      <CopyToClipboard
                                        text={j.url}
                                        onCopy={() =>
                                          alert('URL copied successfully!')
                                        }
                                      >
                                        <Button
                                          variant='secondary'
                                          className='shadow-lg'
                                        >
                                          <div className='d-flex justify-content-center align-items-center'>
                                            <FaRegCopy />
                                          </div>
                                        </Button>
                                      </CopyToClipboard>
                                    </ButtonGroup>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default App;
