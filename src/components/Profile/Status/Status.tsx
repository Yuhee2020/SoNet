import React from 'react';
import {Badge, Card, Image, Space} from "antd";
import noPhoto from "../../../img/no_image.jpg";

type PropsType={
    status:string
}

export const Status:React.FC<PropsType> = ({status}) => {
    return (
        <Badge.Ribbon text={"Status"} color="purple">
            <Card bordered={false} size="small" style={{width: 200, paddingTop: 20}}>
                {status ? status : "No status"}
            </Card>
        </Badge.Ribbon>
    );
};

