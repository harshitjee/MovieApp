import { takeLatest } from "redux-saga/effects";

import { UserTypes } from "../redux/MovieListReducer";
import { getData } from './getData';

export default [
    takeLatest(UserTypes.GET_DATA, getData)
]