import { getDatabase, remove, ref } from 'firebase/database'
import classes from './Task.module.css'
import delete_icon from './../asset/delete_icon.png'

function Task(props) {

    async function deleteTask(event) {
        event.preventDefault()
        const db = getDatabase()
        const tasksRef = ref(db, `tasks/${event.currentTarget.id}`)
        await remove(tasksRef)
    }
    return <div className={classes.task_container}>
        <li key={props.id} className={classes.task}>
            {props.taskText}
        </li>
        <button onClick={deleteTask} id={props.id} className={classes.delete_btn}><img src={delete_icon} alt='delete the task' /></button>
    </div>

}

export default Task