import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          {/* <Route path='/timeTracker' element={<TimeTracker/>}/> */}
          {/* <Route path='/projects' element={<Projects/>}/> */}
          <Route path='/' element={<>project is working</>}></Route>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
