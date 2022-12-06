import React, {useEffect} from 'react';
import {useAppDispatch} from "../../store/store";
import {startMessagesListening, stopMessagesListening} from "../../store/reducers/chatReducer";
import {ChatList} from "./ChatList/ChatList";
import {AddChatMessageForm} from "./AddChatMessageForm/AddChatMessageForm";
import s from "./Chat.module.css"


export const Chat = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
       dispatch(startMessagesListening())
        return ()=>{
           dispatch(stopMessagesListening())
        }
    }, [dispatch])



    return (
        <div className={s.chatPage}>
            <ChatList/>
            <AddChatMessageForm/>
        </div>
    );
};

