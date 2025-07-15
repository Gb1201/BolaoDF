import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup"; 
import CreateUser from "./pages/CreateUser"; // importe aqui

const App: React.FC = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/create-user"
          element={isLoggedIn ? <CreateUser /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;



