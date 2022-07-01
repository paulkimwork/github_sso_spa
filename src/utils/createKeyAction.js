import { createAction } from 'redux-act';

const createKeyAction = (key) => (type, ...params) => (
    createAction(`${key}/${type}`, ...params)
)

export default createKeyAction;