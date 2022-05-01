import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import {ChangeEvent, useState} from "react";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {useDispatch} from "react-redux";

type propsType = {
    profile: ProfilePropsType | null,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfilePropsType) => Promise<any>
}
export const ProfileInfo = (props: propsType) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)

    const {profile, updateStatus, status, isOwner, savePhoto, saveProfile} = props
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

            // .then(() => setEditMode(false))

    }

    const goToEditMode = () => {
        setEditMode(true)
    }
    return (
        <div>
            <div className={s.avatar}>
                <img src={profile.photos.large} className={s.mainPhoto}
                     alt='avatar'/>
                <button onClick={()=>setEditMode(!editMode)}>Edit</button>
                {editMode && <input type="file" onChange={onMainPhotoSelected}/>}

                {editMode ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}

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
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}
