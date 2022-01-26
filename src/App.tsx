import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route, HashRouter} from "react-router-dom";
import {StoreType} from "./redux/store";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

export type AppTypeProps={
    store:StoreType

}

const App:React.FC<AppTypeProps>=(props)=>{

    const state=props.store.getState()

    return (
        <HashRouter>
            <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.navBarPage.routes}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile store={props.store} />}/>
                    <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
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
