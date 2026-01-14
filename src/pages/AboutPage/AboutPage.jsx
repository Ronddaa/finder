import Reviews from "../../components/Reviews/Reviews"
import BenefistAbout from "../../modules/About/BenefitsAbout/BenefistAbout"
import EducationAbout from "../../modules/About/EducationAbout/EducationAbout"
import HeroAbout from "../../modules/About/HeroAbout/HeroAbout"
import MeAbout from "../../modules/About/MeAbout/MeAbout"
import MembershipAbout from "../../modules/About/MembershipsAbout/MembershipAbout"

export default function AboutPage() {
    return (
        <>
            <HeroAbout />
            <MeAbout />
            <EducationAbout />
            <MembershipAbout />
            <BenefistAbout />
            <Reviews />
        </>
    )
}