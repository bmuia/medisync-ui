import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Unauthorized from './pages/Unathorized';
import Doctor from './pages/Dashboard/doctor/Doctor';
import Admin from './pages/Dashboard/admin/Admin';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const isAuthenticated = !!localStorage.getItem('access');
  const userRole = localStorage.getItem('role');

  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to={userRole === 'admin' ? '/admin' : '/doctor'} replace />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Private Routes */}
          <Route
            path="/doctor"
            element={
              <PrivateRoute allowedRoles={['doctor', 'admin']}>
                <Doctor />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
