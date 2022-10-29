import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {usersAPI, UserType} from "../../api/soNetApi";
import {setAppError, setAppStatus} from "./appReducer";
import {StateType} from "../store";


export const getUsers = createAsyncThunk("users/getUsers", async (params, {
    dispatch, getState,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const state = getState() as StateType
        const params = state.users.paramsForRes
        const res = await usersAPI.getUsers(params)
        if (res.data.error === null) {
            return res.data
        } else {
            dispatch(setAppError({error: res.data.error}))
        }
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})


const initialState = {
    users: [] as UserType[],
    totalCount: 0,
    paramsForRes: {
        count: 5,
        page: 1,
        friend: null as null | boolean,
        term: null as null | string
    }
}

export const slice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setCount(state, action: PayloadAction<{ count: number }>) {
            state.paramsForRes.count = action.payload.count
        },
        setPage(state, action: PayloadAction<{ page: number }>) {
            state.paramsForRes.page = action.payload.page
        },
        setIsFriend(state, action: PayloadAction<{ isFriend: boolean }>) {
            state.paramsForRes.friend = action.payload.isFriend
        },
        setTerm(state, action: PayloadAction<{ term: string }>) {
            state.paramsForRes.term = action.payload.term
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            if (action.payload) {
                state.users = action.payload.items;
                state.totalCount = action.payload.totalCount
            }
        });
    }
})

export const usersReducer = slice.reducer
export const {setCount, setPage, setIsFriend, setTerm} = slice.actions