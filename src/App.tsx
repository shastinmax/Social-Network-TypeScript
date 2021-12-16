import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {DialogType, PostsType, RouteType} from "./index";

export type AppTypeProps={
    posts:Array<PostsType>
    dialog:Array<DialogType>
    routes:Array<RouteType>

}

const App:React.FC<AppTypeProps>=(props)=>{

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
            <Header/>
            <Navbar routes={props.routes}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialog={props.dialog}/>}/>
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
