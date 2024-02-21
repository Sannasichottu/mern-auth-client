import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {LoginSocialGoogle} from 'reactjs-social-login';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={{marginBottom:"10px"}} type="submit">Login</button>
        
        <Link to="/forgotPassword">Forgot Password?</Link>
        <p>
          Don't Have Account? <Link to="/signup">Sign Up</Link>
        </p>
        <div className="flex items-center mt-10 justiofy-between p-10" >

        <div className="">
          <LoginSocialGoogle 
          client_id="1075694477544-j18h2clf56ec0o3s8lv4k5c756e0nf7a.apps.googleusercontent.com"
          access_type="offline"
          onResolve={({provider,data}) => {
            console.log(provider,data)
          }}
          onReject={(err) => {
            console.log(err)
          }}>
              <Link>Google</Link>
        </LoginSocialGoogle>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Login;
