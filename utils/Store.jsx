import { configureStore } from "@reduxjs/toolkit";
import cartslice from './cartslice'

const Store =configureStore({
    reducer:{
        cart:cartslice
    },
})
export default Store;