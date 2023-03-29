import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


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
}

const initialState: PizzaStateType = {
    items: []
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas(state, action){
            state.items = action.payload
        }
    }
})

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas',
    async () => {

    }
)