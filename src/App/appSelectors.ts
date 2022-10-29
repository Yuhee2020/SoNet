import {StateType} from "../store/store";

export const getIsInitialized = (state:StateType) => state.app.isInitialized
export const getAppStatus = (state:StateType)=> state.app.appStatus