import React from 'react';
import {Avatar, Divider, List} from "antd";
import {AddRemoveButton} from "../AddRemoveButton/AddRemoveButton";
import {UserType} from "../../../api/soNetApi";
import {useAppSelector} from "../../../store/store";

type PropsType={
    user:UserType
}

export const User: React.FC<PropsType> = ({user}) => {

    const isLoggedIn=useAppSelector(state => state.app.isLoggedIn)

    return (
        <List.Item
            key={user.id}
        >
            <List.Item.Meta
                avatar={<Avatar size={"large"} src={user.photos.small? user.photos.small: 'https://joeschmoe.io/api/v1/random'} />}
                title={<a href={'https://ant.design'}>{user.name}</a>}
                description={user.status? user.status: "No status"}
            />
            {isLoggedIn && <AddRemoveButton user={user}/>}
            <Divider style={{borderColor:"rgb(0 0 0 / 45%)", marginBottom:0}}/>
        </List.Item>
    );
};

