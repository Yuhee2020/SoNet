import React from 'react';
import {Pagination} from "antd";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {setCount, setPage} from "../../../store/reducers/usersReducer";
import {getCount, getPage, getUsersTotalCount} from "../usersSelectors";

export const UsersPagination = () => {

    const page = useAppSelector(getPage)
    const count = useAppSelector(getCount)
    const usersTotalCount = useAppSelector(getUsersTotalCount)
    const dispatch = useAppDispatch()

    const onChange = (page:number, count: number) => {
        dispatch(setPage({page}))
        dispatch(setCount({count}))
    }

    return (
        <Pagination
            current={page}
            total={usersTotalCount}
            defaultPageSize={count}
            onChange={onChange}
            style={{margin: "24px"}}
            showSizeChanger
            pageSizeOptions={[5, 10, 50, 100]}
        />
    );
};

