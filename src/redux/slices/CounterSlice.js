import { createSlice, createSelector } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        }
    }
});


/*
This defines a memoized selector getCount to extract the counter slice from the Redux store.

It assumes that in your Redux store, the reducer for this slice is mounted at state.counter.

It just returns the value as-is (no transformation).

createSelector creates a memoized selector — a function that returns derived or specific pieces of the Redux state, and only re-computes if its input changes.

inputSelector: A function that selects a slice of the state (e.g., state.counter)

resultFunc: A function that receives the result of the inputSelector and returns the final value (optional)
*/
export const getCount = createSelector(store => store.counter, counterSlice => counterSlice)

//action creators
export const { decrement, increment } = counterSlice.actions

//Exports the reducer function (so it can be added to the Redux store)
export default counterSlice.reducer;