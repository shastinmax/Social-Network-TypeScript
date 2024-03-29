import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(true)
    const [status, setStatus] = useState<string>(props.status)
    const activateEditMode = () => setEditMode(false)
    const deactivateEditMode = () => {
        setEditMode(true)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    useEffect(() => {
        setStatus(status)
    }, [props.status])

    return (
        <>
            {editMode
                ? <div>
                    <span className={s.status}>Status: </span> <span className={s.statusEdit}
                                                                     onDoubleClick={activateEditMode}>{status || '-------'}
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16"
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                        d="M6 10l2-1 7-7-1-1-7 7-1 2zM4.52 13.548c-0.494-1.043-1.026-1.574-2.069-2.069l1.548-4.262 2-1.217 6-6h-3l-6 6-3 10 10-3 6-6v-3l-6 6-1.217 2z"></path></svg></span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </>
    )
}
