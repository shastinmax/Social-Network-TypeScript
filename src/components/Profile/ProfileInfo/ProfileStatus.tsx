import s from './ProfileInfo.module.css'
import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: true,
        status: this.props.status

    }

    activateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        return (
            <>
                {this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }


            </>
        )
    }

}