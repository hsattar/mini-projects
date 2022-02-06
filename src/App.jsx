import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./components/Index"
import Register from "./components/Register"
import Login from "./components/Login"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={ <PrivateRoute><Index /></PrivateRoute> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/login' element={ <Login /> }/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}