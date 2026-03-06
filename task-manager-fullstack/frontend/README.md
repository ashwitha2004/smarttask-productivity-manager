# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# SmartTask – Personal Productivity Manager

## Project Overview

SmartTask is a full-stack task management application that allows users to organize and track their tasks efficiently. The application supports user authentication, task creation, priority management, and due date tracking. It demonstrates core full-stack development concepts including REST APIs, database integration, and modern frontend development using React.

The goal of this project is to provide a simple but structured productivity tool while showcasing practical full-stack engineering skills.

---

## Tech Stack

### Frontend

* React (Vite)
* JavaScript
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* SQLite

### Authentication

* JSON Web Tokens (JWT)
* bcrypt (password hashing)

---

## Features

### Authentication

* User registration
* User login
* Secure password hashing
* Protected dashboard
* Logout functionality

### Task Management

* Add new tasks
* View all tasks
* Mark tasks as completed
* Delete tasks

### Task Enhancements

* Task priority (High / Medium / Low)
* Due date selection
* Past date validation
* Task status indicators
* Task statistics

### UI Features

* Simple and clean interface
* Task filtering
* Dashboard view

---

## API Endpoints

### Authentication

POST `/auth/register`
Registers a new user.

POST `/auth/login`
Logs in an existing user and returns a JWT token.

### Tasks

GET `/tasks`
Fetch all tasks.

POST `/tasks`
Create a new task.

PUT `/tasks/:id`
Mark a task as completed.

DELETE `/tasks/:id`
Delete a task.

---

## Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/your-username/smarttask-manager.git
```

### 2. Backend Setup

```
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Assumptions / Limitations

* SQLite is used as a lightweight local database for simplicity.
* Authentication uses a basic JWT implementation.
* UI design focuses on functionality rather than advanced styling.

---

## Future Improvements

* Task editing feature
* Drag-and-drop Kanban board
* Task categories and tags
* Email notifications for deadlines
* Deployment with Docker

---

## Author

Developed as part of a technical assessment for the **Fresher / Junior Full-Stack Engineer** position.

Author: Ashwitha Reddy
