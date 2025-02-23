import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechartbox.scss";

const data = [
  { name: "Phones", value: 400, color: "#0088FE" },
  { name: "Laptops", value: 300, color: "#00C49F" },
  { name: "Desktop", value: 300, color: "#FFBB28" },
  { name: "Tablets", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="piechartbox">
      <h1>Leads by source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ background: item.color }}></div>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
