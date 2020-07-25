export const types = {
  'START_FETCH_CHARACTERS': 'START_FETCH_CHARACTERS',
  'END_FETCH_CHARACTERS': 'END_FETCH_CHARACTERS',
  'ERROR_FETCH_CHARACTERS': 'ERROR_FETCH_CHARACTERS',
  'START_FETCH_MOVIES': 'START_FETCH_MOVIES',
  'END_FETCH_MOVIES': 'END_FETCH_MOVIES',
  'ERROR_FETCH_MOVIES': 'ERROR_FETCH_MOVIES',
  'START_FETCH_CHARACTER': 'START_FETCH_CHARACTER',
  'END_FETCH_CHARACTER': 'END_FETCH_CHARACTER',
};

export function startFetchCharacters() {
  return { type: types.START_FETCH_CHARACTERS }
}

export function endFetchCharacters(characters) {
  return { type: types.END_FETCH_CHARACTERS, payload: characters };
}

export function errorFetchCharacters(error) {
  return { type: types.ERROR_FETCH_CHARACTERS, payload: error }
}

export function startFetchCharacter(characterId) {
  return { type: types.START_FETCH_CHARACTER, payload: characterId }
}

export function endFetchCharacter( currentCharacter, movies, latestMovie) {
  return { type: types.END_FETCH_CHARACTER, payload: { currentCharacter, movies, latestMovie } }
}

export function startFetchMovies() {
  return { type: types.START_FETCH_MOVIES }
}

export function endFetchMovies(movies) {
  return { type: types.END_FETCH_MOVIES, payload: movies };
}

export function errorFetchMovies(error) {
  return { type: types.ERROR_FETCH_MOVIES, payload: error }
}

