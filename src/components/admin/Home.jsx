// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "./FeaturedInfo";
import { userData } from "./dummyData";
import WidgetSm from "../admin/WidgetSm";
import WidgetLg from "../admin/WidgetLg";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Chart from "./Chart";

export default function AdHome() {
  return (
    <>
          <div className="row-top">
      <Topbar />
</div>
      <div>
        <div className="col-md-2">
          <Sidebar />
        </div>

        <div className="col-md-10">
          <div className="home">

            <div className="row"></div>
            {/* <iframe src="https://app.chartbrew.com/chart/d57ca99e-e147-495b-a898-a669bffff2ea/embedded" allowTransparency="true" width="700" height="300" scrolling="no" frameborder="0"></iframe> */}
            {/* <iframe src="https://app.chartbrew.com/chart/76976aa3-d06a-4164-961e-9f17370748b4/embedded" allowTransparency="true" width="700" height="300" scrolling="no" frameborder="0"></iframe> */}
                  </div>
        </div>
      </div>
    </>
  );
}
