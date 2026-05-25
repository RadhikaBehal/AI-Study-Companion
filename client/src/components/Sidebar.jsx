import { NavLink } from "react-router-dom";

import {
  FaBook,
  FaCheckCircle,
  FaBrain,
  FaClock,
} from "react-icons/fa";

function Sidebar() {

  return (

    <div className="w-64 min-h-screen bg-black border-r border-zinc-800 p-6">

      <h1 className="text-3xl font-bold text-white mb-12">
        StudyAI
      </h1>

      <div className="flex flex-col gap-4">

  <NavLink
    to="/"
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-4 rounded-2xl transition ${
        isActive
          ? "bg-zinc-900 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`
    }
  >

    <FaBrain />

    <span>Dashboard</span>

  </NavLink>

  <NavLink
    to="/notes"
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-4 rounded-2xl transition ${
        isActive
          ? "bg-zinc-900 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`
    }
  >

    <FaBook />

    <span>Notes</span>

  </NavLink>

  <NavLink
    to="/tasks"
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-4 rounded-2xl transition ${
        isActive
          ? "bg-zinc-900 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`
    }
  >

    <FaCheckCircle />

    <span>Tasks</span>

  </NavLink>

  <NavLink
    to="/pomodoro"
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-4 rounded-2xl transition ${
        isActive
          ? "bg-zinc-900 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`
    }
  >

    <FaClock />

    <span>Pomodoro</span>

  </NavLink>
  
      </div>

    </div>

  );

}

export default Sidebar;