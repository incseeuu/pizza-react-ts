import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type ActionsFilterType = {
    page: number | string
    sort: string
    categories: string
}

export interface FilterState {
    categories: string
    page: number
    sort: string
    valueSearch: string
}

const initialState: FilterState = {
    categories: 'all',
    sort: 'rating',
    page: 1,
    valueSearch: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategories: (state, action: PayloadAction<string>) => {
            state.categories = action.payload
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        changeSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload
        },
        changeFilters: (state, action: PayloadAction<ActionsFilterType>) => {
            state.page = Number(action.payload.page)
            state.categories = action.payload.categories
            state.sort = action.payload.sort
        },
        changeSearchValue(state, action) {
            state.valueSearch = action.payload
        }
    }
})

export const {changeSearchValue, changeCategories, changePage, changeSort, changeFilters} = filterSlice.actions

export default filterSlice.reducer

export const sortSelector = (state: RootState) => state.filterReducer