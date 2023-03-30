import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pizzaApi} from "../../api/api";
import {stat} from "fs";
import {RootState} from "../store";

export type StatePizzasType = {
    id: number
    imageUrl: string
    title: string
    types: PizzasTypes[]
    sizes: PizzasSize[]
    price: number
    category: number
    rating: number
}

export type PizzasTypes = 0 | 1

export type PizzasSize = 26 | 30 | 40

export type PizzaStateType = {
    items: StatePizzasType[]
    isLoading: 'loading' | 'success' | 'error'
}

const initialState: PizzaStateType = {
    items: [],
    isLoading: 'loading',
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.isLoading = 'loading'
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = 'success'
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.isLoading = 'error'
            state.items = []
        })
    }
})

export const {setPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer


type ParamsType = {
    page: number
    categoriesFilter: string
    search: string
    sortBy: string
    order: string
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzaStatus', async (params: ParamsType) => {
        const {page, categoriesFilter, search, sortBy, order} = params
        const {data} = await pizzaApi.getPizza(page, categoriesFilter, sortBy, order, search)

        return data
    }
)

export const pizzaSelector = (state: RootState) => state.pizzaReducer