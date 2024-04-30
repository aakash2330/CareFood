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
        },
    changeDonationQuantity(state: { items: any[] }, action){
      console.log(state.items,action.payload)
      console.log({updatedState : state.items.map((item)=>{return item.card.info.id==action.payload.id ? {...item,donationQuantity:action.payload.donationQuantity}:item})})
      state.items=state.items.map((item)=>{return item.card.info.id==action.payload.id ? {...item,card:{...item.card , info:{...item.card.info,donationQuantity:action.payload.donationQuantity}}}:item})
    }
    }
})

export const { addToCart, clearCart,removeFromCart,changeDonationQuantity } = cartSlice.actions
export default cartSlice.reducer
