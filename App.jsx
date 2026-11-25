
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Dashboard");

  const projects = [
    "Image Labeling",
    "Speech to Text",
    "Model QA",
    "DC Reporting"
  ];

  const tasks = [
    ["Design UI Dashboard", "Image Labeling", "Completed"],
    ["Validate Dataset", "Speech to Text", "In Progress"],
    ["Update Evaluation Script", "Model QA", "Pending"],
    ["Prepare Project Report", "DC Reporting", "Completed"]
  ];

  return (
    <div className="layout">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>PulseWorks AI</h2>

        <button
          className={page === "Dashboard" ? "active" : ""}
          onClick={() => setPage("Dashboard")}
        >
          Dashboard
        </button>

        <button
          className={page === "Projects" ? "active" : ""}
          onClick={() => setPage("Projects")}
        >
          Projects
        </button>

        <button
          className={page === "Tasks" ? "active" : ""}
          onClick={() => setPage("Tasks")}
        >
          Tasks
        </button>
      </div>

      {/* Main Content */}
      <div className="main">

        <h1>Welcome back!</h1>
        <p className="subtitle">
          Here's what's happening today.
        </p>

        {/* Dashboard Page */}
        {page === "Dashboard" && (
          <>
            <div className="cards">

              <div className="card">
                <p>Total Projects</p>
                <h2>24</h2>
              </div>

              <div className="card">
                <p>Total Tasks</p>
                <h2>124</h2>
              </div>

              <div className="card">
                <p>Active Members</p>
                <h2>18</h2>
              </div>

              <div className="card">
                <p>Pending Tasks</p>
                <h2>12</h2>
              </div>

            </div>

            <h2 className="section-title">Recent Tasks</h2>

            <TaskTable tasks={tasks.slice(0, 3)} />
          </>
        )}

        {/* Projects Page */}
        {page === "Projects" && (
          <>
            <h2 className="section-title">Projects</h2>

            <div className="project-list">
              {projects.map((project, index) => (
                <p key={index}>{project}</p>
              ))}
            </div>
          </>
        )}

        {/* Tasks Page */}
        {page === "Tasks" && (
          <>
            <h2 className="section-title">All Tasks</h2>

            <TaskTable tasks={tasks} />
          </>
        )}

      </div>
    </div>
  );
}

// Task Table Component
function TaskTable({ tasks }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Project</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task[0]}</td>
            <td>{task[1]}</td>
            <td>
              <span className={task[2].replace(" ", "").toLowerCase()}>
                {task[2]}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
