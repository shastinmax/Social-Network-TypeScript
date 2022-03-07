import s from './ProfileInfo.module.css'
import React from "react";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: true
    }

    activateEditMode =()=> {
        this.setState({
            editMode: false
        })
    }

    deactivateEditMode =()=> {
        this.setState({
            editMode: true
        })
    }

    render() {

        return (
            <>
                {this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }


            </>
        )
    }

}