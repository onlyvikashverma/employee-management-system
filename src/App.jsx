import React, { useContext, useEffect ,useState} from 'react'
import Login from './components/Auth/Login.jsx'
import CreateAccount from './components/Auth/CreateAccount.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage} from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


const App = () => {
  
   
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)
  const [showLogin, setShowLogin] = useState(true)

 

  useEffect(() => {
    
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
        
      }
  
   
  }, [])
  


  const handleLogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role:'admin'}))
      
    }
    else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role:'employee',data:employee}))
        
      }
      

    }
    else{
      alert('Invalid credentials')
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
    setShowLogin(true) // Redirect to login
  }

  return (
    <>
    {!user ? (
      showLogin ? (
        <Login handleLogin={handleLogin} setShowLogin={setShowLogin} />
      ) : (
        <CreateAccount handleRegister={handleRegister} setShowLogin={setShowLogin} />
      )
    ) : ''}
    {user == 'admin' ? <AdminDashboard  changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}

    </>
    
  )
}

export default App