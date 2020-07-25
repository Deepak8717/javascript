import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/people';

async function getCharacters() {
    const people = [];
    let nextUrl = '/';

    while(nextUrl) {
        const { data: { next, results } } = await axios.get(nextUrl);
        people.push(...results);
        nextUrl = next;
    }
    return people;
}

export default {
    getCharacters
};