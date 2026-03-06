import { useState } from "react";
import API from "../services/api";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Task title cannot be empty");
      return;
    }

    // Prevent past date
    if (dueDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const selectedDate = new Date(dueDate);

      if (selectedDate < today) {
        alert("Due date cannot be in the past");
        return;
      }
    }

    await API.post("/tasks", {
      title,
      description,
      priority,
      due_date: dueDate,
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");

    refreshTasks();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <label>Priority</label>
      <br />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <br />
      <br />

      <label>Due Date</label>
      <br />

      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default TaskForm;
