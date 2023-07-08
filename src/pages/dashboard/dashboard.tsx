import './dashboard.css';
import dayjs from 'dayjs';
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
  const [dateRange, setDateRange] = useState<any | null>([]);
  useEffect(() => {
    userHook.fetchUserData().then(() => setTimeout(() => {
      setFetchingUser(false);
    }, 500)
    )// eslint-disable-next-line
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
              onChange={values => {
                if (values) {
                  const val1: Date = new Date(dayjs(values[0]).format('YYYY-MM-DDTHH:mm:ss.sssZ'))
                  const val2: Date = new Date(dayjs(values[1]).format('YYYY-MM-DDTHH:mm:ss.sssZ'))
                  val1.setHours(0, 0, 0)
                  val2.setHours(23, 59, 59, 999);
                  setDateRange([val1.getTime(), val2.getTime()]);
                }
                else {
                  console.log('something went wrong');
                }
              }} />
            <PieChart />
          </div>
        </div>
        <BarChart />
      </div>
    </Spin>
  );
};

export default Dashboard;