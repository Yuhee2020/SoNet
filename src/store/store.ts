import {AnyAction, combineReducers} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch,} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./reducers/appReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {usersReducer} from "./reducers/usersReducer";
import {profileReducer} from "./reducers/profileReducer";


export const rootReducer = combineReducers({
    app:appReducer,
    users:usersReducer,
    profile:profileReducer,
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)})


// @ts-ignore
window.store = store

export type StateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<StateType, unknown, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, AnyAction>;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector