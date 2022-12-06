import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {chatAPI} from "../../api/chatApi";
import {Dispatch} from "redux";


let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages => {
            dispatch(setChatMessages({messages}))
        })
    }
    return _newMessageHandler
}

export const startMessagesListening = createAsyncThunk("chat/startMessagesListening", async (params, {
    dispatch,
}) => {
    chatAPI.createChannel()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
})

export const stopMessagesListening = createAsyncThunk("chat/stopMessagesListening", async (params, {
    dispatch,
}) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stopChannel()
})

export const sendMessage = createAsyncThunk("chat/sendMessage", async (params: { message: string }) => {
    chatAPI.sendMessage(params.message)
})

const initialState = {
    messages: [] as ChatMessageType[]
}

export const slice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatMessages(state, action: PayloadAction<{ messages: ChatMessageType[] }>) {
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

