import React from "react";
import Header from "../other/Header.jsx";
import CreateTask from "../other/CreateTask.jsx";
import AllTask from "../other/AllTask.jsx";

const AdminDashboard = ({ changeUser }) => {
  // Admin name (single admin case)
  const adminData = { firstName: "Vikash" };

  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} data={adminData} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
