import { configureStore } from '@reduxjs/toolkit'
import { nameSlice } from './nameSlice'

export const store = configureStore({
    reducer: {
        personName: nameSlice.reducer
    }
})