import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron fluid className='m-0 text-muted rounded p-3 bg-black'>
      <h2>IPTV</h2>
      <p>
        Collection of 8000+ publicly available IPTV channels from all over the
        world. Internet Protocol television (IPTV) is the delivery of television
        content over Internet Protocol (IP) networks.
      </p>
      <p>
        To watch IPTV you just need to paste this link
        https://iptv-org.github.io/iptv/index.m3u to any player with support
        M3U-playlists.
      </p>
      <p>
        Click the <strong>Copy</strong> button to get the M3U URL.
      </p>
      <ButtonGroup aria-label='Action buttons'>
        <Button
          variant='dark'
          href='https://github.com/iptv-org/iptv'
          target='_blank'
          rel='noopener noreferrer'
        >
          Reference
        </Button>
        <Button
          variant='secondary'
          href='https://github.com/tpkahlon/javascript/tree/master/iptv-org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Code
        </Button>
      </ButtonGroup>
    </Jumbotron>
  );
};

export default Header;
