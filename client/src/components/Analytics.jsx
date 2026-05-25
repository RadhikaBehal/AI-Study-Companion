import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {

  const data = [
    {
      day: "Mon",
      hours: 2,
    },
    {
      day: "Tue",
      hours: 4,
    },
    {
      day: "Wed",
      hours: 3,
    },
    {
      day: "Thu",
      hours: 5,
    },
    {
      day: "Fri",
      hours: 6,
    },
    {
      day: "Sat",
      hours: 4,
    },
    {
      day: "Sun",
      hours: 7,
    },
  ];

  return (

    <div className="mt-12 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        Weekly Study Analytics
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="hours"
              stroke="#ffffff"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Analytics;