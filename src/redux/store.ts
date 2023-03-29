import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";


export const store = configureStore({
    reducer: {filterReducer, cartReducer}
})

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch


//@ts-ignore
window.store = store