import socketIo from 'socket.io-client';
import {ChatMessageType} from "../store/reducers/chatReducer";


export const chatAPI = {
    socket: null as null | any,
    createConnection() {
        this.socket = socketIo("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
        this.socket?.emit("message");
    },

    subscribe(
        initMessagesHandle: (massages: ChatMessageType[]) => void,
        newMessageSandHandle: (message: ChatMessageType) => void,
    ) {
        this.socket?.on('message', initMessagesHandle);
        this.socket?.on('message', newMessageSandHandle);
    },

    sendMessage(message: string) {
        this.socket?.emit('client-message-sent', message);
    },

    destroyConnection() {
        this.socket.disconnect();
        this.socket = null;
    },
};