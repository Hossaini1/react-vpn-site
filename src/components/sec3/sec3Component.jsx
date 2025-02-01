import "./sec3-component.scss";

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
            srcSet="src/assets/images/Vector-pc.svg"
            media="(min-width:678px)"
            alt="farmer-image-pc"
          />
          <img src="src/assets/images/Vector-pc.svg" alt="farmer-bild-mobile" />
        </picture>
      </div>

      <div className="img2">
        <picture>
          <source
            srcSet="src/assets/images/Sponsored-pc.svg"
            media="(min-width:678px)"
            alt="sponsered-company-image-pc"
          />
          <img
            src="src/assets/images/Sponsored-mobile.svg"
            alt="sponsered-company-image-pc"
          />
        </picture>
      </div>
    </div>
  );
};
export default Sec3Component;
