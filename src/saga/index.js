import {all} from "redux-saga/effects"
import {countWatcher} from "./countSaga";
import {userWatcher} from "./userSaga";

// all - глобальный watcher, который следит за всеми watcher-ами
export function* rootWatcher () {
    yield all([countWatcher(), userWatcher()])
}