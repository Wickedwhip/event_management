import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import AdminLayout from './components/admin/AdminLayout'
import LoginPage from './components/admin/LoginPage'
import EventsList from './components/admin/Events/EventsList'
import EmployeesList from './components/admin/Employees/EmployeesList'
import TicketsList from './components/admin/Tickets/TicketsList'
import UsersOverview from './components/admin/Users/UsersOverview'
import ReportsPage from './components/admin/Reports/ReportsPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <Router>
      <div className="App">
        <AdminLayout onLogout={() => setIsLoggedIn(false)}>
          <Routes>
            <Route path="/" element={<EventsList />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/employees" element={<EmployeesList />} />
            <Route path="/tickets" element={<TicketsList />} />
            <Route path="/users" element={<UsersOverview />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </AdminLayout>
      </div>
    </Router>
  )
}

export default App