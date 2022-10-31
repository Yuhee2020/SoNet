import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {profileAPI, ProfileType} from "../../api/soNetApi";
import {setAppError, setAppStatus} from "./appReducer";


export const getProfile = createAsyncThunk("profile/getProfile", async (params: { userId: string }, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await profileAPI.getProfile(+params.userId)
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
    profile: {} as ProfileType
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
    }
})

export const profileReducer = slice.reducer
export const {setCount} = slice.actions