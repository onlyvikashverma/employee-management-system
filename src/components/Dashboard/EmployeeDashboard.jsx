import React from "react";
import Header from "../other/Header.jsx";
import TaskListNumbers from "../other/TaskListNumbers.jsx";
import TaskList from "../TaskList/TaskList.jsx";

const EmployeeDashboard = ({ changeUser, data, updateTaskStatus }) => {
  return (
    <div className="p-10 bg-transparent min-h-screen text-white font-inter animate-fadeIn space-y-10">
      <Header changeUser={changeUser} data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;
