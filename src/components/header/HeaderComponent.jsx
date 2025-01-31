import "./header-component.scss";
import { BurgerMenuIcon } from "../icons/Icons";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoComponent from "../logo-component/LogoComponent";


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
          <LogoComponent />
          {/* <NavLink to="/" className="logo-box">
            <img src="src/assets/images/logo.svg" alt="logo" />
            <h1>
              Lates<span>VPN</span>
            </h1>
          </NavLink> */}

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
              <button ><NavLink className="sign-in-btn" to="/">Sign in</NavLink></button>
              <button ><NavLink className="sign-up-btn" to="/signup">Sign up</NavLink></button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default HeaderComponent;
