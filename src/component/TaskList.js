import classes from './TaskList.module.css'
import Task from './Task'
import { useContext } from 'react'
import TaskContext from '../Store/TaskContext'

function TaskList() {
    console.log('TaskList');
    const tskCtx = useContext(TaskContext)

    return <ul className={classes.task_list}>
        {tskCtx.tasks.length === 0 && <p className={classes.no_task}>😊No Task Found😊</p>}
        {tskCtx.tasks.map(task => {
            return <Task key={task.id} id={task.id} taskText={task.taskText} />
        })}
    </ul>
}
export default TaskList