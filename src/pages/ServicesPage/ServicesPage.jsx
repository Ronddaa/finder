import { useLocation } from "react-router-dom";
import AdvantagesServices from "../../modules/Services/AdvantagesServices/AdvantagesServices";
import AntiwrinklesServices from "../../modules/Services/AntiwrinklesServices/AntiwrinklesServices";
import FaqServices from "../../modules/Services/FaqServices/FaqServices";
import HeroServices from "../../modules/Services/HeroServices/HeroServices";
import IndicationsServices from "../../modules/Services/IndicationsSevices/IndicationsServives";
import MyServices from "../../modules/Services/MyServices/MyServices";
import OfferServices from "../../modules/Services/OfferServices/OfferServices";
import InformationServices from "../../modules/Services/InformationServices/InformationServices";
import ContraindicationsServices from "../../modules/Services/ContraindicationsServices/ContraindicationsServices";
import RecommendationsServices from "../../modules/Services/RecommendationsSrvices/RecommendationsServices";
import CombinationServices from "../../modules/Services/CombinationServices/CombinationServices";
import BenefistAbout from "../../modules/About/BenefitsAbout/BenefistAbout";
import YouthfulnessServices from "../../modules/Services/YouthfulnessServices/YouthfulnessServices";

// СХЕМА: какой контент показывать на каком роуте
const PAGE_CONFIG = {
  "/behandlungsangebote/kundenbewertung": [
    HeroServices,
    MyServices,
    AdvantagesServices,
    FaqServices,
  ],
  "/behandlungsangebote/akupunktur": [
    HeroServices,
    IndicationsServices,
    AdvantagesServices,
    FaqServices,
  ],
  "/behandlungsangebote/regenerative": [
    HeroServices,
    InformationServices,
    AntiwrinklesServices,
    OfferServices,
    FaqServices,
    ],
    "/behandlungsangebote/regenerative/botox": [
        HeroServices,
        InformationServices,
        ContraindicationsServices,
        RecommendationsServices,
        CombinationServices,
        AdvantagesServices,
        FaqServices
    ],
    "/behandlungsangebote/regenerative/hyaluron": [
        HeroServices,
        YouthfulnessServices,
        BenefistAbout,
        FaqServices
    ]
};

export default function ServicesPage() {
  const { pathname } = useLocation();

  // Получаем массив компонентов для текущего пути, либо пустой массив
  const ComponentsToRender = PAGE_CONFIG[pathname] || [
    HeroServices,
    FaqServices,
  ];

  return (
    <>
      {ComponentsToRender.map((Component, index) => (
        <Component key={`${pathname}-${index}`} />
      ))}
    </>
  );
}
