import { combineReducers } from 'redux'
import authReducer  from './auth_reducers'
import studentReducer from './attendance_reducers'

const rootReducer = combineReducers({
   auth: authReducer,
   students_list: studentReducer
});

export default rootReducer;
