import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import {LOGIN} from "../Content/Routing";
import {profileAPI} from "../../api/soNetApi";
import {getProfile} from "../../store/reducers/profileReducer";

export const MyPage = () => {

    // const dispatch = useAppDispatch()
    // const myId=useAppSelector(state =>state.app.myId)
    // useEffect(()=>{
    //     dispatch(getProfile({userId:myId}))
    // },[])
    const isLoggedIn=useAppSelector(state => state.app.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={LOGIN}/>
    }
    return (
        <div>
            MyPage
        </div>
    );
};

