import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { ReactComponent as Logo } from "../assets/vectors/logo.svg";
import { ReactComponent as LogoutIcon } from "../assets/vectors/logout.svg";

import { SidebarData } from "./SidebarData";
import { checkRole, handle_logout } from "../utils/auth-util";
import UserContext from "context/UserContext";
const UserMenu = ({ location }: any) => {
  const [sidebar, setSidebar] = React.useState(false);
  const { userInfo } = React.useContext(UserContext);

  const showSidebar = () => setSidebar(!sidebar);
  const hideInLocation = [
    "/login",
    "/forgot-password",
    "/desk",
    "/signup/admin",
    "/confirm-password"
  ];

  return (
    <div className="hide-on-print">
      <div
        className={`"" ${
          hideInLocation.includes(location.pathname) && "hide-nav"
        }`}
      >
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="#" className="menu-bars">
            <Logo width={130} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-menu-list nav-menu_logo">
              <Logo width={130} />
            </li>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="nav-menu-spacer">
              {SidebarData.map((item, index) => {
                return (
                  item?.role?.includes(checkRole(userInfo.groups)) && (
                    <li
                      key={index}
                      className={`${item.cName} ${
                        item.paths.includes(location.pathname) && "menu-path"
                      }`}
                    >
                      <Link to={item.path}>
                        {item.icon}
                        <span className="menu-span">{item.title}</span>
                      </Link>
                    </li>
                  )
                );
              })}

              <li
                className="nav-text false cursor logout-menu"
                onClick={handle_logout}
              >
                <a>
                  <LogoutIcon />
                  <span className="menu-span">Logout</span>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(UserMenu);
