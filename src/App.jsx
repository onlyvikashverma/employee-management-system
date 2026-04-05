import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import RoleSelection from './components/Auth/RoleSelection.jsx'
import AdminLogin from './components/Auth/AdminLogin.jsx'
import EmployeeLogin from './components/Auth/EmployeeLogin.jsx'
import CreateAccount from './components/Auth/CreateAccount.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (role, email, password) => {
    if (role === 'admin') {
      if (email === 'admin@me.com' && password === '123') {
        setUser('admin')
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }))
        navigate('/admin-dashboard')
      } else {
        alert('Invalid admin credentials')
      }
    } else if (role === 'employee') {
      if (userData) {
        const employee = userData.find((e) => email === e.email && e.password === password)
        if (employee) {
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }))
          navigate('/employee-dashboard')
        } else {
          alert('Invalid employee credentials')
        }
      }
    }
  }

  const handleRegister = (firstName, email, password) => {
    const newEmployee = {
      id: Date.now(),
      firstName: firstName,
      email: email,
      password: password,
      taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: [],
    }

    const { employees } = getLocalStorage()
    const updatedEmployees = employees ? [...employees, newEmployee] : [newEmployee]

    localStorage.setItem("employees", JSON.stringify(updatedEmployees))
    SetUserData(updatedEmployees)

    alert("Account created successfully! Please login.")
    navigate('/employee-login')
  }

  const updateTaskStatus = (taskTitle, newStatus) => {
    const newUserData = userData.map(emp => {
      if (emp.email === loggedInUserData.email) {
        const updatedTasks = emp.tasks.map(t => {
          if (t.title === taskTitle) {
            return {
              ...t,
              active: false,
              newTask: false,
              completed: newStatus === 'completed',
              failed: newStatus === 'failed'
            };
          }
          return t;
        });

        const counts = { active: 0, newTask: 0, completed: 0, failed: 0 };
        updatedTasks.forEach(t => {
          if (t.active) counts.active++;
          if (t.newTask) counts.newTask++;
          if (t.completed) counts.completed++;
          if (t.failed) counts.failed++;
        });

        const newEmp = { ...emp, tasks: updatedTasks, taskCounts: counts };
        setLoggedInUserData(newEmp);
        return newEmp;
      }
      return emp;
    });

    SetUserData(newUserData);
    localStorage.setItem('employees', JSON.stringify(newUserData));
  };

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to={`/${user}-dashboard`} /> : <RoleSelection />} />
      <Route path="/admin-login" element={<AdminLogin handleLogin={(e, p) => handleLogin('admin', e, p)} />} />
      <Route path="/employee-login" element={<EmployeeLogin handleLogin={(e, p) => handleLogin('employee', e, p)} />} />
      <Route path="/register" element={<CreateAccount handleRegister={handleRegister} setShowLogin={() => navigate('/employee-login')} />} />
      
      <Route 
        path="/admin-dashboard" 
        element={user === 'admin' ? <AdminDashboard changeUser={setUser} /> : <Navigate to="/admin-login" />} 
      />
      
      <Route 
        path="/employee-dashboard" 
        element={user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} updateTaskStatus={updateTaskStatus} /> : <Navigate to="/employee-login" />} 
      />
    </Routes>
  )
}

export default App