import React from 'react';
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import s from "./MyContent.module.css"
import {Routing} from "./Routing";

const mediaQuery = window.matchMedia('(max-width: 700px)')

export const MyContent = () => {
    return (
        <Layout className={s.layout} style={{minHeight: "95vh", marginLeft: mediaQuery.matches? 80: 200,}}>
                <Content className={s.content}>
                    <Routing/>
                </Content>

        </Layout>

    );
};

