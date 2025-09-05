
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import LoginPage from "./components/admin/LoginPage";

export default function App() {
  const [user, setUser] = useState(null); // mock auth

  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<LoginPage onLogin={(u)=>setUser(u)} />} />
        <Route path="/admin/*" element={user ? <AdminLayout onLogout={()=>setUser(null)} /> : <Navigate to="/admin/login" />} />
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>
    </Router>
  );
}
