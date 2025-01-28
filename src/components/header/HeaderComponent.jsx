import { useEffect, useState } from "react";
import { BurgerMenuIcon } from "../icons/Icons";
import "./header-component.scss";

import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="primary-header">
      <div className="container">
        <nav>
          <NavLink to="/" className="logo-box">
            <img src="src\assets\images\logo.svg" alt="" />
            <h1>
              Lates<span>VPN</span>
            </h1>
          </NavLink>

          <span onClick={() => toggleMenu()} className="burger-menu">
            <BurgerMenuIcon />
          </span>

          <div className={`nav-menu ${toggle ? "show-menu" : ""}`}>
            <ul>
              <li>
                <NavLink to="/">Features</NavLink>
              </li>
              <li>
                <NavLink to="/">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/">Testimonial</NavLink>
              </li>
              <li>
                <NavLink to="/">Help</NavLink>
              </li>
            </ul>

            <div className="login-box">
              <button>Sign in</button>
              <button className="sign-up-btn">Sign up</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default HeaderComponent;
