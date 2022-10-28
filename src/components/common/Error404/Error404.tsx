import React from 'react';
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";
import {MY_PAGE} from "../../Content/Routing";

export const Error404 = () => {
    const navigate=useNavigate()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={()=>navigate(MY_PAGE)}>Back Home</Button>}
        />
    );
};

