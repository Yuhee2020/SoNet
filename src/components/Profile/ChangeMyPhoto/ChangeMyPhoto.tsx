import React, {ChangeEvent, useRef} from 'react';
import {useAppDispatch} from "../../../store/store";
import {setAppError} from "../../../store/reducers/appReducer";
import {changeMyPhoto} from "../../../store/reducers/profileReducer";
import {Button} from "antd";
import {UploadOutlined} from '@ant-design/icons';


export const ChangeMyPhoto = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size < 300000) {
                const formData = new FormData()
                formData.append("photo",file)
               dispatch(changeMyPhoto({photo:formData}))
            } else {
                dispatch(setAppError({error: "Incorrect file size, file must be less than 300 kb"}))
            }
        }
    }

    return (
        <label>
            <Button icon={<UploadOutlined/>}   block onClick={selectFileHandler}>Change my photo</Button>
            <input
                style={{display: 'none'}}
                ref={inputRef}
                accept="image/*"
                type="file"
                value={""}
                onChange={uploadHandler}>
            </input>
        </label>

    )
};

