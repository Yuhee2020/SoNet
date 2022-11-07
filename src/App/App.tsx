import React, {useEffect} from 'react';
import {MyContent} from "../components/Content/MyContent";
import {Layout, Spin} from 'antd';
import {NaviBar} from "../components/NaviBar/NaviBar";
import {MyHeader} from "../components/Header/MyHeader";
import {AppErrorBar} from "../components/common/AppErrorBar/AppErrorBar";
import {useAppDispatch, useAppSelector} from "../store/store";
import {initializeAppTC} from "../store/reducers/appReducer";
import "./App.css"
import {InitSpin} from "../components/common/InitSpin/InitSpin";
import {getAppStatus, getIsInitialized} from "./appSelectors";


const App: React.FC = () => {

    const isInitialized = useAppSelector(getIsInitialized)
    const appStatus = useAppSelector(getAppStatus)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!isInitialized){return <InitSpin/>}
        return (<Spin spinning={appStatus==="loading"} wrapperClassName="spin" size={"large"}>
            <Layout >
                <MyHeader/>
                <Layout hasSider>
                    <NaviBar/>
                    <MyContent/>
                </Layout>
                <AppErrorBar/>
            </Layout>
            </Spin>
        );
}

export default App;

