import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/vite.svg";
import sprite from "../../icons.svg";
import useIsDesktop from "../../hooks/useIsDesktop.js";
import NavigationHeader from "../NavigatinHeader/NavigationHeader.jsx";

export default function Header() {
  const isDesktop = useIsDesktop(1024);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    let nextState = isScrolled;

    if (latest > previous && latest > 100) {
      nextState = true;
    } else if (latest < previous || latest < 50) {
      nextState = false;
    }

    if (nextState !== isScrolled) {
      setIsScrolled(nextState);
    }
  });

  return (
    // Убрали initial/animate, чтобы избежать скачка при загрузке
    <header
      className={styles.header}
    >
      <div className={`container ${styles.headerContent}`}>
        {/* 1. ЛОГОТИП */}
        <div className={styles.wrapperLogo}>
          <a href="/">
            <motion.img
              className={styles.logo}
              src={logo}
              alt="Venera Medical Logo"
              // Анимируем только ширину
              animate={{
                width: isScrolled ? 57 : isDesktop ? 107 : 57
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </a>
          <div className={styles.wrapperLogoDescription}>
            <span className={styles.logoDH}>Venera Medical</span>
            <span className={styles.logoDL}>Wahlärztin in 1230 Wien</span>
          </div>
        </div>

        {/* 2. КОНТАКТЫ (Desktop) — теперь управляются через CSS для скорости */}
        <ul
          className={`${styles.wrapperContactLinks} ${
            isDesktop ? styles.visible : ""
          }`}
        >
          <li>
            <a className={styles.headerContactLink} href="tel:+436767445330">
              <svg className={styles.contactIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-phone`}></use>
              </svg>
              {isDesktop && "+436767445330"}
            </a>
          </li>
          <li>
            <a
              className={styles.headerContactLink}
              href="mailto:info@dr-fineder.at"
            >
              <svg className={styles.contactIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-mail`}></use>
              </svg>
              {isDesktop && "info@dr-fineder.at"}
            </a>
          </li>
          <li>
            <a className={styles.headerContactLink} href="#">
              <svg className={styles.contactIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-facebook`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a className={styles.headerContactLink} href="#">
              <svg className={styles.contactIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-instagram`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a className={styles.headerContactLink} href="#">
              <svg className={styles.contactIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-telegram`}></use>
              </svg>
            </a>
          </li>
        </ul>

        {/* 3. КНОПКА (Всегда на месте) */}
        <a
          href="https://patient.latido.at/booking/select"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headerBtn}
        >
          Termin buchen
        </a>

        {/* 4. БУРГЕР (Mobile) */}
        {!isDesktop && (
          <div className={styles.wrapperBurgerMenu}>
            <svg className={styles.burgerIcon} width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-burger`}></use>
            </svg>
          </div>
        )}
      </div>

      {/* Анимацию навигации оставляем — она не влияет на LCP первого экрана */}
      <AnimatePresence>
        {isDesktop && !isScrolled && (
          <motion.div
            key="nav-desktop"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.navContainer}
          >
            <NavigationHeader />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

================

import styles from "./Hero.module.css";
import titleIMG from "./titleIMG.avif";
import heroIMG from "./hero.avif";
import useIsDesktop from "../../hooks/useIsDesktop";

export default function Hero() {
  const isDesktop = useIsDesktop(1024);
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <article className={styles.wrapperMainInfo}>
          <h1 className={styles.mainTitle}>
            <span className={styles.subTitle}>Dr. med. univ.</span>
            <span className={styles.nameTitle}>Sviatlana Fineder</span>

            <span className={styles.middleRow}>
              <img
                src={titleIMG}
                alt="Venera Medical"
                className={styles.titleIMG}
                fetchpriority="high"
                loading="eager"
              />
              <span className={styles.sideText}>
                <span>Fachärztliche</span>
                <span>Ordination für</span>
              </span>
            </span>

            <span className={styles.bottomTitle}>Allgemein- und</span>
            <span className={styles.bottomTitle}>Familienmedizin</span>
          </h1>
          <p className={styles.descriptionTop}>
            Ästhetische Behandlungen · Regeneration · Longevity
          </p>
          <p className={styles.descriptionLow}>
            Venus steht für natürliche Schönheit, Harmonie und Regeneration.
            Werte, die meine ärztliche Arbeit prägen.
          </p>
          {isDesktop && (
            <a
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
              target="_blank"
              className={styles.headerBtn}
            >
              Termin buchen
            </a>
          )}
        </article>
        <img
          src={heroIMG}
          className={styles.heroIMG}
          alt="Sviatlana Fineder"
          fetchpriority="high"
          loading="eager"
        />
        {!isDesktop && (
          <a
            href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            target="_blank"
            className={styles.headerBtn}
          >
            Termin buchen
          </a>
        )}
      </div>
    </section>
  );
}


=================

import { useState } from "react";
import { NavLink } from "react-router-dom"; // NavLink автоматически добавляет класс "active"
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavigationHeader.module.css";
import sprite from '../../icons.svg'

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Über mich",
    path: "/about",
    submenu: [
      { name: "Lebenslauf", path: "/about/cv" },
      { name: "Philosophie", path: "/about/philosophy" },
    ],
  },
  {
    name: "Behandlungsangebot",
    path: "/services",
    submenu: [
      { name: "Frauenheilkunde", path: "/services/gynecology" },
      { name: "Geburtshilfe", path: "/services/obstetrics" },
    ],
  },
  { name: "Meine Preise", path: "/prices" },
  {
    name: "Kontakt",
    path: "/contact",
    submenu: [
      { name: "Standort", path: "/contact/location" },
      { name: "Anfahrt", path: "/contact/directions" },
    ],
  },
];

export default function NavigationHeader() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={styles.navItem}
            onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {item.name}
              {item.submenu && (
                <svg className={styles.navigationArrow} width={13} height={7}>
                  <use xlinkHref={`${sprite}#icon-navigationArrow`}></use>
                </svg>
              )}
            </NavLink>

            {/* Выпадающее меню */}
            <AnimatePresence>
              {item.submenu && activeSubmenu === item.name && (
                <motion.ul
                  className={styles.submenu}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.name}>
                      <NavLink to={sub.path} className={styles.subLink}>
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
}


================

@font-face {
  font-family: "Garamond";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/EBGaramond-Regular.woff2") format("woff2");
}
@font-face {
  font-family: "Garamond";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/EBGaramond-Italic.woff2") format("woff2");
}
@font-face {
  font-family: "SS";
  font-style: normal;
  font-display: swap;
  src: url("./assets/fonts/SourceSans3-Roman.woff2") format("woff2");
}
@font-face {
  font-family: "SS";
  font-style: italic;
  font-display: swap;
  src: url("./assets/fonts/SourceSans3-Italic.woff2") format("woff2");
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth; /* Для плавного скролла по якорям и по сайту */
  scrollbar-gutter: stable;
  background-color: #F7F1DE;
  font-family: "SS", sans-serif;
  color: #442D0B;
}
body {
  margin: 0 auto;
}
div {
  position: relative;
}
section {
  position: relative; /* MOBILE */
  padding: 35px 16px;
  overflow: hidden;
}
ul,
ol {
  list-style: none; /* Убираем базовые цифры и пометки списков */
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none; /* Убираем подчеркивание ссылок */
  transition: 0.3s;
}
p,
li,
a {
  white-space: pre-line;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Garamond";
  font-weight: 400;
  text-transform: uppercase;
}
button {
  font-family: "SS";
  font-weight: 500;
  transition: 0.3s;
  cursor: pointer;
}
.container {  /* MOBILE */
  max-width: calc(375px - 32px);
  margin: 0 auto;
}

@media(min-width: 768px){
  .container{
    max-width: 1440px;
  }
}

===============

.header {
  padding: 13px 0;
  border-bottom: 1px solid #d6b139;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background: #F7F1DE;
  min-height: 80px; 
}
.headerContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapperLogo {
  display: flex;
  align-items: center;
  gap: 4px;
}
.logo{
  width: 57px;
  height: auto;
  aspect-ratio: 1 / 1;
}
.wrapperLogoDescription {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.logoDH {
  font-style: italic;
  font-size: 16px;
  color: #442d0b;
  font-family: "Garamond";
}
.logoDL {
  font-size: 9px;
  color: #442d0b;
  font-weight: 600;
}
.headerBtn {
  padding: 11px 21px;
  background: linear-gradient(90deg, #d6b139, #ffe389, #d6b139);
  background-size: 200% auto; /* Растягиваем фон */
  transition: background-position 0.3s ease;
  background-position: left center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 40px;
  color: #442d0b;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "SS";
  transition: background 0.3s;
}
.headerBtn:hover,
.headerBtn:focus {
  background-position: right center;
}
.wrapperBurgerMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #442d0b;
  padding: 8px;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.wrapperBurgerMenu:focus,
.wrapperBurgerMenu:hover {
  background-color: #d6b139;
}
.burgerIcon {
  fill: #f7f1de;
}
.wrapperBurgerMenu:hover .burgerIcon,
.wrapperBurgerMenu:focus .burgerIcon {
  fill: #442d0b;
}

.wrapperContactLinks{
    display: none;
}

@media (min-width: 768px) {
  .header {
    padding: 12px 0 0;
  }
  .logo{
    width: 107px;
  }
  .logoDH {
    font-size: 32px;
  }
  .logoDL {
    font-size: 14px;
  }
  .wrapperContactLinks {
    display: flex;
    gap: 12px;
    margin-left: auto;
    margin-right: 20px;
  }
  .headerContactLink {
    color: #442d0b;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.3s;
  }
  .contactIcon {
    fill: #d6b139;
    transition: 0.3s;
  }
  .headerContactLink:hover, .headerContactLink:focus{
    color: #d6b139;
  }
  .headerContactLink:hover .contactIcon, .headerContactLink:focus .contactIcon{
    fill: #442d0b;
  }
   .wrapperBurgerMenu{
    display: none;
   }
}


================

.heroContent {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.mainTitle {
  font-size: 26px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
}
.mainTitle,
.nameTitle,
.bottomTitle {
  color: #b6771d;
  font-style: italic;
}
.sideText {
  color: #442d0b;
  display: flex;
  flex-direction: column;
}
.middleRow {
  display: flex;
  align-items: center;
  gap: 10px;
}
.titleIMG {
  width: 92px;
  height: 52px;
  object-fit: cover;
  border-radius: 10px;
}
.descriptionTop,
.descriptionLow {
  color: #442d0b;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.descriptionTop {
  margin-bottom: 10px;
}
.descriptionLow {
  margin-bottom: 20px;
}
.heroIMG {
  border-radius: 15px;
  position: relative;
  box-shadow: 
    3px 0px 0px 0px #B6771D, 
    7px 0px 0px 0px #D99026, 
    10px 0px 0px 0px #FFAA31;
}
.headerBtn {
  padding: 11px 21px;
  background: linear-gradient(90deg, #d6b139, #ffe389, #d6b139);
  background-size: 200% auto; /* Растягиваем фон */
  transition: background-position 0.3s ease;
  background-position: left center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 40px;
  color: #442d0b;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "SS";
  transition: background 0.3s;
}
.headerBtn:hover,
.headerBtn:focus {
  background-position: right center;
}

@media (min-width: 768px) {
  .heroSection {
    padding-top: 100px;
  }
  .heroContent {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .mainTitle {
    font-size: 70px;
    line-height: 1;
    margin-bottom: 46px;
  }
  .titleIMG {
    width: 158px;
    height: 123px;
  }
  .heroIMG {
    max-width: 648px;
    max-height: 720px;
    border-radius: 30px;
    box-shadow: 
    6px 0px 0px 0px #B6771D, 
    12px 0px 0px 0px #D99026, 
    18px 0px 0px 0px #FFAA31;
}
  .descriptionLow,
  .descriptionTop {
    font-size: 32px;
  }
  .headerBtn {
    font-size: 26px;
    padding: 25px 63px;
    max-width: 50%;
    margin: 0 auto;
  }
}


====================

