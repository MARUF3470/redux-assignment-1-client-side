import { SEARCH_INPUT, TOGGLE_STOCK, TOGGLE_TYPE } from "../actionTypes/actionTypes"


export const toggleType = (typeName) => {
    return {
        type: TOGGLE_TYPE,
        payload: typeName
    }
}
export const toggleStock = () => {
    return {
        type: TOGGLE_STOCK
    }
}
export const searchInput = (keyword) => {
    return {
        type: SEARCH_INPUT,
        payload: keyword
    }
}