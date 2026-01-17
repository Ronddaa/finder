import AdvantagesServices from "../../modules/Services/AdvantagesServices/AdvantagesServices";
import AntiwrinklesServices from "../../modules/Services/AntiwrinklesServices/AntiwrinklesServices";
import FaqServices from "../../modules/Services/FaqServices/FaqServices";
import HeroServices from "../../modules/Services/HeroServices/HeroServices";
import IndicationsServices from "../../modules/Services/IndicationsSevices/IndicationsServives";
import MyServices from "../../modules/Services/MyServices/MyServices";

export default function ServicesPage(){
    return (
      <>
        <HeroServices />
        <MyServices /> {/* /behandlungsangebote/kundenbewertung */} {/* /behandlungsangebote/akupunktur */}
        <AdvantagesServices /> {/* /behandlungsangebote/kundenbewertung */} {/* /behandlungsangebote/akupunktur */}
        <IndicationsServices /> {/* /behandlungsangebote/akupunktur */}
            <AntiwrinklesServices /> {/* /behandlungsangebote/regenerative */}
        <FaqServices />
      </>
    );
}