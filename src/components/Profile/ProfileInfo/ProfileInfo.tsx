import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import {ChangeEvent, useState} from "react";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {useDispatch} from "react-redux";
import userPhoto from "../../../assets/images/risuem-chelovek-rebenku-14.jpg";

type propsType = {
    profile: ProfilePropsType | null,
    status: string,
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfilePropsType) => Promise<any>
    userId: string | undefined
}
export const ProfileInfo = (props: propsType) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)

    const {profile, updateStatus, status, savePhoto, saveProfile, userId} = props
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            dispatch(savePhoto(e.currentTarget.files[0]))
        }
    }

    const onSubmit = (formData: ProfilePropsType) => {
        dispatch(saveProfile(formData))
        setEditMode(false)
    }

    const goToEditMode = () => {
        setEditMode(true)
    }
    console.log()
    return (
        <div>
            <div className={s.avatar}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}
                     alt='avatar'/>
                {!userId && <button onClick={() => setEditMode(!editMode)}>Edit</button>}

                {editMode && <input type="file" onChange={onMainPhotoSelected}/>}

                {editMode ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} goToEditMode={goToEditMode}/>}

                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

type ContactsType = {
    contactTitle: string,
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: ContactsType) => {
    return <div className={s.contacts}><b>{contactTitle}</b>:{contactValue}</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div><b>Full name</b>: {profile.fullName}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                {
                    profile.contacts[key] !== null
                    && <Contact contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                }
            </div>
        })}</div>
    </div>
}
