import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {List} from "antd";
import {User} from "./User/User";
import {UsersPagination} from "./UsersPagination/UsersPagination";
import {getParamsForRes, getUsersSel} from "./usersSelectors";
import {getUsers} from "../../store/reducers/usersReducer";



export const Users = () => {

    const users = useAppSelector(getUsersSel)
    const paramsForRes = useAppSelector(getParamsForRes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [paramsForRes, dispatch])

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

