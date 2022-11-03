import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../Cart Folder/cartslice";
import loginSlice from "../redux/loginSlice";

export const store=configureStore({
    reducer :{
        // cart:cartslice,
        loginProduct:loginSlice,
        cartProduct:cartslice,
    }
})

