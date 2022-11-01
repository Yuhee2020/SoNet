import React from 'react';
import {useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import {LOGIN} from "../Content/Routing";
import {getIsLoggedIn} from "../Login/loginSelectors";
import {Profile} from "../Profile/Profile";

export const MyPage = () => {


    const isLoggedIn = useAppSelector(getIsLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={LOGIN}/>
    }
    return (
        <Profile/>
    );
};

