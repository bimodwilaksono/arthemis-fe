import userServices from '../../../services/userServices'

export const getAllUsers = (page = 1) => {
    return function (dispatch) {
        userServices.getAll(dispatch, page)
    }
}

export const updateUserById = (id, payloadUser, callback, page) => {
    const payload = {
        id: id,
        ...payloadUser,
    }
    return function (dispatch) {
        userServices.updateById(dispatch, payload, callback, page)
    }
}

export const getUserById = (id, callback) => {
    return function (dispatch) {
        userServices.getById(dispatch, id, callback)
    }
}

export const deleteUserById = (id, page) => {
    return function (dispatch) {
        userServices.deleteById(id, dispatch, page)
    }
}
