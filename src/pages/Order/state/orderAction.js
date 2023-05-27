import orderServices from '../../../services/orderServices'

export const getAllOrders = () => {
    return function (dispatch) {
        orderServices.getAll(dispatch)
    }
}

export const getOrderById = (id, callback) => {
    return function (dispatch) {
        orderServices.getById(dispatch, id, callback)
    }
}

export const updateOrderById = (id, payloadOrder, callback) => {
    return function (dispatch) {
        orderServices.updateById(dispatch, id, payloadOrder, callback)
    }
}
