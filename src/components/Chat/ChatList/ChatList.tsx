import React from 'react';
import {Avatar, List} from "antd";
import {useAppSelector} from "../../../store/store";
import {NavLink} from "react-router-dom";
import {getChatMessages} from "../chatSelectors";

export const ChatList = () => {

    const chatMessages = useAppSelector(getChatMessages)

    return (
        <List
            bordered
            style={{width: "100%", height: "60vh", overflowY: "auto"}}
            itemLayout="horizontal"
            dataSource={chatMessages}
            renderItem={(message) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={message.photo}/>}
                        title={<NavLink to={`/profile/${message.userId}`}>{message.userName}</NavLink>}
                        description={message.message}
                    />
                </List.Item>

            )}
        />
    );
};

