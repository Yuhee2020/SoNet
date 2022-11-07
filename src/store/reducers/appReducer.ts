import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {handleServerAppError} from "../../utils/handleServerAppError";
import {authAPI, LoginDataType} from "../../api/soNetApi";


export const loginTC = createAsyncThunk("app/login", async (params: LoginDataType, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await authAPI.login(params)
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedIn({value: true, myId: res.data.data.userId}))
        } else if(res.data.resultCode===10){
            dispatch (getCaptcha())
        }
        else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const logoutTC = createAsyncThunk("app/logout", async (params, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedIn({value: false, myId: 0}))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const initializeAppTC = createAsyncThunk("app/initializeApp", async (params, {dispatch, rejectWithValue}) => {
    try {
        const res = await authAPI.authMe()
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedIn({value: true, myId: res.data.data.id}))
        }
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setInitialized({value: true}))
    }
})

export const getCaptcha = createAsyncThunk("app/getCaptcha", async (params, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await authAPI.getCaptcha()
        return res.data.url
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

const initialState = {
    appStatus: "idle" as AppStatusType,
    error: null as null | string,
    isLoggedIn: false,
    isInitialized: false,
    myId: 0,
    captcha:"",
    theme:"light"
}

export const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{ status: AppStatusType }>) {
            state.appStatus = action.payload.status
        },
        setAppError(state, action: PayloadAction<{ error: null | string }>) {
            state.error = action.payload.error
        },
        setIsLoggedIn(state, action: PayloadAction<{ value: boolean, myId: number }>) {
            state.isLoggedIn = action.payload.value
            state.myId = action.payload.myId
            state.captcha=""
        },
        setInitialized(state, action: PayloadAction<{ value: boolean }>) {
            state.isInitialized = action.payload.value
        },
        setTheme(state, action: PayloadAction<{theme: ThemeType }>) {
            state.theme = action.payload.theme
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCaptcha.fulfilled, (state, action) => {
            if (action.payload) {
                state.captcha = action.payload
            }
        });
    }
})


export const appReducer = slice.reducer
export const {setAppStatus, setAppError, setIsLoggedIn, setInitialized, setTheme} = slice.actions

export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type ThemeType = "light" | "dark"