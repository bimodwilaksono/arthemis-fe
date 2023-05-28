import { combineReducers } from 'redux'
import authReducer from '../common/state/authReducer'
import UserReducer from '../pages/Users/state/userReducer'
import campsiteReducer from '../pages/Campsite/state/campsiteReducer'
import orderReducer from '../pages/Order/state/orderReducer'
import dashboardReducer from '../pages/Dashboard/state/dashBoardReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: UserReducer,
    camp: campsiteReducer,
    order: orderReducer,
    dashboard: dashboardReducer,
})

export default rootReducer
