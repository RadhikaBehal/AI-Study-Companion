import { useEffect, useState } from "react";

function PomodoroTimer() {

  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);

  }, [isRunning, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(1500);
    setIsRunning(false);
  };

  return (
    <div className="mt-12 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 text-white">

      <h2 className="text-3xl font-bold">
        Pomodoro Timer
      </h2>

      <div className="text-7xl font-bold mt-8">
        {formatTime()}
      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={startTimer}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Start
        </button>

        <button
          onClick={pauseTimer}
          className="bg-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-700 transition"
        >
          Pause
        </button>

        <button
          onClick={resetTimer}
          className="bg-red-500 px-6 py-3 rounded-xl hover:bg-red-400 transition"
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default PomodoroTimer;