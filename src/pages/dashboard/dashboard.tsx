import './dashboard.css';
import {default as BarChart } from "../../components/charts/bar-chart";
import {default as PieChart} from "../../components/charts/pie-chart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="charts">
        <BarChart />
        <PieChart />
      </div>
      I know the colors are terrible, but this is to give you an idea of what the user may pick
    </div>
  );
};

export default Dashboard;