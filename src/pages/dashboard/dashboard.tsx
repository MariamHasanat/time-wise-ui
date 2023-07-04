import './dashboard.css';
import { default as BarChart } from "../../components/charts/bar-chart";
import { default as PieChart } from "../../components/charts/pie-chart";
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='top'>
        <div className="date-picker">
          <RangePicker />
        </div>
        <PieChart />
      </div>
      <BarChart />
    </div>
  );
};

export default Dashboard;