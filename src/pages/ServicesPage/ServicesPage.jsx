import { useLocation } from "react-router-dom";
import AdvantagesServices from "../../modules/Services/AdvantagesServices/AdvantagesServices";
import AntiwrinklesServices from "../../modules/Services/AntiwrinklesServices/AntiwrinklesServices";
import FaqServices from "../../modules/Services/FaqServices/FaqServices";
import HeroServices from "../../modules/Services/HeroServices/HeroServices";
import IndicationsServices from "../../modules/Services/IndicationsSevices/IndicationsServives";
import MyServices from "../../modules/Services/MyServices/MyServices";
import OfferServices from "../../modules/Services/OfferServices/OfferServices";

// СХЕМА: какой контент показывать на каком роуте
const PAGE_CONFIG = {
  "/behandlungsangebote/regenerative": [
    HeroServices,
    AntiwrinklesServices,
    OfferServices,
    FaqServices,
  ],
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
