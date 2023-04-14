import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          {/* <Route path='login' element={<Login/>}/> */}
          {/* <Route path='dashboard' element={<Dashboard/>}/> */}
          {/* <Route path='timeTracker' element={<TimeTracker/>}/> */}
          {/* <Route path='projects' element={<Projects/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
