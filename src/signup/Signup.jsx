import React, { useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Signup = () => {
    const navigate = useNavigate();
    const [signup, setSignUp] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(signup.name, signup.email, signup.password);

        try {
            const url = 'https://deploy-backend-codepen.vercel.app/auth/signup';
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(signup)
            });

            const resultData = await res.json();
            // console.log(resultData);

            const { error, success, message } = resultData;

          if (success) {
                toast.success(message);
                navigate('/login');
            } else if (error) {
                const detailMsg = error.details[0].message;
                toast.error(detailMsg)
            }
            //this !success is for email should always unique
            else if (!success) {
                toast.error(message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try again.",error);
        }
    };

    return (
        <>
            <div className='signup'>
                <form onSubmit={handleSubmit}>
                    <h3>SignUp Page</h3>

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder='Enter your name..' value={signup.name} onChange={(e) => setSignUp({ ...signup, name: e.target.value })} />


                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder='Enter your email..' value={signup.email} onChange={(e) => setSignUp({ ...signup, email: e.target.value })} />


                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder='Enter your password..' value={signup.password} onChange={(e) => setSignUp({ ...signup, password: e.target.value })} />

                    <button type='submit'>SignUp</button>
                    <Link to="/login">
                        Already Sign up?Login here
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Signup
