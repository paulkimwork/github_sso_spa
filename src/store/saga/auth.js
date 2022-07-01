import { call, put } from 'redux-saga/effects'
import { githubLogin as githubLoginAction } from './../actions/auth'

export default (API) => ({
    *githubLogin({ payload }) {
        try {
            const { data } = yield call(API.auth.githubLogin, payload);
            yield put(githubLoginAction.success(data))
        }
        catch (e) {
            yield put(githubLoginAction.failure(e))
        }
    }
})
