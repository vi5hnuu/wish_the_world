import React from "react";

const TaskContext = React.createContext({
    tasks: [],
    tasksLoading: false
})

export default TaskContext
