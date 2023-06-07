import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ConfigProvider, theme } from 'antd';
import Signup from './pages/signup/signup';
import ProjectsPage from './pages/projects/projects';
import TimeTracker from './pages/time-tracker/time-tracker';
import PageLayout from './components/layout/layout';
import Dashboard from './pages/dashboard/dashboard';
function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={
          {
            components:
            {
              Layout: {
                colorBgHeader: "#c4d3fa",
                colorBgBase: '#c4d3fa',
                colorBgBody: '#f1f8ff',
              }
            }, token: {
              colorPrimary: '#52469C',
              colorBgLayout: '#F1F8FF'
            }
          }}>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            {/* <Route path='/login' element={<PageLayout><Login/></PageLayout>}/> */}
            <Route path='/dashboard' element={<PageLayout><Dashboard /></PageLayout>} />
            <Route path='/timeTracker' element={<PageLayout><TimeTracker /></PageLayout>} />
            <Route path='/projects' element={<PageLayout><ProjectsPage /></PageLayout>} />
            <Route path='/' element={<>project is working</>}></Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}
export default App;