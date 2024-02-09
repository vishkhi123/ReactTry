import logo from './logo.svg';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Navbar/>
      <Routes>
      <Route path='/' element=<Home/> />
        <Route path='/login' element=<Login/> />
        <Route path='/register' element=<Register/> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
