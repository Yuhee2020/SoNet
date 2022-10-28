import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '68557ad3-b9a8-4dd0-9b3d-e2fde40e12b8'
    }
})


export const authAPI={
    login(data:LoginDataType){
        return instance.post<LoginDataType, AxiosResponse<ResponseType<{userId:number}>>>("auth/login",data)
    },
    logout(){
        return instance.delete<ResponseType>("auth/login")
    },
    authMe(){
        return instance.get<ResponseType<{id:number, email:string, login:string}>>("auth/me")
    }

}

export type LoginDataType={
    email:string,
    password:string,
    rememberMe?:boolean,
    captcha?:boolean
}

export type ResponseType<D={}>={
    resultCode: number
    messages: string[],
    data:D
}