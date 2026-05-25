import { motion } from "framer-motion";

function Dashboard() {

  const stats = [
    {
      title: "Study Hours",
      value: "5.2h",
    },
    {
      title: "Tasks Completed",
      value: "12",
    },
    {
      title: "Focus Score",
      value: "89%",
    },
  ];

  return (

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {stats.map((stat, index) => (

        <motion.div
          key={index}

          whileHover={{
            scale: 1.03,
          }}

          transition={{
            duration: 0.2,
          }}

          className="bg-zinc-900/70 backdrop-blur-lg p-8 rounded-3xl border border-zinc-800 shadow-lg"
        >

          <h2 className="text-zinc-400 text-lg">
            {stat.title}
          </h2>

          <p className="text-5xl font-bold mt-4 text-white">
            {stat.value}
          </p>

        </motion.div>

      ))}

    </div>

  );

}

export default Dashboard;