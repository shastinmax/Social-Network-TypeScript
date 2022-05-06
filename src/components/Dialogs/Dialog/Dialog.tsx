import s from "../Dialogs.module.css";
import React, {FC} from "react";

type StyledDialogProps = {
    dialog: string
}
export const Dialog: FC<StyledDialogProps> = (props: StyledDialogProps) => {

    const {dialog} = props

    return (
        <div className={s.dialog}>{dialog}</div>
    )
}