import ChartBox from "../../components/chatBox/ChartBox";
import { TopBox } from "../../components/topBox/TopBox";
import "./home.scss";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";

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
      <div className="box box4"></div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">box 7</div>
      <div className="box box8">box 8</div>
      <div className="box box9">box 9</div>
    </div>
  );
}

export default Home;
