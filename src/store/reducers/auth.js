import { createReducer } from 'redux-act'
import {
    githubLogin, githubLogout,
} from '../actions/auth'

export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
};

export default createReducer({
    [githubLogin.request]: (state, payload) => {
        return { ...state, isLoading: true }
    },
    [githubLogin.success]: (state, payload) => {
        localStorage.setItem("user", JSON.stringify(payload));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        return { ...state, isLoggedIn: true, user: payload, isLoading: false }
    },
    [githubLogin.failure]: (state, payload) => {
        return { ...state, ...payload, isLoggedIn: false, isLoading: false }

    },
    [githubLogout.success]: (state, payload) => {
        localStorage.clear();
        return { ...state, user: null, isLoggedIn: false }
    },
}, initialState)