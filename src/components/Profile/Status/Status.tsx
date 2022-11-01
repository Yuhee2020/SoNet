import React from 'react';
import {Badge, Card} from "antd";

type PropsType = {
    status: string
}

export const Status: React.FC<PropsType> = ({status}) => {
    return (
        <Badge.Ribbon text={"EditableStatus"} color="purple">
            <Card bordered={false} size="small" style={{width: 200, paddingTop: 20}}>
                <span>{status ? status : "No status"}</span>
            </Card>
        </Badge.Ribbon>
    );
};

