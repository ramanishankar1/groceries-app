import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartitems:[],
    carttotalQuantity:0,
    carttotalAmount:0
};
const cartSlice=createSlice({
    name:"cartItems",
    initialState,
    reducers:{
        addtocart(state,action){
            state.cartitems.push(action.payload);
        }
    },
});

export const{addtocart}=cartSlice.actions;
export default cartSlice.reducer