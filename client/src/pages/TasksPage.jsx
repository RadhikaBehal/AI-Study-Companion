import TaskSection from "../components/TaskSection";

function TasksPage({
  tasks,
  setTasks,
}) {

  return (
    <TaskSection
      tasks={tasks}
      setTasks={setTasks}
    />
  );

}

export default TasksPage;