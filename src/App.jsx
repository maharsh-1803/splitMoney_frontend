import './App.css';
import CreateGroup from './components/CreateGroup';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/signup';
import UserDisplay from './components/UserDisplay';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
      <Routes>
        {token ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/User" element={<Home><UserDisplay /></Home>} />
            <Route path="/createGroup" element={<Home><CreateGroup/></Home>}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
