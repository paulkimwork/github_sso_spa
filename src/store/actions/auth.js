import { 
    createApiAction as _createApiAction,
    createKeyAction as _createKeyAction,
}  from '../../utils'

const key = 'auth'
const createApiAction = _createApiAction(key)
export const githubLogin = createApiAction('GITHUB_LOGIN')
export const githubLogout = createApiAction('GITHUB_LOGOUT')
