import { useEffect, useState } from "react";
import API from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const loadTasks = async () => {
    const response = await API.get("/tasks");
    setTasks(response.data);
  };

  const completeTask = async (id) => {
   await API.put(`/tasks/${id}`);
    loadTasks();
  };

  const deleteTask = async (id) => {
 await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div>
      <h2>Tasks</h2>

      <p>
        Total Tasks: {tasks.length} | Completed:{" "}
        {tasks.filter((t) => t.status === "Completed").length}
      </p>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("All")}>All</button>

        <button
          onClick={() => setFilter("Pending")}
          style={{ marginLeft: "10px" }}
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("Completed")}
          style={{ marginLeft: "10px" }}
        >
          Completed
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              Status:{" "}
              <span
                style={{
                  color: task.status === "Completed" ? "green" : "orange",
                  fontWeight: "bold",
                }}
              >
                {task.status}
              </span>
            </p>

            <button onClick={() => completeTask(task.id)}>Complete</button>

            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
