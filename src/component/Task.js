import { getDatabase, remove, ref } from 'firebase/database'
import classes from './Task.module.css'
import delete_icon from './../asset/delete_icon.png'
import { Fragment, useState } from 'react'
import DeleteConfirmation from './DeleteConfirmation'

function Task(props) {
    const [showModal, setShowModal] = useState(false)
    async function deleteTask(event) {
        event.preventDefault()
        console.log();
        const db = getDatabase()
        const tasksRef = ref(db, `tasks/${props.id}`)
        await remove(tasksRef)
    }
    function toggleShowModalHandler() {
        setShowModal((prevState) => {
            return !prevState
        })
    }
    return <Fragment>
        {showModal && <DeleteConfirmation onDelete={deleteTask} onCancel={toggleShowModalHandler} />}
        <div className={classes.task_container}>
            <li key={props.id} className={classes.task}>
                {props.taskText}
            </li>
            <button onClick={toggleShowModalHandler} id={props.id} className={classes.delete_btn}><img src={delete_icon} alt='delete the task' /></button>
        </div>
    </Fragment>

}

export default Task