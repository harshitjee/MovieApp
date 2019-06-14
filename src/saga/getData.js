import {  put } from 'redux-saga/effects';
import { create } from 'apisauce';

import DataActions from '../redux/MovieListReducer';

export function* getData(api, action) {
responce =yield getJsonApiCallHandler();
 yield put(DataActions.onSucess(responce.data.movies))
}

const api = create({ baseURL: 'https://api.myjson.com/bins/itzx2' });

export function getJsonApiCallHandler() {
return api.get('');
}