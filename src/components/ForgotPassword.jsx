import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/auth/forgot-password",{
      email
    }).then(response => {
      if(response.data.status) {
        alert("Check you email for reset password link")
        navigate('/login')
      }
    }).catch(err => {
      alert("Error")
      console.log(err)
    })
  }

  return (
    <div className="sign-up-container">
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        autoComplete="off"
        placeholder="Email"   
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  </div>
  )
}

export default ForgotPassword