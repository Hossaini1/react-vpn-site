import "./home-component.scss";
import Sec1Component from "../../components/sec1/Sec1Component";
import Sec2Component from "../../components/sec2/Sec2Component";
import SectionComponent from "../../components/section-layout/SectionComponent";
import Sec3Component from "../../components/sec3/sec3Component";
import DoppleSectionComponent from "../../components/dopple-section-layout/DoppleSectionComponent";
import Sec4Component from "../../components/sec4/Sec4Component";
import OverSec2Component from "../../components/over-section2/OverSec2Component";
import FooterComponent from "../../components/footer/FooterComponent";

const HomeComponent = () => {
  return (
    <>
 <Sec1Component />
 <Sec2Component />  

 <SectionComponent>
  <Sec3Component />
 </SectionComponent>

 <DoppleSectionComponent>
  <Sec4Component />
  <OverSec2Component />
  <FooterComponent />
 </DoppleSectionComponent>

  </>
  );
};
export default HomeComponent;
