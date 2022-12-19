import classes from './Tasks.module.css'
import { ClockLoader } from 'react-spinners'
import TaskList from './TaskList'
import { useContext } from 'react';
import TaskContext from '../Store/TaskContext';

const override = {
    margin: "0 auto",
};

function Tasks() {
    console.log('Tasks');
    const tasksContext = useContext(TaskContext)
    return <section className={classes.tasks_container}>
        <div className={classes.tasks_header}>🎄Wishes🎄</div>
        <ClockLoader cssOverride={override} loading={tasksContext.tasksLoading} />
        {!tasksContext.isLoading && <TaskList />}
    </section>
}

export default Tasks