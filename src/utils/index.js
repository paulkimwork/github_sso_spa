import createKeyAction from './createKeyAction'
import createApiAction from './createApiAction'
import history from './history'

const setToken = (authData) => {
    localStorage.setItem('authData', JSON.stringify({
    }))
}

const removeToken = (authData) => localStorage.removeItem(authData)
const getToken = () => JSON.parse(localStorage.getItem('authData'))

export {
    setToken,
    getToken,
    createApiAction,
    createKeyAction,
    removeToken,
    history
}