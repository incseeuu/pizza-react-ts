import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { StatePizzasType } from "./pizzaSlice";
import {stat} from "fs";
import {RootState} from "../store";


export type PizzaItemTypeWithCount = StatePizzasType & {
    count: number
}

export type PizzaCartStateType = {
    totalPrice: number
    items: PizzaItemTypeWithCount[]
}

const initialState: PizzaCartStateType = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizzaItem(state, action: PayloadAction<PizzaItemTypeWithCount>){
            const findItem = state.items.find(el => el.id === action.payload.id)

            if(findItem){
                findItem.count++
            } else {
                state.items.push({...action.payload, count: 1})
            }
            state.totalPrice = state.items.reduce((acc, val) => val.count * val.price + acc, 0)
        },
        plusPizzaItem(state, action: PayloadAction<number>){
            state.items.map(el => el.id === action.payload ? {...el, count: el.count++} : el)
        },
        minusPizzaItem(state, action: PayloadAction<number>){
            // state.items.map(el => el.id === action.payload ? {...el, count: el.count--} : el)
            const findItem = state.items.find(el => el.id === action.payload)

            if(findItem){
                findItem.count--
            }
        },
        removePizzaItem(state, action: PayloadAction<number>){
            state.items = state.items.filter(el => el.id !== action.payload)
            if(state.items.length === 0){
                state.totalPrice = 0
            }
        },
        removeAllPizzaItems(state, action: PayloadAction){
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const {addPizzaItem, removePizzaItem,removeAllPizzaItems, plusPizzaItem, minusPizzaItem} = cartSlice.actions

export default cartSlice.reducer

export const cartSelector = (state: RootState) => state.cartReducer