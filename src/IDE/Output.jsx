import React, { useState, useContext } from 'react'
import { Api } from './Api'
import ApiContext from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Output = () => {

  const naviagte = useNavigate()
  const { selectedlang, selectedver, codeValue } = useContext(ApiContext);

  const [outputValue, setOutputValue] = useState('');
  const handleOutput = async () => {
    try {
      const response = await Api(selectedlang, selectedver, codeValue);   // wait for API result
      const { run } = response;
      if (run.code == 0) {
        setOutputValue(run.stdout);
      } else if (run.code == 1) {
        setOutputValue(run.stderr);
      }
    } catch (error) {
      console.error("Error fetching API:", error);
      setOutputValue("Something went wrong!");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('Tokens');
    naviagte('/login')

  }
  return (
    <>
      <div
       className='output-main'
      >
        {/* Button Row */}
        <div className='btn-row'>
          <button
           className='runBtn'
            onClick={handleOutput}
          >
            Run Code
          </button>

          <button
           className='logoutBtn'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Output Box */}
        <div
          className='output-box'
        >
          {outputValue || "Output will appear here..."}
        </div>
      </div>

    </>
  )
}

export default Output
