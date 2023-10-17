import { useState } from "react";

import Task from "./Task";
import EditTask from "./EditTask";

export default function TaskList({ tasks, addTask, deleteTask, editTask }) {
  const [description, setDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const taskElements = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      description={task.description}
      status={task.status}
      deleteTask={deleteTask}
      setEditingTask={setEditingTask}
    />
  ));

  console.log(editingTask);

  return (
    <div className="task_list_container">
      <div className="header">
        <h2>Digital Hub Task List</h2>
        <div className="add_task_container">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a new task"
            maxLength={15}
          />
          <button className="button" onClick={() => addTask(description)}>
            Add Task
          </button>
        </div>
      </div>
      {tasks.length > 0 && (
        <div className="tasks_container">{taskElements}</div>
      )}
      {editingTask && (
        <EditTask
          id={editingTask.id}
          description={editingTask.description}
          status={editingTask.status}
          editTask={editTask}
          setEditingTask={setEditingTask}
        />
      )}
    </div>
  );
}
