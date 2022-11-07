import React from 'react';
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import {Routing} from "./Routing";
import {useAppSelector} from "../../store/store";
import {getTheme} from "../Settings/settinfsSelectors";
import s from "./MyContent.module.css"

const mediaQuery = window.matchMedia('(max-width: 700px)')


export const MyContent = () => {
    const theme= useAppSelector(getTheme)
    return (
        <Layout style={{minHeight: "100vh", marginLeft: mediaQuery.matches? 80: 200,}}>
                <Content className={theme==="light"? s.light: s.dark}>
                    <Routing/>
                </Content>

        </Layout>

    );
};

