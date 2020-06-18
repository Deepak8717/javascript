import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const App = () => {
  const [channel, setChannel] = useState({
    keyword: '',
    url: null,
    toggle: false,
  });
  const { keyword, url, toggle } = channel;
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
          <p>
            Check available channels online at this address:{' '}
            <a
              className='text-muted text-decoration-none font-weight-bold'
              variant='link'
              href='https://iptv-org.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Listing
            </a>
          </p>
        </div>
      ) : (
        <ReactPlayer className='app' controls playing url={url} />
      )}
    </>
  );
};

export default App;
