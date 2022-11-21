import { put, all, takeEvery } from "redux-saga/effects";
import { DECREMENT, INCREMENT } from "../constants/actionTypes";

function* incrementAsync() {
  console.log("increament");
}

function* decrementAsync() {
  console.log("decrement");
}

function* watchIncrement() {
  yield takeEvery(INCREMENT, incrementAsync);
}

function* watchDecrement() {
  yield takeEvery(DECREMENT, decrementAsync);
}

export default function* rootSaga() {
  yield all([watchDecrement(), watchIncrement()]);
}
