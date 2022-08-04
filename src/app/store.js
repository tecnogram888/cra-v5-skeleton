import { configureStore } from '@reduxjs/toolkit'
import editorReducer from './../components/editorSlice'
import eventReducer from './../reducers/eventSlice'

export default configureStore({
    reducer: {
        editor: editorReducer,
        event: eventReducer,
    },
})
