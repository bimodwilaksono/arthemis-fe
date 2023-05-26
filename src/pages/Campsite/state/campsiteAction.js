import campServices from '../../../services/campServices'

export const getAllCampsites = () => {
    return function (dispatch) {
        campServices.getAll(dispatch)
    }
}

export const updateCampById = (id, payloadCamp, callback) => {
    const payload = {
        id: id,
        ...payloadCamp,
    }
    return function (dispatch) {
        campServices.updateById(dispatch, payload, callback)
    }
}

export const getCampById = (id, callback) => {
    return function (dispatch) {
        campServices.getById(dispatch, id, callback)
    }
}

export const deleteCampById = (id) => {
    return function (dispatch) {
        campServices.deleteById(id, dispatch)
    }
}

export const createNewCamp = (payload, callback) => {
    return function (dispatch) {
        campServices.addNew(dispatch, payload, callback)
    }
}
