import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="productivity">
        <div className="title">Employee Productivity Dashboard</div>
        <div className="card">
          <div className="content">
            <p className="para-1">Productivity on Monday</p>
            <p className="para-2">4%</p>
          </div>
          <div className="bar">
            <div className="progress p-1"></div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <p className="para-1">Productivity on Tuesday</p>
            <p className="para-2">92%</p>
          </div>
          <div className="bar">
            <div className="progress p-2"></div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <p className="para-1">Productivity on Wednesday</p>
            <p className="para-2">122%</p>
          </div>
          <div className="bar">
            <div className="progress p-3"></div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <p className="para-1">Productivity on Thursday</p>
            <p className="para-2">93%</p>
          </div>
          <div className="bar">
            <div className="progress p-4"></div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <p className="para-1">Productivity on Friday</p>
            <p className="para-2">89%</p>
          </div>
          <div className="bar">
            <div className="progress p-5"></div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <p className="para-1">Productivity on Saturday</p>
            <p className="para-2">98%</p>
          </div>
          <div className="bar">
            <div className="progress p-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
