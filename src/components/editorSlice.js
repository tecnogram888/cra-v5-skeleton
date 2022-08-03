import { createSlice } from '@reduxjs/toolkit'

export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        value: {
            title: 'titles',
            children: [{
                title: 'sub child',
                children: [{
                    children: [{
                        title: 'sub sub child',
                        children: []
                    }, 'asdf', 'next']
                }],
            }, 'asdf', 'next']
        },
        num_oranges: 3,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.num_oranges += 1
        },
        decrement: (state) => {
            state.num_oranges -= 1
        },
        incrementByAmount: (state, action) => {
            state.num_oranges += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = editorSlice.actions

export default editorSlice.reducer