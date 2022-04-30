import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersAPIComponent from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {useDispatch} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
import ProfileContainer from './components/Profile/ProfileContainer';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {useAppSelector} from "./components/common/hook/selectorHook";
import {selectIsApp} from "./redux/selectors/users-selectors";

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
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/*' element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<Dialogs/>}/>
                            <Route path='/news' element={<h2>News</h2>}/>
                            <Route path='/music' element={<h2>Music</h2>}/>
                            <Route path='/settings' element={<h2>Settings</h2>}/>
                            <Route path='/users' element={<UsersAPIComponent/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
            </>
        );
    }


