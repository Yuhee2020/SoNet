import {ChatMessageType} from "../store/reducers/chatReducer";

let subscribers=[] as SubscriberType[]

let ws:WebSocket | null = null

const closeHandler=()=>{
    setTimeout(createChannel,3000)
}

const messageHandler=(e:MessageEvent)=>{
    const newMessage=JSON.parse(e.data)
    subscribers.forEach(s=>s(newMessage))
}

function createChannel(){
    ws?.removeEventListener('close',closeHandler)
    ws?.close()
    ws= new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    ws.addEventListener("message", messageHandler)
    ws.addEventListener("close", closeHandler)
}
export const chatAPI={
    createChannel(){
        createChannel()
    },
    stopChannel(){
        subscribers=[]
        ws?.removeEventListener("message", messageHandler)
        ws?.removeEventListener("close", closeHandler)
       ws?.close()
    },
    subscribe(callback: SubscriberType){
        subscribers.push(callback)
    },
    unsubscribe(callback: SubscriberType){
        subscribers.filter((s)=>s!==callback)
    },
    sendMessage(message:string){
       ws?.send(message)
    }

}

type SubscriberType=(messages:ChatMessageType[])=>void