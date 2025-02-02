import "./logo-component.scss";
import { NavLink } from "react-router-dom";
import imgLogo from '../../assets/images/logo.svg';



const LogoComponent = () => {
  return (
    <>
      <NavLink to="/" className="logo-box">
        <img src={imgLogo} alt="logo" />
        <h1>
          Lates<span>VPN</span>
        </h1>
      </NavLink>
    </>
  );
};
export default LogoComponent;
