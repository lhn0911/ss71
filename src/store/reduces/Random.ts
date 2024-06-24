import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

const randomReducer = createSlice({
    name: "random-reducer",
    initialState,
    reducers: {
        addRandom: (state) => {
            const randomNumber = Math.floor(Math.random() * 100);
            state.push(randomNumber);
        }
    }
});

export const { addRandom } = randomReducer.actions;

export default randomReducer.reducer;
