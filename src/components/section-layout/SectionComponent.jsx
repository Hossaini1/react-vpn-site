import './section-component.scss';



const SectionComponent = ({children}) => {
  return (
    <section className='sec'>
        <div className="container">
          {children}  
        </div>
    </section>
  )
}

export default SectionComponent;