import "./sec3-component.scss";
import vertorImgPc from '../../assets/images/Vector-pc.svg';
import vertorImgMobile from '../../assets/images/Victor-mobile.svg';
import sponseredImgPc from '../../assets/images/Sponsored-pc.svg';
import sponseredImgMobile from '../../assets/images/Sponsored-mobile.svg';

const Sec3Component = () => {
  return (
    <div className="inner-container">
      <div className="title-box">
        <h5>Huge global network of fast VPN</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>

      <div className="img1">
        <picture>
          <source
            srcSet={vertorImgPc}
            media="(min-width:678px)"
            alt="farmer-image-pc"
          />
          <img src={vertorImgMobile} alt="farmer-bild-mobile" />
        </picture>
      </div>

      <div className="img2">
        <picture>
          <source
            srcSet={sponseredImgPc}
            media="(min-width:678px)"
            alt="sponsered-company-image-pc"
          />
          <img
            src={sponseredImgMobile}
            alt="sponsered-company-image-pc"
          />
        </picture>
      </div>
    </div>
  );
};
export default Sec3Component;
