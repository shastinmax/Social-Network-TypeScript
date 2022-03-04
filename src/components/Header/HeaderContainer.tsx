import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authApi, usersApi} from "../../api/api";

type HeaderTypeProps = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderTypeProps, {}> {

    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props} auth={this.props.auth}/>
    }
}

type MapStateToPropsType = {
    auth: InitialStateType
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getAuthUserData})(HeaderContainer)
