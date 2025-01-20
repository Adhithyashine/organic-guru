import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className="app">
      <ToastContainer />
      {token && <Navbar />}
      <hr />
      <div className="app-content">
        {token && <Sidebar />}
        <Routes>
          {!token ? (
            <Route path="*" element={<Login />} />
          ) : (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/add" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
