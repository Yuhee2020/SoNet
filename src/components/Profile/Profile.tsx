import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {useParams} from "react-router-dom";
import {getUserProfile, getUserStatus} from "./profileSelectors";
import {getProfile} from "../../store/reducers/profileReducer";
import {Badge, Card, Image, Space,} from "antd";
import noPhoto from "../../img/no_image.jpg"
import {Description} from "./Description/Description";
import {Status} from "./Status/Status";

export const Profile = () => {
    const {userId} = useParams()
    const dispatch = useAppDispatch()
    const profile = useAppSelector(getUserProfile)
    const status = useAppSelector(getUserStatus)

    useEffect(() => {
        if (userId != null) {
            dispatch(getProfile({userId: +userId}))
        }
    }, [])
    return (
        <div>
            <Space direction={"vertical"} size={"large"}>
                <Space direction={"vertical"} size={"middle"}>
                    <Image width={200} src={profile.photos?.large ? profile.photos.large : noPhoto}/>
                    <Status status={status}/>
                </Space>
                <Description profile={profile}/>
            </Space>
        </div>
    );
};

