import './dashboard.css';
import { default as BarChart } from "../../components/charts/bar-chart/bar-chart";
import { default as PieChart } from "../../components/charts/pie-chart";
import { DatePicker } from 'antd';
import UserCard from '../../components/user-card/user-card';
import { useEffect, useState } from 'react';
import UseFetchUser from '../../hooks/user/fetch.hook'
import { Spin } from 'antd';
import useRange from '../../hooks/dashboard/date.hook';
const { RangePicker } = DatePicker;

const Dashboard = () => {
  const rangeHook = useRange();
  const userHook = UseFetchUser();
  const [fetchingUser, setFetchingUser] = useState(true);
  useEffect(() => {
    userHook.fetchUserData().then(() =>
      setFetchingUser(false))
    // eslint-disable-next-line
  }, []);

  return (
    <Spin spinning={fetchingUser}>
      <div className="dashboard">
        <div className='top'>
          <UserCard username={userHook.username} email={userHook.email} />
          <div className="range-picker" >
            <RangePicker
              placement='bottomRight'
              format={'MMM DD, YYYY'}
              onChange={rangeHook.dateChangeHandler}
            />
            <PieChart />
          </div>
        </div>
        <BarChart dateRange={rangeHook.dateRange} />
      </div>
    </Spin>
  );
};

export default Dashboard;