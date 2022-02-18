import React, {ComponentType, FC} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {NavigateFunction, Params,  useLocation, useNavigate, useParams} from "react-router-dom";



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

type PathParamsType = {
    userId: string
}
type CommonPropsType =  ProfileContainerPropsType & {router: WithRouterType}
// type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    profile: ProfilePropsType | null
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfilePropsType) => void


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

    componentDidMount() {
        let userId: any = this.props.router.params.userId
        console.log(userId)
        if (!userId) {
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent: ComponentType<ProfileContainerPropsType & any> = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToProps,{},AppStateType>(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent)




// export function withRouter<T>(Component: ComponentType<T>):any {
//     console.log("test")
//     const  ComponentWithRouterProp:FC<T & WithRouterType>=(props)=> {
//         console.log("test2")
//
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         // return (
//         //     <Component
//         //         {...props}
//         //         router={{ location, navigate, params }}
//         //     />
//         // );
//         return <div>test</div>
//     }
//     return ComponentWithRouterProp
// }
//
// type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;




export function withRouter<T>(Component: ComponentType<T>): ComponentType<T & WithRouterType> {

    const ComponentWithRouterProp = (props: T & WithRouterType) => {
        console.log("ComponentWithRouterProp")
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;