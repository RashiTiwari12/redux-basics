import { configureStore } from '@reduxjs/toolkit'
import { nameSlice } from './nameSlice'

//creating store 
export const store = configureStore({
    reducer: {
        personName: nameSlice.reducer
    }
})