import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../../style/admin/main.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios({
      method: 'post',
      url: 'http://localhost:3000/user/login',
      data: {
        email: email,
        password: password
      }
    })
    .then((res) => {
      if(res.data.token) {
        localStorage.setItem('token', res.data.token)
        if(res.data.role === 'admin') {
          navigate("/admin/dashboard")
        }
      }
    })
  }

  return (
    <>
    <main className="login-box">
      <p className="title-box">Admin Dashboard</p>
      <img className="logo-text" src="/assets/tokopaedi-logo-with-text.png" alt="tokopaedi-logo-with-text" />
      <div className="slogan-line">
          <p className="slogan-text">SPORT AS YOUR LIFE</p>
      </div>
      <form onSubmit={handleSubmitLogin} className="form-login" action="/src/page/performance-page.html" method="post">
          <div className="form-goup">
              <input className="email" type="email" name="email" placeholder="Email *" value={email} onChange={handleEmail} required />
              <br />
              <input className="password" type="password" name="password" placeholder="Password *" value={password} onChange={handlePassword} required />
          </div>
          <button className="login" type='submit'>Login</button>
      </form>
    </main>
    </>
  )
}

export default Login