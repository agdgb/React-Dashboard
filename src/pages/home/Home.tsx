import ChartBox from "../../components/chatBox/ChartBox";
import { TopBox } from "../../components/topBox/TopBox";
import "./home.scss";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import { BarChartBox } from "../../components/barChartbox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import AreaChartBox from "../../components/AreaChartBox/AreaChartBox";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <AreaChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />{" "}
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}

export default Home;
