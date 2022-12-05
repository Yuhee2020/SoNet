import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState = {
 messages:[] as ChatMessageType[]
}

export const slice = createSlice({
    name: "app",
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

