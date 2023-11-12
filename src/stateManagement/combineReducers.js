import accountReducer from './reducers/accountReducer';

const {combineReducers} = require('redux');
const {default: sessionReducer} = require('./reducers/sessionReducer');

const rootReducer = combineReducers({
  session: sessionReducer,
  account: accountReducer,
});

export default rootReducer;
