import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {profileAPI, ProfileType} from "../../api/soNetApi";
import {setAppError, setAppStatus} from "./appReducer";


export const getProfile = createAsyncThunk("profile/getProfile", async (params: { userId: number}, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await profileAPI.getProfile(+params.userId)
        if(res.data.userId) {
            dispatch(getStatus({userId: res.data.userId}))
        }
        return res.data
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const getStatus = createAsyncThunk("profile/getStatus", async (params: { userId: number}, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await profileAPI.getStatus(+params.userId)
        return res.data
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

const initialState = {
    profile: {} as ProfileType,
    status: ""
}

export const slice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setCount(state, action: PayloadAction<{ count: number }>) {

        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            if (action.payload) {
                state.profile = action.payload
            }
        });
        builder.addCase(getStatus.fulfilled, (state, action) => {
            if (action.payload) {
                state.status = action.payload
            } else state.status=""
        });
    }
})

export const profileReducer = slice.reducer
export const {setCount} = slice.actions