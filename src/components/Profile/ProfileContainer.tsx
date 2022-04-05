import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";


export type ProfilePropsType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: true,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
type MapStateToPropsType = {
    profile: ProfilePropsType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean


}
type MapDispatchToProps = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file:any) =>void

}
type RoutersType = {
    router: {
        location: Location
        params: Params<string>
        navigate: NavigateFunction
    }
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RoutersType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId: any = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                         isOwner={!this.props.router.params.userId}/>
            </div>
        )
    }

}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

})

export function withRouter<T>(Component: ComponentType<T>): ComponentType<T & WithRouterType> {

    const ComponentWithRouterProp = (props: T & WithRouterType) => {
        console.log("ComponentWithRouterProp")
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;

export default compose<React.ComponentType>(connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
        getUserProfile, getStatus, updateStatus,savePhoto,
    }), withRouter,
    // withAuthRedirect
)(ProfileContainer)