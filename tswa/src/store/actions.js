export const types = {
    'START_FETCH_CHARACTERS': 'START_FETCH_CHARACTERS',
    'END_FETCH_CHARACTERS': 'END_FETCH_CHARACTERS',
    'ERROR_FETCH_CHARACTERS': 'ERROR_FETCH_CHARACTERS'
};

export function startFetchCharacters() {
    return { type: types.START_FETCH_CHARACTERS }
}

export function endFetchCharacters(characters) {
    return { type: types.END_FETCH_CHARACTERS, payload: characters};
}

export function errorFetchCharacters(error) {
    return { type: types.ERROR_FETCH_CHARACTERS, payload: error }
}

