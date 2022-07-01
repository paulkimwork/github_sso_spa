import { call, put } from 'redux-saga/effects'
import { getCoffee } from '../actions/sampleAPI';

export default (API) => ({
    *getCoffee({ payload }) {
            try {
            const { data } = yield call(API.sampleAPIs.getCoffee, payload);
            yield put(getCoffee.success(data))
        }
        catch (e) {
            console.log(e)
            yield put(getCoffee.failure(e))
        }
    }
})
