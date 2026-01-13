import { useLocation } from "react-router-dom";
import styles from "./HeroAbout.module.css";

// Импорты картинок
import HeroAboutIMG_1 from "./HeroAboutIMG_1.avif";
import HeroAboutIMG_2 from "./HeroAboutIMG_2.avif";
import HeroAboutLow_1 from "./HeroAboutLow_1.avif";
import HeroAboutLow_2 from "./HeroAboutLow_2.avif";

import useIsDesktop from "../../../hooks/useIsDesktop";

export default function HeroAbout() {
    const isDesktop = useIsDesktop(1024)
  const location = useLocation();

  // Объект с контентом для разных путей
  const contentMap = {
    "/about": {
      title: "Dr. med. univ. Sviatlana Fineder",
      text: "Ihre Ärztin für Allgemeinmedizin und Akupunktur – ist Ihre erfahrene Ansprechpartnerin in allen Fragen rund um Gesundheit.",
      mainImg: HeroAboutIMG_1,
      lowImg: HeroAboutLow_1,
    },
    "/about/kundenbewertung": {
      title: "Kundenbewertung",
      text: "Das sagen Patienten, welche die Dienste von Fr. Dr. Fineder in Ihrer Ordination in Anspruch genommen haben.",
      mainImg: HeroAboutIMG_2,
      lowImg: HeroAboutLow_2,
    },
  };

  // Берем данные в зависимости от пути, если пути нет в списке - берем дефолтный "/about"
  const currentContent = contentMap[location.pathname] || contentMap["/about"];

  return (
    <section className={styles.heroAbout}>
      <div className={`container ${styles.heroAboutContent}`}>
        <article className={styles.wrapperAboutInfo}>
          <ul className={styles.info}>
            <li>
              <h1 className={styles.title}>{currentContent.title}</h1>
            </li>
            <li>
              <p className={styles.text}>{currentContent.text}</p>
            </li>
          </ul>
          {isDesktop && (<img className={styles.lowImg} src={currentContent.lowImg} alt="Decoration" />)}
        </article>
        <img className={styles.mainImg} src={currentContent.mainImg} alt="Doctor" />
      </div>
    </section>
  );
}
