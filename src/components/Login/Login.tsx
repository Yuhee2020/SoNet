import React from "react";
import {useFormik} from 'formik';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Button, Card, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {loginTC} from "../../store/reducers/appReducer";
import s from "./Login.module.css"
import {validate} from "./validation";
import {MY_PAGE} from "../Content/Routing";
import {Navigate} from "react-router-dom";
import {getIsLoggedIn} from "./loginSelectors";


export const Login = () => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(getIsLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: false
        },
        validate,
        onSubmit: (values) => {
            dispatch(loginTC(values))
        },
    });
    if (isLoggedIn) {
        return <Navigate to={MY_PAGE}/>
    }

    return (<Card  title={"LOGIN"} className={s.cardLogin} >
            <Form
            size={"large"}
            onSubmitCapture={formik.handleSubmit}
            name="normal_login"
            className={s.loginForm}
            initialValues={{remember: true}}
        >
            <Form.Item
                help={formik.touched.email && !!formik.errors.email ? formik.errors.email : " "}
                rules={[{required: true, message: 'Please input your Email!'}]}
                validateStatus={formik.touched.email && !!formik.errors.email ? "error" : "success"}
            >
                <Input {...formik.getFieldProps('email')} prefix={<UserOutlined className="site-form-item-icon"/>}
                       placeholder="email"/>
            </Form.Item>

            <Form.Item
                help={formik.touched.password && !!formik.errors.password ? formik.errors.password : " "}
                validateStatus={formik.touched.password && !!formik.errors.password ? "error" : "success"}
                rules={[{required: true, message: 'Please input your Password!'}]}
            >
                <Input.Password
                    {...formik.getFieldProps('password')}
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item>
                    <Checkbox checked={formik.values.rememberMe} {...formik.getFieldProps("rememberMe")}>Remember
                        me</Checkbox>
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className={s.loginFormButton}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
            <p className={s.logText}>
                To log use common test account credentials:
                <div>Email: free@samuraijs.com</div>
                <div>Password: free</div>
            </p>
    </Card>
    )
}
