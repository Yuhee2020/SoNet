import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {chatAPI} from "../../api/chatApi";



const newMessagehandler=(messages:ChatMessageType[])=>{
    (setChatMessages({messages}))
}

export const startMessagesListening= createAsyncThunk("chat/startMessagesListening", async (params, {
    dispatch,
}) => {
    chatAPI.subscribe(newMessagehandler)
})

export const stopMessagesListening= createAsyncThunk("chat/stopMessagesListening", async (params, {
    dispatch,
}) => {
    chatAPI.unsubscribe(newMessagehandler)
})

const initialState = {
 messages:[] as ChatMessageType[]
}

export const slice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatMessages(state, action: PayloadAction<{messages:ChatMessageType[]}>) {
            state.messages = [...state.messages, ...action.payload.messages]
        },
    }
})


export const chatReducer = slice.reducer
export const {setChatMessages} = slice.actions

export type ChatMessageType = {
	userId: number;
	userName: string;
	message: string;
	photo: string;
}

