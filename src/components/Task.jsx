import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

export default function Task({
  id,
  description,
  status,
  deleteTask,
  setEditingTask,
}) {
  const bgColor =
    status === "Not Started"
      ? "red"
      : status === "In Progress"
      ? "orange"
      : "green";

  return (
    <div className="task">
      <span className="status" style={{ backgroundColor: bgColor }}>
        {status}
      </span>
      <p>{description}</p>
      <div className="buttons_container">
        <button className="delete_button" onClick={() => deleteTask(id)}>
          <BsFillTrashFill />
        </button>
        <button
          className="edit_button"
          onClick={() => setEditingTask({ id, description, status })}
        >
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
}
