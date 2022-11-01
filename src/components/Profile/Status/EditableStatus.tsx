import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Badge, Card, Input, Tooltip} from "antd";
import {EditOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../../store/store";
import {changeStatus} from "../../../store/reducers/profileReducer";

type PropsType = {
    status: string
}

export const EditableStatus: React.FC<PropsType> = ({status}) => {
    const dispatch = useAppDispatch()
    const [edit, setEdit] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }
    const onBlurHandle = () => {
        dispatch(changeStatus({status: newStatus}))
        setEdit(!edit)
    }
    const onKeyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onBlurHandle()
    }

    const onClickHandle=()=>{
        setEdit(!edit)
        setNewStatus(status)
    }

    return (
        <Badge.Ribbon text={"Status"} color="purple">
            <Card bordered={false} size="small" style={{width: 200, paddingTop: 20, textAlign:"center"}}>
                {edit
                    ?
                    <Input value={newStatus} autoFocus onChange={onChangeHandle}
                           onKeyPress={onKeyPressHandle} onBlur={onBlurHandle}/>
                    : <>
                        <span>{status ? status : "No status"}</span>
                        <Tooltip title="edit status">
                            <EditOutlined style={{cursor: "pointer", marginLeft: 5}} onClick={onClickHandle}/>
                        </Tooltip></>
                }
            </Card>
        </Badge.Ribbon>
    );
};

