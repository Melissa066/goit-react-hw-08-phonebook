// src/Routes.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import Navigation from './components/Navigation';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={isAuthenticated ? <Contacts /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/contacts" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
