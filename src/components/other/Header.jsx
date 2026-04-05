import React from "react";

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl text-white">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data?.firstName} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="text-white bg-red-700 px-5 py-3 text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
