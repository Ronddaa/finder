import FaqServices from "../../modules/Services/FaqServices/FaqServices";
import HeroServices from "../../modules/Services/HeroServices/HeroServices";

export default function ServicesPage(){
    return (
        <>
            <HeroServices />
            <FaqServices />
        </>
    )
}