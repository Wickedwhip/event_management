import React, { useState } from "react";
import LoginPage from "./components/admin/LoginPage";
import AdminLayout from "./components/admin/AdminLayout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <>
      {isAuthenticated ? (
        <AdminLayout onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
