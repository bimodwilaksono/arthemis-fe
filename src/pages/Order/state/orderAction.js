import orderServices from '../../../services/orderServices'

export const getAllOrders = (page = 1) => {
    return function (dispatch) {
        orderServices.getAll(dispatch, page)
    }
}

export const getOrderById = (id, callback) => {
    return function (dispatch) {
        orderServices.getById(dispatch, id, callback)
    }
}

export const updateOrderById = (id, payloadOrder, callback, page) => {
    return function (dispatch) {
        orderServices.updateById(dispatch, id, payloadOrder, callback, page)
    }
}
