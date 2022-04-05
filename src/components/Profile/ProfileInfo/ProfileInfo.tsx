import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import userPhoto from "../../../assets/images/risuem-chelovek-rebenku-14.jpg";
import {ChangeEvent} from "react";

type propsType = {
    profile: ProfilePropsType | null,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file:any) => void
}
export const ProfileInfo = (props: propsType) => {
    const {profile, updateStatus, status, isOwner,savePhoto} = props
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            <div className={s.avatar}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}
                     alt='avatar'/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}