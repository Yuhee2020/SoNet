import React from 'react';
import {Spin} from "antd";

export const InitSpin = () => {
    return (
        <div style={{padding:"40vh", textAlign:"center"}}><Spin tip={"Loading..."} size={"large"}/></div>
    );
};

