import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './login.css'
import { toast } from 'react-toastify'

const Login = () => {

  const navigate = useNavigate();
  const [login,setLogin] = useState({
    email:'',
    password:''
  })

  const handleLogin = async(e) =>{
      e.preventDefault();
      // console.log(login.email,login.password)

      try {
        const url = 'https://deploy-backend-codepen.vercel.app/auth/login';

        const res = await fetch(url,{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(login)
        })

        const result = await res.json();
        // console.log(result);

        const {success,message,error,jwtToken} = result

        if(success){
          toast.success(message);
          localStorage.setItem('Tokens',jwtToken);
          navigate('/ide');
        }else if(error){
          toast.error(error.details[0].message)
        }else if(!success){
          toast.error(message);
        }


        
      } catch (error) {
        // console.log(error)
        toast.error("Internal server error:",error)
      }
    }
  return (

    
    <>
      <div className="login">
        <form onSubmit={handleLogin}>
          <h3>Login Page</h3>

          <label htmlFor="email">Email:</label>
          <input type="email" name='email' placeholder='Enter your email..' value={login.email} onChange={(e) => setLogin({...login,email:e.target.value})} />

          <label htmlFor="password">Password:</label>
          <input type="password" name='password' placeholder='Enter Password..' value={login.password} onChange={(e) => setLogin({...login,password:e.target.value})} />

          <button type='submit'>Login</button>

          <Link to='/signup'>
            Dont have account?SignUp here
          </Link>
        </form>
      </div>
    </>
  )
}

export default Login
