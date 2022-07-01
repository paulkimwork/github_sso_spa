import * as API from './../../api'
import { all, takeLatest } from 'redux-saga/effects'
import { githubLogin } from './../actions/auth'
import _auth from './auth'
import _sampleAPI from './sampleAPI'
import { getCoffee } from '../actions/sampleAPI'

const auth = _auth(API);
const sampleAPIs = _sampleAPI(API)

export default function* () {
    yield all([
        takeLatest(githubLogin.request, auth.githubLogin),
        takeLatest(getCoffee.request, sampleAPIs.getCoffee)
    ])
}
