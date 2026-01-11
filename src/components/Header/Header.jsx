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
    <header className={styles.header}>
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
                width: isScrolled ? 57 : isDesktop ? 107 : 57,
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
            <a
              className={styles.headerContactLink}
              href="#"
              aria-label="Facebook"
            >
              <svg className={styles.contactIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-facebook`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              className={styles.headerContactLink}
              href="#"
              aria-label="Instagram"
            >
              <svg className={styles.contactIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-instagram`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              className={styles.headerContactLink}
              href="#"
              aria-label="Telegram"
            >
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