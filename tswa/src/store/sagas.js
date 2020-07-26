import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import Api from '../api/SwapiApi';
import {
  types,
  endFetchCharacters,
  errorFetchCharacters,
  endFetchCharacter,
} from './actions';

const getCharacters = (state) => state.characters.characters;

function* fetchCharacters() {
  try {
    const characters = yield call(Api.getCharacters);
    yield put(endFetchCharacters(characters));
  } catch (e) {
    yield put(errorFetchCharacters(e));
  }
}

function* fetchCharacter({ payload: currentCharacterId }) {
  try {
    const characters = yield select(getCharacters);
    const currentCharacter = characters.find((c) => c.id === currentCharacterId);

    const releases = yield all(
      currentCharacter.films.map((filmId) => call(Api.getFilm, filmId))
    );
    const sortedReleases = releases.sort((a, b) => (a.date > b.date ? -1 : 1));
    const lastMovie = sortedReleases[0];
    yield put(endFetchCharacter(currentCharacter, releases, lastMovie));
  } catch (e) {
    yield put(errorFetchCharacters(e));
  }
}

function* saga() {
  yield takeLatest(types.START_FETCH_CHARACTERS, fetchCharacters);
  yield takeLatest(types.START_FETCH_CHARACTER, fetchCharacter);
}

export default saga;
