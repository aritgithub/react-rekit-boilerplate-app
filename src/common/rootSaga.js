import { all } from 'redux-saga/effects';
import * as commonSagas from '../features/common/redux/sagas';
import * as examplesSagas from '../features/examples/redux/sagas';
import * as homeSagas from '../features/home/redux/sagas';
// This file is auto maintained by rekit-plugin-redux-saga,
// you usually don't need to manually edit it.

// NOTE: don't change featureSagas declaration pattern, it's used by rekit-plugin-redux-saga.
const featureSagas = [
  commonSagas,
  examplesSagas,
  homeSagas
];

const sagas = featureSagas.reduce((prev, curr) => [
  ...prev,
  ...Object.keys(curr).map(k => curr[k]),
], [])
// a saga should be function, below filter avoids error if redux/sagas.js is empty.
.filter(s => typeof s === 'function');

// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* rootSaga() {
  yield all(sagas.map(saga => saga()));
}
