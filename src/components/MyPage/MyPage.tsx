import React from 'react';
import {useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import {LOGIN} from "../Content/Routing";

export const MyPage = () => {

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

