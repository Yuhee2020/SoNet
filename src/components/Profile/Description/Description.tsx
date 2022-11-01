import React from 'react';
import {Badge, Descriptions} from "antd";
import {ProfileType} from "../../../api/soNetApi";

type PropsType={
    profile:ProfileType
}

export const Description: React.FC<PropsType> = ({profile}) => {
    return (
        <>
            <Descriptions title="User Info">
                <Descriptions.Item label="UserName">{profile.fullName}</Descriptions.Item>
                <Descriptions.Item label="About">{profile.aboutMe ? profile.aboutMe : "No info"}</Descriptions.Item>
                <Descriptions.Item label="Looking for a job">{profile.lookingForAJob ?
                    <Badge status="processing" text={"Yes"}/> :
                    <Badge status="default" text={"No"}/>}</Descriptions.Item>
                <Descriptions.Item label="Job description">{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "No info"}</Descriptions.Item>
            </Descriptions>
            <Descriptions title="Contacts">
                <Descriptions.Item
                    label="VK">{profile.contacts?.vk ? profile.contacts.vk : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="GitHub">{profile.contacts?.github ? profile.contacts.github : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Facebook">{profile.contacts?.facebook ? profile.contacts.facebook : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Twitter">{profile.contacts?.twitter ? profile.contacts.twitter : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Instagram">{profile.contacts?.instagram ? profile.contacts.instagram : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="Website">{profile.contacts?.website ? profile.contacts.website : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label="YouTube">{profile.contacts?.youtube ? profile.contacts.youtube : "No info"}</Descriptions.Item>
            </Descriptions>
        </>
    );
};

