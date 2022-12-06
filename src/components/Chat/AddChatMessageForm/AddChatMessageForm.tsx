import React, {useState} from 'react';
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
import s from "../Chat.module.css"
import {SendOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../../store/store";
import {sendMessage} from "../../../store/reducers/chatReducer";


export const AddChatMessageForm = () => {
    const dispatch = useAppDispatch()
    const [newChatMessage, setNewChatMessage] = useState("")

    const onSendMessageClick = () => {
        if (!newChatMessage) return
        dispatch(sendMessage({message: newChatMessage}))
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
            <Button onClick={onSendMessageClick} style={{marginTop: "5px"}}>
                Send
                <SendOutlined/>
            </Button>
        </div>
    );
};

