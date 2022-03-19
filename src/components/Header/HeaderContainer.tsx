import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateType, logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

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
    logoutTC: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    getAuthUserData,
    logoutTC
})(HeaderContainer)
