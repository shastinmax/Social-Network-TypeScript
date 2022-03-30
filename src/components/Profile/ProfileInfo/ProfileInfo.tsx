import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
type propsType = {
    profile: ProfilePropsType | null,
    status: string,
    updateStatus: (status:string)=>void
}
export const ProfileInfo = ({...props}: propsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return(
        <div>
            <div className={s.avatar}>
                <img src={props.profile.photos.small}
                     alt='avatar'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}