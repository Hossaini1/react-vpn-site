import "./abo-models.scss";
import { TickIcon } from "../icons/Icons";
import useAboBewertungContext from "../../store/AboBewertungContext";

const AboModelComponent = () => {
  const { abos } = useAboBewertungContext();

  return (
    <div className="slider-container">
      <div className="slider-box">
        <div className="slider-container">
          {abos.map((abo) => (
            <div key={abo.id} className="abo-container">
              <div className="inner-img-option-box">
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
                <h5>
                  {abo.price}{" "}
                  <span> {abo.duration ? `/ ${abo.duration}` : ""}</span>
                </h5>
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
