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
    const onHandlerEdit = () => {
        setEditMode(!editMode)
    }
    const goToEditMode = () => {
        setEditMode(true)
    }
    console.log()
    return (
        <div>
            <div className={s.avatar}>
                <div className={s.profileImgBtn}>
                    <img src={profile.photos.large || userPhoto} className={s.userPhoto}
                         alt='avatar'/>
                    {!userId && <button className={s.btnEdit} onClick={onHandlerEdit}>Edit</button>}

                    <label className={s.profileLoad}> Load avatar
                        <input type="file" onChange={onMainPhotoSelected}/>
                    </label>

                </div>
                <div className={s.contacts}>
                    <h4 className={s.profileInform}>User Information</h4>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <div >{editMode ?
                        <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileData profile={profile} goToEditMode={goToEditMode}/>}</div>


                </div>
            </div>

        </div>
    )
}

type ContactsType = {
    contactTitle: string,
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: ContactsType) => {
    return <div ><span className={s.des}>{contactTitle}</span>  {contactValue}</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div><span className={s.descr}>Full name</span> {profile.fullName}</div>
        <div><span className={s.descr}>Looking for a job</span> {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
        <div><span className={s.descr}>About me</span> {profile.aboutMe}</div>
        <div><span className={s.descr}>Contacts: </span> {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                {
                    profile.contacts[key] !== null
                    && <Contact contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                }
            </div>
        })}</div>
    </div>
}
