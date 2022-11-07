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
                {profile.contacts && Object.entries(profile.contacts).map(el=>{
                    return <Descriptions.Item key={el[0]}
                        label={<b>{el[0]}</b>}>{el[1] ? el[1] : "No info"}</Descriptions.Item>
                })}
            </Descriptions>
        </div>
    );
};

