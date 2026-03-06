const db = require("../config/db");

// Get all tasks
exports.getTasks = (req, res) => {
  db.all("SELECT * FROM tasks ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Create new task
exports.createTask = (req, res) => {
  const { title, description, priority, due_date } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Task title cannot be empty" });
  }

  // Prevent past dates
  if (due_date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(due_date);

    if (selectedDate < today) {
      return res.status(400).json({
        error: "Due date cannot be in the past",
      });
    }
  }

  const query = `
    INSERT INTO tasks (title, description, priority, due_date)
    VALUES (?, ?, ?, ?)
  `;

  db.run(
    query,
    [title, description || "", priority || "Medium", due_date || null],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        id: this.lastID,
        title,
        description,
        priority: priority || "Medium",
        due_date,
        status: "Pending",
      });
    },
  );
};

// Mark task as completed
exports.completeTask = (req, res) => {
  const id = req.params.id;

  db.run(
    `UPDATE tasks SET status='Completed' WHERE id=?`,
    [id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({ message: "Task marked as completed" });
    },
  );
};

// Delete task
exports.deleteTask = (req, res) => {
  const id = req.params.id;

  db.run(`DELETE FROM tasks WHERE id=?`, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Task deleted successfully" });
  });
};
