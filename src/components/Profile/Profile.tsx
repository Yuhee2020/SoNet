import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {useParams} from "react-router-dom";
import {getUserProfile} from "./profileSelectors";
import {getProfile} from "../../store/reducers/profileReducer";
import {Badge, Descriptions, Image} from "antd";

export const Profile = () => {
    const {userId} = useParams()
    const dispatch = useAppDispatch()
    const profile = useAppSelector(getUserProfile)

    useEffect(() => {
        if (userId != null) {
            dispatch(getProfile({userId}))
        }
    }, [])
    return (
        <div>
            <Image width={200} src={profile.photos.large?profile.photos.large:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxH-vX_YHendAOevBGAi-OFmeZrpGtPoBA1g&usqp=CAU"}/>
            <Descriptions title="User Info">
                <Descriptions.Item label="UserName">{profile.fullName}</Descriptions.Item>
                <Descriptions.Item label="About">{profile.aboutM ? profile.aboutM : "No info"}</Descriptions.Item>
                <Descriptions.Item label="Looking for a job">{profile.lookingForAJob ?
                    <Badge status="processing" text={"Yes"}/> :
                    <Badge status="default" text={"No"}/>}</Descriptions.Item>
                <Descriptions.Item label="Job description">{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "No info"}</Descriptions.Item>
            </Descriptions>
            <Descriptions title="Contacts">
                <Descriptions.Item
                    label="VK">{profile.contacts.vk ? profile.contacts.vk : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="GitHub">{profile.contacts.github ? profile.contacts.github : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Facebook">{profile.contacts.facebook ? profile.contacts.facebook : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Twitter">{profile.contacts.twitter ? profile.contacts.twitter : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Instagram">{profile.contacts.instagram ? profile.contacts.instagram : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Website">{profile.contacts.website ? profile.contacts.website : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="YouTube">{profile.contacts.youtube ? profile.contacts.youtube : "No info"}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};

