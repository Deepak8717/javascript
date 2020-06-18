import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Modal,
  Table,
} from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';

const App = () => {
  const [channel, setChannel] = useState({
    keyword: '',
    url: null,
    toggle: false,
  });
  const { keyword, url, toggle } = channel;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setChannel({
      ...channel,
      url: `https://cors-unlimited.herokuapp.com/${keyword}`,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannel({ ...channel, [name]: value });
  };
  const handleToggle = () => {
    setChannel({ ...channel, toggle: !toggle });
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
          .map((i) => i.replace(/EXTINF:-1,/gi, ''))
          .map((i) => i.match(/(?<=\/)(.*?)(?=\.)/, '$2'))
          .filter((el) => el != null)
          .map((i) => i[0])
          .map((i) => i);
        const urls = d
          .split('#')
          .map((i) => i.replace(/\n/gi, ''))
          .map((i) => i.replace(/EXTINF:-1,/gi, ''))
          .map((i) => i.match(/(?<=\/)(.*?)(?=\.)/, '$2'))
          .filter((el) => el != null)
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
          localStorage.setItem('urls', JSON.stringify(data));
        });
      })
      .catch((e) => console.log(e));
  }, []);

  const urls = localStorage.getItem('urls')
    ? JSON.parse(localStorage.getItem('urls'))
    : [];

  return (
    <>
      <aside>
        {!toggle && (
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <FormControl
                type='url'
                name='keyword'
                value={keyword}
                onChange={handleChange}
                placeholder='Enter M3U8 URL'
              />
              <InputGroup.Append>
                <Button type='submit' variant='secondary'>
                  Watch
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        )}
        <Button className='ml-3' variant='dark' onClick={handleToggle}>
          {toggle ? 'Show' : 'Hide'}
        </Button>
      </aside>
      {url === null ? (
        <div className='bg-black vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-white'>
          <p>Please enter a URL to watch!</p>
          <p>See available channels:</p>
          <Button
            className='text-muted font-weight-bold'
            variant='dark'
            onClick={handleShow}
          >
            Listing
          </Button>
        </div>
      ) : (
        <ReactPlayer className='app' controls playing url={url} />
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Available M3U8 links from IPTV</Modal.Title>
        </Modal.Header>
        <Modal.Body className='window'>
          {urls.length === 0 ? (
            'Loading Channels...'
          ) : (
            <Table
              variant='dark'
              size='sm'
              bordered
              hover
              striped
              className='m-0'
            >
              <thead>
                <tr>
                  <td>Country</td>
                  <td>Title</td>
                  <td>URL</td>
                </tr>
              </thead>
              <tbody>
                {urls.map((i, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      {i.map((j, index) => {
                        return (
                          <tr key={index}>
                            <td className='text-wrap text-uppercase'>
                              {j.country}
                            </td>
                            <td className='text-wrap'>{j.title}</td>
                            <td className='text-wrap'>
                              <CopyToClipboard
                                text={j.url}
                                onCopy={() => alert('URL copied successfully!')}
                              >
                                <Button variant='dark'>
                                  <div className='d-flex justify-content-center align-items-center'>
                                    <FaRegCopy />
                                  </div>
                                </Button>
                              </CopyToClipboard>
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default App;
