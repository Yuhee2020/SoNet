import { Alert } from 'antd';
import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import s from "./AppErrorBar.module.css"
import {setAppError} from "../../../store/reducers/appReducer";





export const AppErrorBar: React.FC = () => {
    const dispatch=useAppDispatch()
    const error = useAppSelector(state => state.app.error)

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(setAppError({error:null}))
    };

    return <div className={s.alertErr}>
        {error && <Alert
            message={error}
            type="error"
            closable
            onClose={onClose}
            showIcon
        />}
    </div>
};
