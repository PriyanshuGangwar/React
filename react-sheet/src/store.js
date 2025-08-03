import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./features/messagingSlice"

export const store = configureStore({
    reducer: {
        messages: messagesReducer
    }        
})
