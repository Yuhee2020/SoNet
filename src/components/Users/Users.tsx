import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {List} from "antd";
import {User} from "./User/User";
import {UsersPagination} from "./UsersPagination/UsersPagination";
import {getCount, getPage, getUsersSel} from "./usersSelectors";
import {getUsers, setIsFriend} from "../../store/reducers/usersReducer";

type PropsType = {
    isFriends?: boolean
}

export const Users: React.FC<PropsType> = ({isFriends}) => {

    const users = useAppSelector(getUsersSel)
    const page = useAppSelector(getPage)
    const count = useAppSelector(getCount)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(setIsFriend(isFriends? {isFriends}: {isFriends:null}))
    },[isFriends,dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [page,count,dispatch])

    return (
        <List
            bordered
            style={{width: "100%"}}
            itemLayout="vertical"
            size="large"
            dataSource={users}
            renderItem={item => (
                <User user={item}/>
            )}
        >
            <UsersPagination/>
        </List>

    );
};

