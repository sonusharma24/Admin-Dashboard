import React from "react";
import "./style.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const index = () => {
  return (
    <div className="sidebar">
      {/* top */}
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      {/* center  */}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className="icon" />
            <span>Product</span>
          </li>
          <li>
            <SettingsPhoneIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <SsidChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodIcon className="icon" />
            <span>system Health</span>
          </li>

          <li>
            <SettingsBackupRestoreIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      {/* bottom */}
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};

export default index;
