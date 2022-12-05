import React from "react";
import {NavLink} from "react-router-dom";
import {Menu, MenuProps, MenuTheme} from "antd";
import Sider from "antd/es/layout/Sider";
import {
    BarChartOutlined,
    CloudOutlined,
    MessageOutlined,
    SettingOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    WechatOutlined
} from "@ant-design/icons";
import s from "./NaviBar.module.css"
import {CHAT, DIALOGS, FRIENDS, MUSIC, MY_PAGE, NEWS, SETTINGS, USERS} from "../Content/Routing";
import {useAppSelector} from "../../store/store";
import {getTheme} from "../Settings/settinfsSelectors";

const items: MenuProps['items'] = [
    {icon: UserOutlined, path: MY_PAGE, title: "My Page"},
    {icon: TeamOutlined, path: USERS, title: "Users"},
    {icon: UsergroupAddOutlined, path: FRIENDS, title: "Friends"},
    {icon: WechatOutlined, path: CHAT, title: "Chat"},
    {icon: MessageOutlined, path: DIALOGS, title: "Messages"},
    {icon: BarChartOutlined, path: NEWS, title: "News"},
    {icon: CloudOutlined, path: MUSIC, title: "Music"},
    {icon: SettingOutlined, path: SETTINGS, title: "Settings"},

].map((el, index) => ({
    key: el.title + index,
    icon: React.createElement(el.icon),
    label: <NavLink to={el.path}>{el.title}</NavLink>,
}));

const mediaQuery = window.matchMedia('(max-width: 700px)')

export const NaviBar = () => {

    const theme = useAppSelector(getTheme) as MenuTheme
    return <Sider className={s.dark} collapsed={mediaQuery.matches}
                  style={{marginTop: 64, height: '100vh', position: 'fixed'}}>
        <Menu theme={theme}
              items={items}
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height: '100%', borderRight: 0,}}
        />
    </Sider>
}
