import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api';
axios.defaults.headers['Content-Type'] = 'application/json';

async function getCharacters() {
  const people = [];
  let nextUrl = '/people';
  while (nextUrl) {
    const { data: { next, results } } = await axios.get(nextUrl);
    results.forEach(element => {
      const films = element.films.map(f => Number(f.replace(`http://swapi.dev/api/films/`, '').replace('/', '')))
      people.push({ ...element, films });
    });
    nextUrl = next;
  }
  return people;
}

async function getFilm(filmId) {
  const { data } = await axios.get(`/films/${filmId}`);
  return data;
}

export default {
  getCharacters,
  getFilm
};