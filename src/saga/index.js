import { all } from 'redux-saga/effects';

import GetMovieListEffects from './GetMovieListEffects';

export default function* root() {
  yield all([
    ...GetMovieListEffects
  ]);
}
