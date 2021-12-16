import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {DialogType, PostsType, RouteType, StateType} from "./redux/state";

export type AppTypeProps={
    appState:StateType

}

const App:React.FC<AppTypeProps>=(props)=>{

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
            <Header/>
            <Navbar routes={props.appState.routes}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile posts={props.appState.posts}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialog={props.appState.dialog}/>}/>
                    <Route path='/news' element={<h2>News</h2>}/>
                    <Route path='/music' element={<h2>Music</h2>}/>
                    <Route path='/settings' element={<h2>Settings</h2>}/>
                </Routes>

            </div>

        </div>
        </BrowserRouter>

    );
}

export default App;
