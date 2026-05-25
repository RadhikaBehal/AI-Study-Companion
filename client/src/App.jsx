import {
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import NotesPage from "./pages/NotesPage";
import TasksPage from "./pages/TasksPage";
import PomodoroPage from "./pages/PomodoroPage";


import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
 
  useEffect(() => {

  const unsubscribe =
    onAuthStateChanged(
      auth,
      (currentUser) => {

        setUser(currentUser);

      }
    );

  return () => unsubscribe();

}, []);

if (!user) {

  return <Login />;

}

  return (

  <div
  className={`flex min-h-screen transition-colors duration-500 ${
    darkMode
      ? "bg-black text-white"
      : "bg-zinc-100 text-black"
  }`}
>

    <Sidebar />

    <div className="flex-1 p-8 overflow-y-auto">

      <div className="flex justify-end">

  <button
    onClick={() =>
      setDarkMode(!darkMode)
    }

    className="mb-6 px-5 py-3 rounded-2xl bg-zinc-800 text-white hover:scale-105 transition"
  >

    {darkMode
      ? "☀️ Light Mode"
      : "🌙 Dark Mode"}

  </button>

  <button
  onClick={() => signOut(auth)}
  className="mb-6 ml-4 px-5 py-3 rounded-2xl bg-red-500 text-white hover:scale-105 transition"
>
  Logout
</button>

</div>

      <h1 className="text-5xl font-bold">
        AI Study Companion
      </h1>

      <p className="text-zinc-400 mt-3 text-lg">
        Your intelligent productivity dashboard.
      </p>

      <Routes>

  <Route
    path="/"
    element={<DashboardPage />}
  />

  <Route
    path="/notes"
    element={<NotesPage />}
  />

  <Route
    path="/tasks"
    element={
      <TasksPage
        tasks={tasks}
        setTasks={setTasks}
      />
    }
  />

  <Route
    path="/pomodoro"
    element={<PomodoroPage />}
  />

</Routes>

    </div>

  </div>

);
}

export default App;