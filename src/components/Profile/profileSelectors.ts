import {StateType} from "../../store/store";

export const getUserProfile=(state:StateType)=> state.profile.profile
export const getUserStatus=(state:StateType)=> state.profile.status
export const getMyId = (state:StateType) =>state.app.myId
