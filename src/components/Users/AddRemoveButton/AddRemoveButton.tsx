import React from 'react';
import {UserAddOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {UserType} from "../../../api/soNetApi";

type PropsType = {
    user: UserType
}

export const AddRemoveButton: React.FC<PropsType> = ({user}) => {
    return (
        user.followed
            ? <Button icon={<UserAddOutlined/>}>
                Remove from friends
            </Button>
            : <Button icon={<UserAddOutlined/>}>
                Add to friends
            </Button>
    );
};

