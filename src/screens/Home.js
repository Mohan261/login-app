import React from "react";
import "./Home.css";
import user from "../assets/Page 1/Group 46.png";
import logo from "../assets/Page 1/moptro logo-3.png";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import User from "../components/User";
import { useSelector } from "react-redux";
const Home = () => {
  const { home } = useSelector((store) => store.app);

  return (
    <div className="outside">
      <div className="container">
        <div className="home-logo">
          <img src={user} alt="user" className="user" />
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
            <div className="num">4</div>
          </div>
        </div>
      </div>
      <div className="switch-tab">{home ? <Dashboard /> : <User />}</div>
      <Footer />
    </div>
  );
};

export default Home;
