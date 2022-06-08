import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../common/hook/selectorHook";

import loginImg from '../../assets/images/login-svgrepo-com.svg'
import s from './Login.module.css'
import {
    selectCaptchaUrl,
    selectIsAuth
} from "../../redux/selectors/authSelector/authSelector";

type LoginFormOwnProps = {
    captchaUrl: string | null
}
export const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props: any) => {

    const {
        error,
        captchaUrl
    } = props

    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field
                    validate={[required]}
                    component={Input}
                    className={s.input}
                    name='email'
                    placeholder='Email'
                />
            </div>
            <div>
                <Field
                    validate={[required]}
                    component={Input}
                    className={s.input}
                    name='password'
                    placeholder='Password'
                    type={'password'}
                />
            </div>

            <label className={s.label}>
                remember me
                <Field
                    component={Input}
                    className={s.inputCheckbox}
                    name='rememberMe'
                    type={'checkbox'}
                />
            </label>

            {captchaUrl && <img src={captchaUrl} alt={'captchaUrl'}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}
            {error && <div style={{color: 'red'}}>
                {error}
            </div>
            }
            <div>
                <button className={s.btnLogin}>Login</button>
            </div>
        </form>

    );
};


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)
export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const Login = () => {
    const dispatch = useDispatch()

    const isAuth = useAppSelector(selectIsAuth)
    const captchaUrl = useAppSelector(selectCaptchaUrl)

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <div className={s.loginHeader}><img className={s.loginImg} src={loginImg} alt="img"/> <h2>Login</h2></div>
            <h3 className={s.subTitle}>To log in get registered <a className={s.link} href={'https://social-network.samuraijs.com/login'}>here</a> or
                use common test account credentials:</h3>

            <p className={s.text}>
                Email:
                <span className={s.decor}>  free@samuraijs.com</span>
            </p>
            <p className={s.text}>
                Password:
                <span className={s.decor}> free</span>
            </p>

            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};
