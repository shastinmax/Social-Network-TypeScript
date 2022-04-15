import React, {ChangeEvent, useEffect, useState} from "react";

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
                   <b>Status: </b> <span onDoubleClick={activateEditMode}>{status || '-------'}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </>
    )
}
