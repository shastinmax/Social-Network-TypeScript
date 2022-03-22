import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import UsersAPIComponent from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";

export type AppTypeProps = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppTypeProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/*' element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
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
}

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        initializeApp
    }))(App)
