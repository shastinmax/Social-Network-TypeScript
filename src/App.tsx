import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route, HashRouter} from "react-router-dom";
import {StoreType} from "./redux/store";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";

export type AppTypeProps={


}

const App:React.FC<AppTypeProps>=(props)=>{

    // const state=props.store.getState()

    return (
        <HashRouter>
            <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile  />}/>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
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
