import './App.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebaseConfig from './firebaseConf';
import { Fragment, useEffect, useState } from 'react';
import AddTask from './component/AddTask';
import Tasks from './component/Tasks';
import TaskContext from './Store/TaskContext';

function App() {
  console.log("App");
  const [tasks, setTasks] = useState([])
  const [tasksLoading, setTasksLoading] = useState(false)

  useEffect(() => {
    initializeApp(firebaseConfig)
    const db = getDatabase()
    const tasksRef = ref(db, 'tasks')
    onValue(tasksRef, (snapshot) => {
      setTasksLoading(true)
      const tasks = []
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const task = { id: key, taskText: childSnapshot.val().taskText }
          tasks.push(task)
        })
      }
      setTasksLoading(false)
      setTasks(tasks)
    });
    return () => { off(tasksRef) }
  }, [])



  return <Fragment>
    <AddTask />
    <TaskContext.Provider value={{ tasks, tasksLoading }}>
      <Tasks />
    </TaskContext.Provider>
  </Fragment>
}

export default App;
