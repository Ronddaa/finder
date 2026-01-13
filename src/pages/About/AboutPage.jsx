import Reviews from "../../components/Reviews/Reviews"
import EducationAbout from "../../modules/About/EducationAbout/EducationAbout"
import HeroAbout from "../../modules/About/HeroAbout/HeroAbout"
import MeAbout from "../../modules/About/MeAbout/MeAbout"

export default function AboutPage() {
    return (
        <>
            <HeroAbout />
            <MeAbout />
            <EducationAbout />
            <Reviews />
        </>
    )
}