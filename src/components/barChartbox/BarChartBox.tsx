import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barchartbox.scss";

type Props = {
  title: string;
  color: string;
  dataKey: number | string;
  chartData: object[];
};

export const BarChartBox = (props: Props) => {
  return (
    <div className="barchartbox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius:'20px' }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
