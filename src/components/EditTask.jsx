import { useState } from "react";

export default function EditTask({
  id,
  description,
  status,
  editTask,
  setEditingTask,
}) {
  const [newDescription, setNewDescription] = useState(description);
  const [newStatus, setNewStatus] = useState(status);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  return (
    <div className="edit_task_bg" onClick={() => setEditingTask(null)}>
      <div className="edit_task" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Task</h2>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          maxLength={15}
        />
        <div className="radio_buttons" onChange={handleStatusChange}>
          <span>
            <input
              type="radio"
              value="Not Started"
              name="status"
              checked={newStatus === "Not Started"}
            />{" "}
            Not Started
          </span>
          <span>
            <input
              type="radio"
              value="In Progress"
              name="status"
              checked={newStatus === "In Progress"}
            />{" "}
            In Progress
          </span>
          <span>
            <input
              type="radio"
              value="Finished"
              name="status"
              checked={newStatus === "Finished"}
            />{" "}
            Finished
          </span>
        </div>
        <button
          className="button"
          onClick={() => {
            editTask(id, newDescription, newStatus);
            setEditingTask(null);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
