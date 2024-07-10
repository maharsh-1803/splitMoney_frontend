import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
      <Routes>
        {token ? (
          <>
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<Home/>} />
          </>
        ) : (
          <>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
