import "./sec1-component.scss";
import { LocationIcon, ServiceIcon, TickIcon, UsersIcon } from "../icons/Icons";
import hero1ImgPc from '../../assets/images/hero-img.svg';
import hero1ImgMobile from '../../assets/images/hero1-mobile.svg';
import hero2ImgPc from '../../assets/images/hero2-pc.svg';
import hero2ImgMobile from '../../assets/images/hero2-mobile.svg';


const Sec1Component = () => {
  return (
    <section className="">
      <div className="container sec1">
        <div className="heros">
          <div className="hero-content">
            <h2>
              Want anything to be <br /> easy with{" "}
              <span>
                <strong>LaslesVPN</strong>
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
              arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>
            <button className="btn-started">Get started</button>
          </div>
          <div className="hero-img">
            <picture>
              <source
                srcSet={hero1ImgPc}
                media="(min-width:586px)"
                alt="hero1-image"
              />
              <img src={hero1ImgMobile} alt="hero1-image" />
            </picture>
          </div>
        </div>

        <div className="over-content">
          <div className="inner-over-content">
            <div className="a">
              <span className="icon">
                <UsersIcon />
              </span>
              <div>
                <h3>90+</h3>
                <span>Users</span>
              </div>
            </div>

            <div className="b">
              <span className="icon">
                <LocationIcon />
              </span>
              <div>
                <h3>30+</h3>
                <span>Locations</span>
              </div>
            </div>

            <div className="c">
              <span className="icon">
                <ServiceIcon />
              </span>
              <div>
                <h3>50+</h3>
                <span>Services</span>
              </div>
            </div>
          </div>
        </div>

        <div className="heros2">
          <div className="heros2-img">
            <picture>
              <source
                srcSet={hero2ImgPc}
                media="(min-width: 576px)"
              />
              <img src={hero2ImgMobile} alt="hero2-image" />
            </picture>
          </div>

          <div className="heros2-content">
            <div className="inner-hero2-content">
              <h3>
                We provide many <br />
                features you can use
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
                arcu id purus ullamcorper. Vel vel erat semper augue.
              </p>
              <ul>
                <li>
                  <span>
                    <TickIcon />
                  </span>{" "}
                  <h4>Powerfull online protection.</h4>
                </li>
                <li>
                  <span>
                    <TickIcon />
                  </span>{" "}
                  <h4>Internet with borders</h4>
                </li>
                <li>
                  <span>
                    <TickIcon />
                  </span>{" "}
                  <h4>Internet with borders</h4>
                </li>
                <li>
                  <span>
                    <TickIcon />
                  </span>{" "}
                  <h4>No specific time limits</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sec1Component;
