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
            const updatedItems = state.items.filter((item: { id: any }) => item.id !== action.payload.id);
            state.items = updatedItems;
        }
    }
})

export const { addToCart, clearCart } = cartSlice.actions
export default cartSlice.reducer