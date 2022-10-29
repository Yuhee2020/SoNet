import React from 'react';
import {UserAddOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {UserType} from "../../../api/soNetApi";
import {useAppDispatch} from "../../../store/store";
import {follow, unfollow} from "../../../store/reducers/usersReducer";

type PropsType = {
    user: UserType
}

export const AddRemoveButton: React.FC<PropsType> = ({user}) => {
    const dispatch = useAppDispatch()
    const addToFriends=()=>{
        dispatch(follow({userId:user.id}))
    }
    const removeFromFriends=()=>{
        dispatch(unfollow({userId:user.id}))
    }
    return (
        user.followed
            ? <Button onClick={removeFromFriends} icon={<UserAddOutlined/>}>
                Remove from friends
            </Button>
            : <Button onClick={addToFriends} icon={<UserAddOutlined/>}>
                Add to friends
            </Button>
    );
};

