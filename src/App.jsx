import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import EmployeeForm from './pages/EmployeeForm'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            👥 EmployeeHub
          </Link>

          <div className="navbar-nav ms-auto">
            <Link className="nav-link px-3" to="/">
              🏠 Home
            </Link>

            <Link className="nav-link px-3" to="/employee-form">
              ➕ Employee Form
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App