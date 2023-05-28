import { SET_TOTAL_DATA } from '../../../constants/actionTypes'

const initialState = {
    totalCampsite: 0,
    totalOrder: 0,
    totalUser: 0,
}

export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOTAL_DATA:
            return {
                ...state,
                totalCampsite: action?.totalCampsite,
                totalOrder: action?.totalOrder,
                totalUser: action?.totalUser,
            }
        default:
            return {
                ...initialState,
            }
    }
}
