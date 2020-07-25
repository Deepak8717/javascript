import { types } from './actions';

const defaultState = {
    films: [],
    characters: [],
    lastMovie: '',
    currentCharacter: '',
    currentCharacterIndex: '',
    error: false,
    loading: true
};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case types.START_FETCH_CHARACTERS:
            return {
                ...state,
                characters: [],
                loading: true,
                error: false
            };
        case types.END_FETCH_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                loading: false,
                error: false
            };
        case types.ERROR_FETCH_CHARACTERS:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;