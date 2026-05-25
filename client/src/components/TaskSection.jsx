import { useState } from "react";

function TaskSection({ tasks, setTasks }) {

  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
  ...tasks,
  {
    text: input,
    completed: false,
  },
]);
    setInput("");
  };

  const toggleTask = (index) => {
  const updatedTasks = [...tasks];

  updatedTasks[index].completed =
    !updatedTasks[index].completed;

  setTasks(updatedTasks);
};

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-12 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white">
        Tasks
      </h2>

      <div className="flex gap-3 mt-6">

        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none"
        />

        <button
          onClick={addTask}
          className="bg-white text-black px-5 rounded-xl font-semibold hover:scale-105 transition"
        >
          Add
        </button>

      </div>

      <div className="mt-6 flex flex-col gap-3">

        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-black p-4 rounded-xl"
          >
            <div className="flex items-center gap-3">

  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => toggleTask(index)}
  />

  <p
    className={`${
      task.completed
        ? "line-through text-zinc-500"
        : "text-white"
    }`}
  >
    {task.text}
  </p>

</div>

            <button
              onClick={() => deleteTask(index)}
              className="text-red-400 hover:text-red-300"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default TaskSection;