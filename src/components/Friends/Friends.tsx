import React from 'react';
import {useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import {LOGIN} from "../Content/Routing";
import {getIsLoggedIn} from "../Login/loginSelectors";
import {Users} from "../Users/Users";

export const Friends = () => {

    const isLoggedIn=useAppSelector(getIsLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={LOGIN}/>
    }
    return (
       <Users isFriends/>
    );
};

