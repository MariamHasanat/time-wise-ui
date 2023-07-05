import './dashboard.css';
import { default as BarChart } from "../../components/charts/bar-chart";
import { default as PieChart } from "../../components/charts/pie-chart";
import { DatePicker } from 'antd';
import UserCard from '../../components/user-card/user-card';
import { useEffect, useState } from 'react';
import UseFetchUser from '../../hooks/user/fetch.hook'
import { Spin } from 'antd';
const { RangePicker } = DatePicker;

const Dashboard = () => {
  const userHook = UseFetchUser();
  const [fetchingUser, setFetchingUser] = useState(true);

  useEffect(() => {
    userHook.fetchUserData().then(() => setFetchingUser(false))// eslint-disable-next-line
  }, []);

  return (
    <div className="dashboard">
      <div className='top'>
        <Spin spinning={fetchingUser}>
          <UserCard username={userHook.username} email={userHook.email} />
        </Spin>
        <div className="range-picker">
          <RangePicker placement='bottomRight' />
          <PieChart />
        </div>
      </div>
      <BarChart />
    </div>
  );
};

export default Dashboard;