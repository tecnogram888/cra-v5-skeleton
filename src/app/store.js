import { configureStore } from '@reduxjs/toolkit'
import editorReducer from './../components/editorSlice'

export default configureStore({
    reducer: {
        editor: editorReducer,
    },
})
