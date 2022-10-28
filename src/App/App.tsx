import React, {useEffect} from 'react';
import {MyContent} from "../components/Content/MyContent";
import {Layout, Spin} from 'antd';
import {NaviBar} from "../components/NaviBar/NaviBar";
import {MyHeader} from "../components/Header/MyHeader";
import {AppErrorBar} from "../components/common/AppErrorBar/AppErrorBar";
import {useAppDispatch, useAppSelector} from "../store/store";
import {initializeAppTC} from "../store/reducers/appReducer";
import "./App.css"


const App: React.FC = () => {
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized){return <div className="spin"><Spin tip={"Loading..."} size={"large"}/></div>}
        return (
            <Layout>
                <MyHeader/>
                <Layout hasSider>
                    <NaviBar/>
                    <MyContent/>
                </Layout>
                <AppErrorBar/>
            </Layout>
        );
}

export default App;

