import React from 'react';
import {Badge, Descriptions, Divider} from "antd";
import {ProfileType} from "../../../api/soNetApi";

type PropsType={
    profile:ProfileType
}

export const Description: React.FC<PropsType> = ({profile}) => {
    return (
        <div style={{maxWidth:840}}>
            <Descriptions title="User Info">
                <Descriptions.Item label="User Name">{profile.fullName}</Descriptions.Item>
                <Descriptions.Item label="About Me">{profile.aboutMe ? profile.aboutMe : "No info"}</Descriptions.Item>
                <Descriptions.Item label="Looking for a job">{profile.lookingForAJob ?
                    <Badge status="processing" text={"Yes"}/> :
                    <Badge status="default" text={"No"}/>}</Descriptions.Item>
                <Descriptions.Item label="Job description">{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "No info"}</Descriptions.Item>
            </Descriptions>
            <Divider style={{borderColor:"#001529"}}/>
            <Descriptions title="Contacts">
                <Descriptions.Item
                    label={<b>VK</b>}>{profile.contacts?.vk ? profile.contacts.vk : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label={<b>GitHub</b>}>{profile.contacts?.github ? profile.contacts.github : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label={<b>Facebook</b>}>{profile.contacts?.facebook ? profile.contacts.facebook : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label={<b>{<b>Twitter</b>}</b>}>{profile.contacts?.twitter ? profile.contacts.twitter : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label={<b>Instagram</b>}>{profile.contacts?.instagram ? profile.contacts.instagram : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label={<b>{<b>Website</b>}</b>}>{profile.contacts?.website ? profile.contacts.website : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label={<b>YouTube</b>}>{profile.contacts?.youtube ? profile.contacts.youtube : "No info"}</Descriptions.Item>
                <Descriptions.Item
                    label={<b>MainLink</b>}>{profile.contacts?.mainLink ? profile.contacts.youtube : "No info"}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};

