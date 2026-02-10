import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const RefreshHandler = ({ setIsAuthenticated }) => {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('Tokens')) {
      setIsAuthenticated(true);
      if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login') {
        navigate('/ide',{replace:false})
      }
    }
  }, [location,navigate,setIsAuthenticated])


  return (
    null
  )
}

export default RefreshHandler
