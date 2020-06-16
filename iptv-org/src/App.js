import React, { useState, useEffect } from 'react';
import mdParse from 'md-2-json';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import Content from './components/Content';
import Notification from './components/Notification';

const App = () => {
  const [settings, setSettings] = useState({
    error: null,
    loading: false,
    content: null,
  });
  useEffect(() => {
    (async () => {
      const r = await fetch(
        `https://cors-unlimited.herokuapp.com/https://raw.githubusercontent.com/iptv-org/iptv/master/README.md`
      );
      const t = await r.text();
      return mdParse.parse(t);
    })()
      .then((d) => {
        setSettings({ ...settings, content: d });
      })
      .catch(() => {
        setSettings({ ...settings, error: true });
      });
    // eslint-disable-next-line
  }, []);
  const { error, loading, content } = settings;
  if (loading || content === null) return <Loading />;
  if (error) return <ErrorMessage />;
  return (
    <>
      <Content settings={settings} setSettings={setSettings} />
      <Notification settings={settings} setSettings={setSettings} />
    </>
  );
};

export default App;
