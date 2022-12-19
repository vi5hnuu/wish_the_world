/*
Insert The Positive Thoughts...
Delete The Negative Thoughts...
Enter A Prosperous Life...
*/

import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './DeleteConfirmation.module.css'
import Backdrop from './Backdrop'



function DeleteConfirmation(props) {
    const ref = document.querySelector('body')

    return ReactDOM.createPortal(<Fragment>
        <Backdrop />
        <div className={classes.modal}>
            <blockquote className={classes.quote}>Insert The Positive Thoughts...<br />
                Delete The Negative Thoughts...<br />
                Enter A Prosperous Life...</blockquote>
            <p className={classes.confirm_text}>
                Are you sure ?
            </p>
            <div className={classes.modal_actions}>
                <button className={classes.btn_yes} onClick={props.onDelete}>Yes</button>
                <button className={classes.btn_no} onClick={props.onCancel}>No</button>
            </div>
        </div>
    </Fragment>, ref)
}

export default DeleteConfirmation