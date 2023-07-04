import './dashboard.css';
import { default as BarChart } from "../../components/charts/bar-chart";
import { default as PieChart } from "../../components/charts/pie-chart";
import { DatePicker } from 'antd';
import UserCard from '../../components/user-card/user-card';
import { useEffect, useState } from 'react';
import showMessage from '../../utils/message/message';

const { RangePicker } = DatePicker;
interface userData {
  username: string,
  email: string
}
const Dashboard = () => {
  const [user, setUser] = useState<userData>({ username: "", email: "" });
  const token: string = localStorage.getItem('token') || "";

  const fetchUserData = async () => {
    fetch('http://localhost:3001/user', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "token": token
      }
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then((res) => {
            setUser(res)
            return true;
          }
          )
        }
      }).catch(err => {
        showMessage("error", err);
        return undefined;
      })
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="dashboard">
      <div className='top'>
        <UserCard username={user.username} email={user.email} />
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