import React from "react";
import {NavLink} from "react-router";

const Navber = () => {
  return (
    <div className="navbar backdrop-blur-xl bg-white/30 z-50 fixed px-24 ">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink
              className={({isActive}) =>
                ` ${isActive ? " text-warning" : "hover:text-warning"} `
              }
              to="/">
              Home
            </NavLink>
            <NavLink
              className={({isActive}) =>
                ` ${isActive ? " text-warning" : "hover:text-warning"} `
              }
              to="/coffees">
              Coffees
            </NavLink>
            <NavLink
              className={({isActive}) =>
                ` ${isActive ? " text-warning" : "hover:text-warning"} `
              }
              to="/dashboard">
              Dashboard
            </NavLink>
          </ul>
        </div>
        <NavLink to="/" className="">
          Coofee_Book
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            className={({isActive}) =>
              ` ${isActive ? " text-warning" : "hover:text-warning"} `
            }
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({isActive}) =>
              ` ${isActive ? " text-warning" : "hover:text-warning"} `
            }
            to="/coffees">
            Coffees
          </NavLink>
          <NavLink
            className={({isActive}) =>
              ` ${isActive ? " text-warning" : "hover:text-warning"} `
            }
            to="/dashboard">
            Dashboard
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
