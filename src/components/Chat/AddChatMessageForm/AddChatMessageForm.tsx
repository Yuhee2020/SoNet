import React, {useState} from 'react';
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
import s from "../Chat.module.css"
import {SendOutlined} from '@ant-design/icons';

type PropsType={
    wsChannel:WebSocket | null
}

export const AddChatMessageForm = ({wsChannel}:PropsType) => {
    const [newChatMessage, setNewChatMessage] = useState("")

    const sendMessage = () => {
        if (!newChatMessage) return
        wsChannel?.send(newChatMessage)
        setNewChatMessage("")
    }

    return (
        <div className={s.addForm}>
            <TextArea
                value={newChatMessage}
                rows={3}
                placeholder="enter your message"
                onChange={(e) => {
                    setNewChatMessage(e.currentTarget.value)
                }}
            />
            <Button onClick={sendMessage} style={{marginTop: "5px"}}>
                Send
                <SendOutlined/>
            </Button>
        </div>
    );
};

