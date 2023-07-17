import React from "react";
import "./style.scss";
import SideBar from "../../components/sidebar/index";

const index = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">container</div>
    </div>
  );
};

export default index;
