import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ changeUser, data }) => {
  const navigate = useNavigate();

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
    navigate("/");
  };

  return (
    <div className="flex items-end justify-between bg-slate-900/30 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/30 shadow-2xl animate-fadeIn">
      <div className="flex flex-col">
        <span className="text-slate-400 font-medium tracking-widest uppercase text-xs mb-2">Welcome Back</span>
        <h1 className="text-slate-300 font-medium tracking-tight">
          <span className="text-5xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl">
            {data?.firstName || 'User'} 👋
          </span>
        </h1>
      </div>

      <button
        onClick={logOutUser}
        className="group relative overflow-hidden text-white bg-red-500/10 hover:bg-red-500 border border-red-500/50 px-8 py-3 text-sm font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/30"
      >
        <span className="relative z-10 flex items-center">
           Logout <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </button>
    </div>
  );
};

export default Header;
