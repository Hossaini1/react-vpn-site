import "./logo-component.scss";
import { NavLink } from "react-router-dom";


const LogoComponent = () => {
  return (
    <>
      <NavLink to="/" className="logo-box">
        <img src="./assets/images/logo.svg" alt="logo" />
        <h1>
          Lates<span>VPN</span>
        </h1>
      </NavLink>
    </>
  );
};
export default LogoComponent;
