import { 
    createApiAction as _createApiAction,
    createKeyAction as _createKeyAction,
}  from '../../utils'

const key = 'sampleAPI'
const createApiAction = _createApiAction(key)
export const getCoffee = createApiAction('GET_COFFEE')