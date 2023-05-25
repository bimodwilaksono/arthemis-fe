import userServices from '../../../services/userServices'

export const getAllUsers = () => {
    return function (dispatch) {
        userServices.getAll(dispatch)
    }
}

export const updateUserById = (id, payloadUser, callback) => {
    const payload = {
        id: id,
        ...payloadUser,
    }
    return function (dispatch) {
        userServices.updateById(dispatch, payload, callback)
    }
}

export const getUserById = (id, callback) => {
    return function (dispatch) {
        userServices.getById(dispatch, id, callback)
    }
}

export const deleteUserById = (id) => {
    return function (dispatch) {
        userServices.deleteById(id)
    }
}
