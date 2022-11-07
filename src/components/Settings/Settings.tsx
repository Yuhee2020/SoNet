import React from 'react';
import {Switch} from "antd";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getTheme} from "./settinfsSelectors";
import {setTheme} from "../../store/reducers/appReducer";

export const Settings = () => {
    const theme = useAppSelector(getTheme)
    const dispatch = useAppDispatch()

    const onChange = (checked: boolean) => {
        dispatch(setTheme({theme:checked?"dark":"light"}))
    };
    return (
        <div>
            <h2>Settings</h2>
            <b>Dark theme </b> <Switch size={"small"} defaultChecked={theme === "dark" } onChange={onChange}/>
        </div>
    );
};

