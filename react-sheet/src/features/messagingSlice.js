import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

export const fetchMessages = createAsyncThunk("/messages/fetchMessages", async () => {
    const result = await axios.get('https://opulent-computing-machine-5447vvpvw9p2vr6p-46880.app.github.dev/messages')
    console.log("result", result);
    return result.data.map((msg) => ({
        id: msg.id,
        sender: msg.email,
        content: msg.body
    }))
})

export const messagingSlice = createSlice({
    name: "messages",
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = "succeeded"
        });
    }
})

export default messagingSlice.reducer;
