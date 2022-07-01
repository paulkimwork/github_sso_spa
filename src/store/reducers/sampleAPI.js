import { createReducer } from 'redux-act';
import { getCoffee } from '../actions/sampleAPI';

export const initialState = {
    isLoading: false,
    coffees: [],
};

export default createReducer({
    [getCoffee.request]: (state, payload) => {
        return { ...state, isLoading: true }
    },
    [getCoffee.success]: (state, payload) => {
        return { ...state, coffees: payload, isLoading: false }
    },
    [getCoffee.failure]: (state, payload) => {
        return { ...state, coffees: [], isLoading: false }
    },
}, initialState)