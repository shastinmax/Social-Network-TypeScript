import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../redux/profile-reducer";
import {FC} from "react";
import {ProfilePropsType} from "../ProfileContainer";
import s from './ProfileInfo.module.css'
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControl/FormsControl";

type PropsType = {
    profile: ProfilePropsType
}
type ProfileTypeKeys = GetStringKeys<ProfilePropsType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (
    {handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>: {(createField<ProfileTypeKeys>("Full name", "fullName", [], Input))}
            </div>
            <div>
                <b>Looking for a
                    job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>

            <div>
                <b>My professional skills</b>:
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>


            <div>
                <b>About me</b>:
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile?.contacts).map(key => {
                return <div className={s.contacts}>
                    <div key={key}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                </div>
            })}
            </div>
        </form>
    )
}

// @ts-ignore
export const ProfileDataFormReduxForm = reduxForm<ProfilePropsType, PropsType>({form: 'edit-profile'})(ProfileDataForm)