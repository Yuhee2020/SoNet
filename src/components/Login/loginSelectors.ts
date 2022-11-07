import {StateType} from "../../store/store";

export const getIsLoggedIn = (state:StateType) =>state.app.isLoggedIn
export const getCap = (state:StateType) =>state.app.captcha


