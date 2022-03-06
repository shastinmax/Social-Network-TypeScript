import React from 'react';
import './App.css';
import {Routes, Route,BrowserRouter} from "react-router-dom";
import  DialogsContainer  from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import UsersAPIComponent from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";

export type AppTypeProps={}

const App:React.FC<AppTypeProps>=(props)=>{

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/*' element={<ProfileContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
                    <Route path='/news' element={<h2>News</h2>}/>
                    <Route path='/music' element={<h2>Music</h2>}/>
                    <Route path='/settings' element={<h2>Settings</h2>}/>
                    <Route path='/users' element={<UsersAPIComponent/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
