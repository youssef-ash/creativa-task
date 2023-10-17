import "./App.css";

import { useState, useEffect } from "react";

import TaskList from "./components/TaskList";
import LogIn from "./components/LogIn";

function App() {
  const cachedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState(cachedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (description) => {
    setTasks((prev) => {
      const newId = prev.length ? prev[prev.length - 1].id + 1 : 1;

      const newEvent = {
        id: newId,
        description,
        status: "Not Started",
      };

      return [...prev, newEvent];
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, newDescription, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, description: newDescription, status: newStatus }
          : task
      )
    );
  };

  return (
    <div className="App">
      {loggedIn ? (
        <TaskList
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ) : (
        <LogIn setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
