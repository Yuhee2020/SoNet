import React from 'react';
import {Spin} from "antd";
import s from "./InitSpin.module.css"

export const InitSpin = () => {
    return (
        <div className={s.spin}><Spin tip={"Loading..."} size={"large"}/></div>
    );
};

