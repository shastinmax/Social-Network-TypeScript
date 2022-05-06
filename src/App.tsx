import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {UsersAPIComponent} from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";
import {useDispatch} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {useAppSelector} from "./components/common/hook/selectorHook";
import {selectIsApp} from "./redux/selectors/users-selectors";
import {Me} from "./components/Me/Me";
import {Navbar} from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import {PATH} from "./enums/patch";
import Error from "./components/Error/Error";

export const App = () => {
    const {initialized} = useAppSelector(selectIsApp)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) {
        return <Preloader/>
    }
    return (
        <>
            <HashRouter>
                <div className='app-wrapper-header'>
                    <div className="container">
                        <div>
                            <Header/>
                        </div>
                    </div>
                </div>
                <div className='app-wrapper-content'>
                    <div className="container">
                        <div className="app-content">
                            <Navbar/>
                            <div className={'app_profile'}>
                                <Routes>
                                    <Route path={PATH.ME} element={<Me/>}/>
                                    <Route path={`${PATH.PROFILE}/:userId`} element={<ProfileContainer/>}/>
                                    <Route path={PATH.DIALOGS} element={<Dialogs/>}/>
                                    <Route path={PATH.MUSIC} element={<Music/>}/>
                                    <Route path={PATH.SETTINGS} element={<h2>Settings</h2>}/>
                                    <Route path={PATH.USERS} element={<UsersAPIComponent/>}/>
                                    <Route path={PATH.LOGIN} element={<Login/>}/>
                                    <Route path='*' element={<Error/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        </>
    );
}


