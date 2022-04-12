import styles from './FormsControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";
import {FC} from "react";

export type FieldValidatorType = (value: string) => string | undefined

const FormControl = ({input,meta:{touched,error},children}:any) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props:any) => {
    const {input,meta,child,element,...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}
export const Input = (props:any) => {
    const {input,meta,child,element,...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: FC<WrappedFieldProps>,
                                                         props = {}, text = "") {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>