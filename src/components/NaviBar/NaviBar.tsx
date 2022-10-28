import React from "react";
import {NavLink} from "react-router-dom";
import {Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {
    SettingOutlined,
    BarChartOutlined,
    CloudOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    MessageOutlined
} from "@ant-design/icons";
import s from "./NaviBar.module.css"
import {DIALOGS, FRIENDS, MUSIC, MY_PAGE, NEWS, SETTINGS, USERS} from "../Content/Routing";

const items: MenuProps['items'] = [
    {icon: UserOutlined, path: MY_PAGE, title: "My Page"},
    {icon: TeamOutlined, path: USERS, title: "Users"},
    {icon: UsergroupAddOutlined, path: FRIENDS, title: "Friends"},
    {icon: MessageOutlined, path: DIALOGS, title: "Messages"},
    {icon: BarChartOutlined, path: NEWS, title: "News"},
    {icon: CloudOutlined, path: MUSIC, title: "Music"},
    {icon: SettingOutlined, path: SETTINGS, title: "Settings"},

].map((el, index) => ({
    key: el.title+index,
    icon: React.createElement(el.icon),
    label: <NavLink to={el.path}>{el.title}</NavLink>,
}));

export const NaviBar = () => {
    return <Sider  className={s.sider} style={{marginTop: 64, height: '100vh', position: 'fixed',}} >
        <Menu
            items={items}
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
        />
    </Sider>
}
