import React from 'react';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {AddMessageFormType} from "../Dialogs";


const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newMessageBody'
                   placeholder='Enter your message'
                   validate={[required, maxLength50]}/>

            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}