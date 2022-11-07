import React from "react";
import s from "./Header.module.css";
import {Header} from "antd/es/layout/layout";
import {Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {logoutTC} from "../../store/reducers/appReducer";

export function MyHeader() {
    const dispatch=useAppDispatch()
    const isLoggedIn=useAppSelector(state => state.app.isLoggedIn)
    const logout=()=>{
        dispatch(logoutTC())
    }
    return <Header className={s.header} style={{paddingLeft:"30px"}}>
        <div className={s.logo}/>
            <div className={s.logout}>
                {isLoggedIn && <Button onClick={logout} size={"small"} icon={<LogoutOutlined />}>Logout</Button>}
            </div>
    </Header>
}