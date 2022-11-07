import {Button, Card, Checkbox, Form, Input, Modal} from 'antd';
import React, {useState} from 'react';
import {useFormik} from "formik";
import {useAppDispatch} from "../../../store/store";
import {changeProfileInfo} from "../../../store/reducers/profileReducer";
import {ProfileType} from "../../../api/soNetApi";

type PropsType = {
    profile: ProfileType
}

export const ChangeAboutMeModal: React.FC<PropsType> = ({profile}) => {

    const dispatch = useAppDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        formik.handleSubmit()
    };

    const handleCancel = () => {
        setIsModalOpen(false)
        formik.resetForm()
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            contacts: {
                github: profile.contacts?.github,
                vk: profile.contacts?.vk,
                facebook: profile.contacts?.facebook,
                instagram: profile.contacts?.instagram,
                twitter: profile.contacts?.twitter,
                website: profile.contacts?.website,
                youtube: profile.contacts?.youtube,
                mainLink: profile.contacts?.mainLink,
            }
        },
        onSubmit: (params) => {
            dispatch(changeProfileInfo(params))
        },
    });

    return (
        <>
            <Button  block  onClick={showModal}>
               Change my info
            </Button>
            <Modal title="My info" open={isModalOpen} onOk={handleOk} okText={"Change info"} onCancel={handleCancel}>
                <Form
                    size={"small"}
                    onSubmitCapture={formik.handleSubmit}
                >
                    <Card>
                        <Form.Item label={"User Name"}>
                            <Input  {...formik.getFieldProps('fullName')} defaultValue={profile.fullName}/>
                        </Form.Item>
                        <Form.Item label={"About Me"}>
                            <Input  {...formik.getFieldProps('aboutMe')} defaultValue={profile.aboutMe}/>
                        </Form.Item>
                        <Form.Item label="looking for a job" valuePropName="checked">
                            <Checkbox {...formik.getFieldProps('lookingForAJob')} checked={formik.values.lookingForAJob}
                                      defaultChecked={profile.lookingForAJob}/>
                        </Form.Item>
                        <Form.Item label={"Job description"}>
                            <Input {...formik.getFieldProps('lookingForAJobDescription')}
                                   defaultValue={profile.lookingForAJobDescription}/>
                        </Form.Item>
                    </Card>
                    <Card title={"Contacts"}>
                        <Form.Item label={"github"}>
                            <Input {...formik.getFieldProps('contacts.github')} addonBefore="https://"
                                   defaultValue={profile.contacts?.github}/>
                        </Form.Item>
                        <Form.Item label={"facebook"}>
                            <Input {...formik.getFieldProps('contacts.facebook')} addonBefore="https://"
                                   defaultValue={profile.contacts?.facebook}/>
                        </Form.Item>
                        <Form.Item label={"twitter"}>
                            <Input {...formik.getFieldProps('contacts.twitter')} addonBefore="https://"
                                   defaultValue={profile.contacts?.twitter}/>
                        </Form.Item>
                        <Form.Item label={"instagram"}>
                            <Input {...formik.getFieldProps('contacts.instagram')} addonBefore="https://"
                                   defaultValue={profile.contacts?.instagram}/>
                        </Form.Item>
                        <Form.Item label={"website"}>
                            <Input {...formik.getFieldProps('contacts.website')} addonBefore="https://"
                                   defaultValue={profile.contacts?.website}/>
                        </Form.Item>
                        <Form.Item label={"youtube"}>
                            <Input {...formik.getFieldProps('contacts.youtube')} addonBefore="https://"
                                   defaultValue={profile.contacts?.youtube}/>
                        </Form.Item>
                        <Form.Item label={"vk"}>
                            <Input {...formik.getFieldProps('contacts.vk')} addonBefore="https://"
                                   defaultValue={profile.contacts?.vk}/>
                        </Form.Item>
                        <Form.Item label={"mainLink"}>
                            <Input {...formik.getFieldProps('contacts.mainLink')}
                                   defaultValue={profile.contacts?.mainLink}/>
                        </Form.Item>
                    </Card>
                </Form>
            </Modal>
        </>
    );
};

