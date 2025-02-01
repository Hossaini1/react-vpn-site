import { NavLink } from "react-router-dom";
import LogoComponent from "../logo-component/LogoComponent";
import "./footer-component.scss";
import { EmailIcon, MapIcon, TelIcon } from "../icons/Icons";

const FooterComponent = () => {
  return (
    <footer className="footer1">
      <div className="footer-box-left">
        <LogoComponent />
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <div className="socialmedia">
          <span>
            <EmailIcon />
          </span>
          <span>
            <TelIcon />
          </span>
          <span>
            <MapIcon />
          </span>
        </div>
      </div>

      <div className="footer-box-right">
        <div>
          <h6>Product</h6>
          <ul>
            <li>
              <NavLink to="/">Download</NavLink>
            </li>
            <li>
              <NavLink to="/">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/">Locations</NavLink>
            </li>
            <li>
              <NavLink to="/">Server</NavLink>
            </li>
            <li>
              <NavLink to="/">Countries</NavLink>
            </li>
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h6>Engage</h6>
          <ul>
            <li>
              <NavLink to="/">LaslesVPN?</NavLink>
            </li>
            <li>
              <NavLink to="/">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/">Tutorials</NavLink>
            </li>
            <li>
              <NavLink to="/">About us</NavLink>
            </li>
            <li>
              <NavLink to="/">Privacy policy</NavLink>
            </li>
            <li>
              <NavLink to="/">Terms of service</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h6>Earn money</h6>
          <ul>
            <li>
              <NavLink to="/">Become partner</NavLink>
            </li>
            <li>
              <NavLink to="/">Affilite</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
