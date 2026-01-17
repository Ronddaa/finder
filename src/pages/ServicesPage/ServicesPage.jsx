import AdvantagesServices from "../../modules/Services/AdvantagesServices/AdvantagesServices";
import FaqServices from "../../modules/Services/FaqServices/FaqServices";
import HeroServices from "../../modules/Services/HeroServices/HeroServices";
import MyServices from "../../modules/Services/MyServices/MyServices";

export default function ServicesPage(){
    return (
      <>
        <HeroServices />
        <MyServices /> {/* /behandlungsangebote/kundenbewertung */}
        <AdvantagesServices /> {/* /behandlungsangebote/kundenbewertung */}
        <FaqServices />
      </>
    );
}