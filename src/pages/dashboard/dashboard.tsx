import './dashboard.css';
import { default as BarChart } from "../../components/charts/bar-chart";
import { default as PieChart } from "../../components/charts/pie-chart";
import { DatePicker } from 'antd';
import UserCard from '../../components/user-card/user-card';

const { RangePicker } = DatePicker;
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='top'>
          <UserCard />
        <div className="range-picker">
          <RangePicker />
          <PieChart />
        </div>
      </div>
      <BarChart />
    </div>
  );
};

export default Dashboard;