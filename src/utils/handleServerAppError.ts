import {ResponseType} from "../api/soNetApi";
import {Dispatch} from 'redux';
import {setAppError, setAppStatus} from "../store/reducers/appReducer";


// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch:Dispatch) => {
    if (data.messages.length) {
        dispatch(setAppError({error:data.messages[0]}))
    } else {
        dispatch(setAppError({error:'Some error occurred'}))
    }
    dispatch(setAppStatus({status:'failed'}))
}