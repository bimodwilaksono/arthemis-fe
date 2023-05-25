import { combineReducers } from 'redux'
import authReducer from '../common/state/authReducer'
import UserReducer from '../pages/Users/state/userReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: UserReducer,
})

export default rootReducer
