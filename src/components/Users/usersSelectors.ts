import {StateType} from "../../store/store";

export const getUsersSel=(state:StateType)=> state.users.users
export const getParamsForRes = (state:StateType) => state.users.paramsForRes
export const getPage = (state:StateType) => state.users.paramsForRes.page
export const getCount = (state:StateType) => state.users.paramsForRes.count
export const getUsersTotalCount = (state:StateType) => state.users.totalCount