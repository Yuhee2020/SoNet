import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '68557ad3-b9a8-4dd0-9b3d-e2fde40e12b8'
    }
})


export const authAPI = {
    login(data: LoginDataType) {
        return instance.post<LoginDataType, AxiosResponse<ResponseType<{ userId: number }>>>("auth/login", data)
    },
    logout() {
        return instance.delete<ResponseType>("auth/login")
    },
    authMe() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>("auth/me")
    },
    getCaptcha(){
        return instance.get<{url:string}>("security/get-captcha-url")
    }
}

export const usersAPI = {
    getUsers(params: getUsersParamsType) {
        return instance.get<GetUsersResponseType>("users", {params})
    }
}

export const followAPI = {
    follow(userId:number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
    },
    unfollow(userId:number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    isFollowed(userId:string) {
        return instance.get<boolean>(`follow/${userId}`)
    }
}

export const profileAPI= {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    changeStatus(status:string) {
        return instance.put<{status:string}, AxiosResponse<ResponseType>>(`profile/status`,{status})
    },
    changeProfileInfo(profile:ChangeProfileType) {
        return instance.put<ChangeProfileType, AxiosResponse<ResponseType>>(`profile/`,profile)
    },
    changeMyPhoto(photo:FormData) {
        return instance.put<{photo:any}, AxiosResponse<ResponseType<{small:string,large:string}>>>(`profile/photo`,photo)
    },
}

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}

export type getUsersParamsType = {
    count?: number
    page?: number
    term?: string | null
    friend?: boolean | null
}

export type GetUsersResponseType = {
    totalCount: number
    error: string
    items: UserType[]
}

export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    uniqueUrlName: null | string
}


export type ProfileType = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: ProfilePhotoType;
}
export type ContactsType = {
	facebook:  string
	website:  string
	vk:string
	twitter: string
	instagram:string
	youtube: string
	github: string
	mainLink: string
}
export type ProfilePhotoType = {
	small?: null | string
	large?: null | string
}

export type ChangeProfileType={
    aboutMe?: null | string
    contacts?: ContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: null | string
    fullName?: string
}
