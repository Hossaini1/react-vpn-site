import './sec2-component.scss';
import AboModelComponent from "../../../components/abo-models/AboModelComponent";

const Sec2Component = () => {
  return (
    <section className="sec2">
      <div className="container">
        <div className="text-content">
          <h4>Choose your plan</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id <br /> purus ullamcorper. Vel vel erat semper augue.
          </p>
        </div>

     <AboModelComponent />
      </div>
    </section>
  );
};
export default Sec2Component;
