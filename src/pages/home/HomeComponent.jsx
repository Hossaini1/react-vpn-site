import "./home-component.scss";
import Sec1Component from "../../components/sec1/Sec1Component";
import Sec2Component from "../../components/sec2/Sec2Component";
import SectionComponent from "../../components/section-layout/SectionComponent";
import Sec3Component from "../../components/sec3/sec3Component";

const HomeComponent = () => {
  return (
    <>
 <Sec1Component />
 <Sec2Component />  

 <SectionComponent>
  <Sec3Component />
 </SectionComponent>

  </>
  );
};
export default HomeComponent;
