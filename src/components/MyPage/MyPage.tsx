import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import {LOGIN} from "../Content/Routing";
import {Image} from "antd";
import noPhoto from "../../img/no_image.jpg";
import {Description} from "../Profile/Description/Description";
import {getUserProfile} from "../Profile/profileSelectors";
import {getProfile} from "../../store/reducers/profileReducer";
import {getIsLoggedIn, getMyId} from "../Login/loginSelectors";

export const MyPage = () => {

    const dispatch = useAppDispatch()
    const profile = useAppSelector(getUserProfile)
    const isLoggedIn = useAppSelector(getIsLoggedIn)
    const myId = useAppSelector(getMyId)

    useEffect(() => {
        dispatch(getProfile({userId:myId}))
    }, [])



    if (!isLoggedIn) {
        return <Navigate to={LOGIN}/>
    }
    return (
        <div>
            <Image width={200} src={profile.photos?.large ? profile.photos.large : noPhoto}/>
            <Description profile={profile}/>
        </div>
    );
};

