import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {useParams} from "react-router-dom";
import {getMyId, getUserProfile, getUserStatus} from "./profileSelectors";
import {getProfile} from "../../store/reducers/profileReducer";
import {Image, Space,} from "antd";
import noPhoto from "../../img/no_image.jpg"
import {Description} from "./Description/Description";
import {EditableStatus} from "./Status/EditableStatus";
import {Status} from "./Status/Status";
import {ChangeAboutMeModal} from "../MyPage/ChangeAboutMeModal/ChangeAboutMeModal";


export const Profile = () => {
    const {userId} = useParams()
    const dispatch = useAppDispatch()
    const profile = useAppSelector(getUserProfile)
    const status = useAppSelector(getUserStatus)
    const myId = useAppSelector(getMyId)

    useEffect(() => {
        dispatch(getProfile({userId: (userId ? +userId : myId)}))
    }, [])
    return (
        <div>
            <Space size={"large"} style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap"}} >
                <Space direction={"vertical"} size={"middle"} style={{marginRight:30}}>
                    <Image width={200} src={profile.photos?.large ? profile.photos.large : noPhoto}/>
                    {userId ? <Status status={status}/> : <EditableStatus status={status}/>}
                    <ChangeAboutMeModal profile={profile}/>
                </Space>
                <Description profile={profile}/>
            </Space>
        </div>
    );
};
