import React, { useState } from "react";
import "./User.css";
import SearchIcon from "@mui/icons-material/Search";
import Card from "./Card";
import Data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../slicer/AppSlicer";
const User = () => {
  const { data } = Data;
  const { searchData } = useSelector((store) => store.app);
  const [username, setName] = useState("");
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  function handleSubmit(event, name) {
    event.preventDefault();
    setSearch(true);
    dispatch(searchUser(name));
  }
  return (
    <div className="container">
      <div className="main-container">
        <form onSubmit={(e) => handleSubmit(e, username)}>
          <input
            type="text"
            placeholder="Search with name"
            className="search-input"
            onChange={(e) => setName(e.target.value)}
            value={username}
          />
          <button className="search-btn">
            <SearchIcon sx={{ color: "#FFFFFFB3" }} />
          </button>
        </form>
        <div className="view">
          {search ? (
            <>
              {searchData ? (
                <Card data={searchData} key={searchData.id} />
              ) : (
                <p className="info-text">NO USER DATA FOUND</p>
              )}
            </>
          ) : (
            data.map((list) => <Card data={list} key={list.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
