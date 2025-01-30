import "./abo-models.scss";
import { TickIcon } from "../icons/Icons";

const AboModelComponent = () => {
  const abos = [
    {
      id: 1,
      imagePc: "src/assets/images/abo.svg",
      imageMobile: "src/assets/images/abo-mobile.svg",

      title: "Free",
      options: [
        "Unlimited bandwitch",
        "Encrypted connection ",
        "Encrypted connection",
      ],
      price: "Free",
      btn: "Select",
    },
    {
      id: 2,
      imagePc: "src/assets/images/abo.svg",
      imageMobile: "src/assets/images/abo-mobile.svg",

      title: "Standard plan",
      options: [
        "Unlimited bandwitch",
        "Encrypted connection ",
        "Yes trafic logs ",
        "Works on all devices",
        "Connect anyware",
      ],
      price: "$ 9",
      duration:'mo',
      btn: "Select",
    },
    {
      id: 3,
      imagePc: "src/assets/images/abo.svg",
      imageMobile: "src/assets/images/abo-mobile.svg",
      title: "Premium plan",
      options: [
        "Unlimited bandwitch",
        "Encrypted connection ",
        "Yes trafic logs",
        "Works on all devices",
        "Connect anyware",
        "Get new features",
      ],
      price: "$ 12",
      duration:'mo',
      btn: "Select",
    },
  ];

  return (
    <div className="slider-container">
      <div className="slider-box">
        <div className="slider-container">
        {abos.map((abo) => (
          <div key={abo.id} className="abo-container">
            <div className="inner-img-option-box" >
              <div className="abo-img-box">
                <picture>
                  <source
                    srcSet={abo.imagePc}
                    media="(min-width: 678px )"
                    alt={abo.title}
                  />
                  <img src={abo.imageMobile} alt={abo.title} />
                </picture>
                <h5> {abo.title} </h5>
              </div>
              <ul>
                {abo.options.map((option, index) => (
                  <li key={index}>
                    <span className="icon">
                      <TickIcon />
                    </span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="abo-footer">
              <h5>{abo.price} <span> {abo.duration ? `/ ${abo.duration}`:''}</span></h5>
              <button className="btn-select">{abo.btn}</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default AboModelComponent;
