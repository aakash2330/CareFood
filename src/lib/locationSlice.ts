
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLocation: null,
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        getLocation: (state, action) => {
            state.userLocation = action.payload;
            localStorage.setItem("userLocation", JSON.stringify(state.userLocation))
            console.log(state.userLocation)
        }
    }
})

export default locationSlice.reducer
export const { getLocation } = locationSlice.actions