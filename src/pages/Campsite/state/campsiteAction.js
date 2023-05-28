import campServices from '../../../services/campServices'

export const getAllCampsites = (page = 1) => {
    return function (dispatch) {
        campServices.getAll(dispatch, page)
    }
}

export const updateCampById = (id, payloadCamp, callback, page) => {
    const payload = {
        id: id,
        ...payloadCamp,
    }
    return function (dispatch) {
        campServices.updateById(dispatch, payload, callback, page)
    }
}

export const getCampById = (id, callback) => {
    return function (dispatch) {
        campServices.getById(dispatch, id, callback)
    }
}

export const deleteCampById = (id, page) => {
    return function (dispatch) {
        campServices.deleteById(id, dispatch, page)
    }
}

export const createNewCamp = (payload, callback, page) => {
    return function (dispatch) {
        campServices.addNew(dispatch, payload, callback, page)
    }
}
