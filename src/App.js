import logo from './logo.svg';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element=<Login/> />
        <Route path='/register' element=<Register/> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
