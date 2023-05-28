import dashboardServices from '../../../services/dashboardServices'

export const getAllTotalData = () => {
    return function (dispatch) {
        dashboardServices.getAll(dispatch)
    }
}
