import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { nanoid } from 'nanoid'

export const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: {},
    },
    reducers: {
        addEvent(state, action) {
            const id = nanoid()
            const { name, location } = action.payload
            state.events[id] = { id, name, location }
        }
    },
})

export const selectAllEvents = createSelector(state => {
    console.log('state viewedd', state);
    return Object.keys(state.event.events)
}, x => x)

export const selectEventId = createSelector((state, eventId) => {
    console.log('selectEventId', state);
    return state.event.events[eventId]
}, x => x)

// Action creators are generated for each case reducer function
export const { addEvent } = eventSlice.actions

export default eventSlice.reducer