import { getDatabase, ref, set, push } from 'firebase/database'
import { useRef, useState } from 'react'
import classes from './AddTask.module.css'
import { ClockLoader } from 'react-spinners'

const override = {
    margin: "0  auto 6px",
};

function AddTask() {
    console.log('AddTask');
    const [isAddLoading, setIsAddLoading] = useState(false)
    const task_textRef = useRef()

    async function addTaskHandler(event) {
        event.preventDefault()
        setIsAddLoading(true)
        const db = getDatabase()
        const task = { taskText: task_textRef.current.value }
        const tasksRef = ref(db, 'tasks')
        const newTaskRef = push(tasksRef)
        task_textRef.current.value = ''
        await set(newTaskRef, task)
        setIsAddLoading(false)
    }
    return <section className={classes.add_task}>
        <ClockLoader cssOverride={override} loading={isAddLoading} />
        {!isAddLoading && <form className={classes.form} onSubmit={addTaskHandler}>
            <input ref={task_textRef} className={classes.task_text} placeholder='नव वर्ष की हार्दिक शुभकामनायें!'></input>
            <button type='submit' className={classes.btn_add_task}>Add Wish</button>
        </form>}
    </section>
}

export default AddTask