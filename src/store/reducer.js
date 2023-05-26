import { combineReducers } from 'redux'
import authReducer from '../common/state/authReducer'
import UserReducer from '../pages/Users/state/userReducer'
import campsiteReducer from '../pages/Campsite/state/campsiteReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: UserReducer,
    camp: campsiteReducer
})

export default rootReducer
