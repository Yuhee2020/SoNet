import {ChatMessageType, setChatMessages} from "../store/reducers/chatReducer";

let subscribers=[] as SubscriberType[]

let ws:WebSocket

function createChannel(){
    let ws= new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    ws.addEventListener("message", (e) => {
        let messages: ChatMessageType[] = JSON.parse(e.data)
    })
    ws.addEventListener("close", ()=>{
        setTimeout(createChannel,3000)
        console.log("Close")
    })
}
export const chatAPI={
    subscribe(callback: SubscriberType){
        subscribers.push(callback)
    },
    unsubscribe(callback: SubscriberType){
        subscribers.filter((s)=>s!==callback)
    }

}

type SubscriberType=(messages:ChatMessageType[])=>void