import {StateType} from "../../store/store";

export const getIsLoggedIn = (state:StateType) =>state.app.isLoggedIn
export const getMyId = (state:StateType) =>state.app.myId
