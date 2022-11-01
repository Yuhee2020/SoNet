import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {News} from "../News/News";
import {MyPage} from "../MyPage/MyPage";
import {Users} from "../Users/Users";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";
import {Login} from "../Login/Login";
import {Error404} from "../common/Error404/Error404";
import {Dialogs} from "../Dialogs/Dialogs";
import {Friends} from "../Friends/Friends";

export const LOGIN = "/login"
export const MY_PAGE = "/"
export const USERS = "/users"
export const DIALOGS = "/dialogs"
export const NEWS = "/news"
export const PROFILE = "/profile/:userId"
export const SETTINGS = "/settings"
export const MUSIC = "/music"
export const FRIENDS = "/friends"
export const ERROR_404 = "/404"

export const Routing = () => {
    return (
        <Routes>
            <Route path={PROFILE} element={<Profile/>}/>
            <Route path={MY_PAGE} element={<MyPage/>}/>
            <Route path={DIALOGS} element={<Dialogs/>}/>
            <Route path={NEWS} element={<News/>}/>
            <Route path={USERS} element={<Users/>}/>
            <Route path={MUSIC} element={<Music/>}/>
            <Route path={SETTINGS} element={<Settings/>}/>
            <Route path={LOGIN} element={<Login/>}/>
            <Route path={FRIENDS} element={<Friends/>}/>
            <Route path={ERROR_404} element={<Error404/>}/>
            <Route path="*" element={<Navigate to={"404"}/>}/>
        </Routes>
    );
};
