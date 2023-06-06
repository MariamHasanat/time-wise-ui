import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup/signup';
import ProjectsPage from './pages/projects/projects';
import TimeTracker from './pages/time-tracker/time-tracker';
import PageLayout from './components/layout/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/login' element={<PageLayout><Login/></PageLayout>}/> */}
          {/* <Route path='/dashboard' element={<PageLayout><Dashboard/></PageLayout>}/> */}
          <Route path='/timeTracker' element={<PageLayout><TimeTracker /></PageLayout>} />
          <Route path='/projects' element={<PageLayout><ProjectsPage /></PageLayout>} />
          {/* <Route path='/' element={<>project is working</>}></Route> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
