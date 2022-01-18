import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route, HashRouter} from "react-router-dom";
import {AddPostType, StateType, updateNewPostText, UpdateNewPostTextType} from "./redux/state";

export type AppTypeProps={
    state:StateType
    addPost:AddPostType
    updateNewPostText:UpdateNewPostTextType

}

const App:React.FC<AppTypeProps>=(props)=>{

    return (
        <HashRouter>
            <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.profilePage.routes}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile posts={props.state.dialogsPage.posts} newPostText={props.state.dialogsPage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialog={props.state.dialogsPage.dialog}/>}/>
                    <Route path='/news' element={<h2>News</h2>}/>
                    <Route path='/music' element={<h2>Music</h2>}/>
                    <Route path='/settings' element={<h2>Settings</h2>}/>
                </Routes>

            </div>

        </div>
        </HashRouter>

    );
}

export default App;
