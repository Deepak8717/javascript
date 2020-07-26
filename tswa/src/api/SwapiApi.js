/* eslint-disable no-await-in-loop */

import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api';
axios.defaults.headers['Content-Type'] = 'application/json';

const getCharacters = async () => {
  const people = [];
  let nextUrl = '/people/';
  while (nextUrl) {
    const { data: { next, results } } = await axios.get(nextUrl);
    results.forEach(element => {
      const films = element.films.map(f => Number(f.replace(`http://swapi.dev/api/films/`, '').replace('/', '')))
      const id = element.url.replace('http://swapi.dev/api/people/', '').replace('/','');
      people.push({ ...element, films, id });
    });
    nextUrl = next === null ? null : next.replace(`http`, `https`);
  }
  return people;
};

const getFilm = async (filmId) => {
  const { data } = await axios.get(`/films/${filmId}`);
  return data;
};

export default {
  getCharacters,
  getFilm,
};
