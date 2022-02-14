import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";

type propsType = {
    profile: ProfilePropsType | null
}
export const ProfileInfo = ({...props}: propsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return(
        <div>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' alt={'img'}/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile.photos.small}
                     alt='avatar'/>
                descrip
            </div>

        </div>
    )
}