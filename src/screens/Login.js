import React, { useState } from "react";
import logo from "../assets/Page 1/Group 3.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = [{ id: 1, email: "test@email.com", password: "123456" }];
  function handleLogin() {
    if (!email || !password) return alert("Enter the Email or Password");
    let find = users.find((list) => email === list.email);
    if (find) {
      if (password == find.password) {
        nav("/login/home");
      } else {
        alert("Enter the Correct Password");
      }
    } else {
      alert("Enter a valid Email");
    }
  }
  return (
    <div className="outside">
      <div className="container">
        <div className="login-screen d-flex align-center justify-center f-dir">
          <img src={logo} alt="logo" />
          <p className="logo-text">#We are Electric</p>
          <input
            type="text"
            placeholder="E-mail"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <button className="forgot-link">Forgot Password?</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
