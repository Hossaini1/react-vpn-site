import "./dopple-section-component.scss";
import PropTypes from "prop-types";
const DoppleSectionComponent = ({ children }) => {
  return (
    <section className="container">
      <div className="sec-layout">{children}</div>
    </section>
  );
};

DoppleSectionComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DoppleSectionComponent;
