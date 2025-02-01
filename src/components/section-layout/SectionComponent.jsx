import './section-component.scss';
import PropTypes from 'prop-types';



const SectionComponent = ({children}) => {
  return (
    <section className='sec'>
        <div className="container">
          {children}  
        </div>
    </section>
  )
}
SectionComponent.propTypes = {
  children: PropTypes.node.isRequired,
};


export default SectionComponent;