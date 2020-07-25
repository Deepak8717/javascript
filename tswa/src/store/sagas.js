import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../api/SwapiApi';
import { types, endFetchCharacters, errorFetchCharacters } from './actions';

function* fetchCharacters(action) {
   try {
      const characters = yield call(Api.getCharacters);
      yield put(endFetchCharacters(characters));
   } catch (e) {
      yield put(errorFetchCharacters(e));
   }
}

function* saga() {
  yield takeLatest(types.START_FETCH_CHARACTERS, fetchCharacters);
}

export default saga;