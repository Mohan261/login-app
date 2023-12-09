import React from "react";
import "./Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { changeHome } from "../slicer/AppSlicer";
const Footer = () => {
  const dispatch = useDispatch();
  const { home } = useSelector((store) => store.app);
  return (
    <div className="footer">
      <div className="footer-in">
        <button
          className={`${home ? "active" : ""} nav-btn`}
          onClick={() => dispatch(changeHome())}
        >
          <HomeIcon sx={{ color: "#36A546" }} />
        </button>
        <button
          className={`${home ? "" : "active"} nav-btn`}
          onClick={() => dispatch(changeHome())}
        >
          <PersonIcon sx={{ color: "#36A546" }} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
