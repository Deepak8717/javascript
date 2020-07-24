import React, { useState, useEffect } from 'react';
import Loading from './containers/Loading';
import ErrorMessage from './containers/ErrorMessage';
import AppWrapper from './containers/AppWrapper';

const App = () => {
  const [data, setData] = useState({
    films: [],
    characters: [],
    lastMovie: '',
    currentCharacter: '',
    currentCharacterIndex: '',
    error: false,
    loading: false,
  });
  const handleChange = async (e) => {
    setData({ ...data, loading: true });
    try {
      const { value } = e.target;
      let parsedValue = Number(value);
      const characterResponse = await fetch(
        `https://swapi.dev/api/people/${++parsedValue}/`
      );
      const { name, films } = await characterResponse.json();
      let promises = films.map(async (url) => {
        const filmURL = url.split('/films');
        const newURL = `https://swapi.dev/api/films${filmURL[1]}`;
        return fetch(newURL).then((y) => y.json());
      });
      Promise.all(promises).then((results) => {
        const titles = results.map((i) => <div>{i.title}</div>);
        const releases = results.map((i) => ({
          date: i.release_date,
          title: i.title,
        }));
        const sortedReleases = releases.sort((a, b) =>
          a.date > b.date ? -1 : 1
        );
        const lastMovie = sortedReleases[0];
        setData({
          ...data,
          loading: false,
          lastMovie,
          films: titles,
          currentCharacter: name,
          currentCharacterIndex: value,
        });
      });
    } catch (error) {
      setData({ ...data, error: true });
    }
  };
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        let size = 10;
        let characters = [];
        const characterCountResponse = await fetch(
          `https://swapi.dev/api/people/`
        );
        const { count } = await characterCountResponse.json();
        for (let i = 1; i <= Math.ceil(count / size); i++) {
          const pagesResponse = await fetch(
            `https://swapi.dev/api/people/?page=${i}`
          );
          const { results } = await pagesResponse.json();
          characters.push(...results);
        }
        setData({ ...data, characters, loading: false });
      } catch (error) {
        setData({ ...data, error: true });
      }
    })();
    // eslint-disable-next-line
  }, []);
  const { error, loading } = data;
  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  return (
    <AppWrapper data={data} setData={setData} handleChange={handleChange} />
  );
};

export default App;
