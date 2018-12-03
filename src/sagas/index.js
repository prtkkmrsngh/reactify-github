import { call, put, takeLatest } from 'redux-saga/effects';

import {
  REQUEST_SEARCH_API_DATA,
  RECEIVE_USER_DATA,
  REQUEST_USER_REPOS,
} from './../constants/actiontypes';
import { receiveSearchApiData, receiveUserData } from './../actions';
import { fetchUser, fetchUserData, fetchUserRepos } from './../api';

function* getSearchApiData(action) {
  try {
    // do api call
    const result = yield call(fetchUser, ...[action.payload]);

    yield put(receiveSearchApiData(result.data));
  } catch (e) {
    console.log(e);
  }
}

function* getUserData(action) {
  try {
    // do api call
    const result = yield call(fetchUserData, ...[action.payload]);

    yield put(receiveUserData(result.data));
  } catch (e) {
    console.log(e);
  }
}

function* getUserRepos(action) {
  try {
    console.log(action);

    // do api call
    const result = yield call(fetchUserRepos, ...[action.payload]);

    yield put(receiveUserData(result.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield [
    takeLatest(REQUEST_SEARCH_API_DATA, getSearchApiData),
    takeLatest(RECEIVE_USER_DATA, getUserData),
    takeLatest(REQUEST_USER_REPOS, getUserRepos),
  ];
}
