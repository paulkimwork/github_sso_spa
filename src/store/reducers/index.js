import { combineReducers } from 'redux';
import authReducer from './auth'
import sampleAPIReducer from './sampleAPI';
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    auth: authReducer,
    sampleAPI: sampleAPIReducer,
    ...injectedReducers,
  });

return rootReducer
}
