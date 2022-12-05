import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../store/store";
import {ChatMessageType, setChatMessages} from "../../store/reducers/chatReducer";
import {ChatList} from "./ChatList/ChatList";
import {AddChatMessageForm} from "./AddChatMessageForm/AddChatMessageForm";
import s from "./Chat.module.css"


export const Chat = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)


    useEffect(() => {
        let ws: WebSocket
        function createChannel() {
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            ws.addEventListener("message", (e) => {
                let messages: ChatMessageType[] = JSON.parse(e.data)
                dispatch(setChatMessages({messages}))
                console.log(messages)
            })
            ws.addEventListener("close", () => {
                setTimeout(createChannel, 3000)
                console.log("Close")
            })
            setWsChannel(ws)
        }

        createChannel()
        return ()=>{
            ws.close()
        }
    }, [])

    const dispatch = useAppDispatch()

    return (
        <div className={s.chatPage}>
            <ChatList/>
            <AddChatMessageForm wsChannel={wsChannel}/>
        </div>
    );
};

