import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({expectedApp}) => {
  const data = expectedApp.ratings;
  console.log(data);

  return (
    <div style={{ width: "100%", height: 300 }} className="space-y-5 mb-20">
      <h3 className="font-semibold text-2xl">Ratings</h3>
      
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"   // 🔥 IMPORTANT (horizontal bar বানানোর জন্য)
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />

          <Bar
            dataKey="count"
            fill="#ff7a00"  // orange color
            radius={[0, 5, 5, 0]} // rounded right side
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;