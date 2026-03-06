import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const navigate = useNavigate();

  const refreshTasks = () => {
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>SmartTask – Personal Productivity Manager</h1>

      <button onClick={logout} style={{ marginBottom: "20px" }}>
        Logout
      </button>

      <TaskForm refreshTasks={refreshTasks} />

      <TaskList />
    </div>
  );
}

export default App;
