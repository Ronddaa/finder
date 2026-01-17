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
import BurgerModal from "../Burger/Burger.jsx";

export default function Header() {
  const isDesktop = useIsDesktop(1024);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [modalBurger, setModalBurger] = useState(false);

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
          href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headerBtn}
        >
          Termin buchen
        </a>

        {/* 4. БУРГЕР (Mobile) */}
        {!isDesktop && (
          <div
            className={styles.wrapperBurgerMenu}
            // Переключаем состояние: если открыто — закрываем, если закрыто — открываем
            onClick={() => setModalBurger((prev) => !prev)}
          >
            <svg
              className={styles.burgerIcon}
              width={modalBurger ? 16 : 24}
              height={modalBurger ? 16 : 24}
            >
              {/* Если modalBurger true, подставляем иконку close, иначе burger */}
              <use
                xlinkHref={`${sprite}#${
                  modalBurger ? "icon-close" : "icon-burger"
                }`}
              ></use>
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
      <BurgerModal isOpen={modalBurger} onClose={() => setModalBurger(false)} />
    </header>
  );
}