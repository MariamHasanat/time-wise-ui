import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Input from './components/input/input';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        <Input/>
        <Routes>
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
