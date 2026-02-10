import Code from "./IDE/Code"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from "./signup/Signup"
import Login from "./login/Login"
import { useState } from "react";
import RefreshHandler from "./RefreshHandler";
const App = () => {

  // const handlesubmit = () => {
  //   toast.success("HEllo buddy")
  // }
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoutes = ({ children }) => {
    return isAuthenticated ? children : <Navigate to='/login' />
  }


  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/" element={<Navigate to='login' />} />
        <Route path="/ide" element={
          <PrivateRoutes>
            <Code />
          </PrivateRoutes>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>

      <ToastContainer position='top-right' />
      {/* <button onClick={handlesubmit}>clickme</button> */}
    </>
  )
}

export default App