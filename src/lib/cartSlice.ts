import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [ ]
    },
    reducers: {
        addToCart(state: { items: any[] }, action) {
            state.items.push(action.payload);
        },
        clearCart(state){
            state.items.length = 0
        },
        removeFromCart(state: { items: any[] }, action) {
            const itemId = action.payload;
            state.items = state.items.filter(item => item?.id !== itemId)
        }
    }
})

export const { addToCart, clearCart,removeFromCart } = cartSlice.actions
export default cartSlice.reducer