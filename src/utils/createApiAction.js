import { createAction } from 'redux-act'

const createApiAction = key => type => {
    const name = `${key}/${type}`
    return {
        request: createAction(`${name}::REQUEST`),
        success: createAction(`${name}::SUCCESS`),
        failure: createAction(`${name}::FAILURE`),
        cancel: createAction(`${name}::CANCEL`),
        fromState: createAction(`${name}::FROM_STATE`),
        throttle: createAction(`${name}::THROTTLE`)
    }
}

export default createApiAction;