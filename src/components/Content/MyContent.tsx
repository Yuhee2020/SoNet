import React from 'react';
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import s from "./MyContent.module.css"
import {Routing} from "./Routing";


export const MyContent = () => {
    return (
        <Layout className={s.layout} style={{minHeight: "95vh", marginLeft: "200px",}}>
                <Content className={s.content}>
                    <Routing/>
                </Content>

        </Layout>

    );
};

