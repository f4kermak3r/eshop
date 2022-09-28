import { signInSuccess, signInFailure } from "./user.action";

import { takeLatest, all, call, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";

export function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser());

        if(!userAuth) return;

        yield put(signInSuccess(userAuth));
    }
    catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onUserChecked(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSaga(){
    yield all([]);
}