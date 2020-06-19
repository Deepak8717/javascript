import React, { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Player from './components/Player';
import Popup from './components/Popup';

const App = () => {
  const [show, setShow] = useState(false);
  const [channel, setChannel] = useState({
    url: null,
    urls: [],
    keyword: '',
    toggle: false,
  });
  const { keyword, url, toggle, urls } = channel;

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
      <Aside
        keyword={keyword}
        toggle={toggle}
        channel={channel}
        setShow={setShow}
        setChannel={setChannel}
      />
      <Player url={url} />
      <Popup
        urls={urls}
        show={show}
        setShow={setShow}
        channel={channel}
        setChannel={setChannel}
      />
    </>
  );
};

export default App;
