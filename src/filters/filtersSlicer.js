import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    status: "All",
    colors: []
}

const filtersReducer = createReducer(initialState, {
    "filters/changeStatus": (state, action) => state.status = action.payload.status,
    "filters/addColors": (state, action) => state.colors.push(action.payload.color),
    "filters/removeColors": (state, action) => state.colors.filter((color) => color!==action.payload.color)
})

export default filtersReducer