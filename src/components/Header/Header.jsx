import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import logo from "../../../public/vite.svg";
import sprite from "../../icons.svg";
import useIsDesktop from "../../hooks/useIsDesktop.js";
import NavigationHeader from "../NavigatinHeader/NavigationHeader.jsx";

export default function Header() {
  const isDesktop = useIsDesktop(1024);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={`container ${styles.headerContent}`}>
        {/* 1. ЛОГОТИП */}
        <div className={styles.wrapperLogo}>
          <a href="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <ul className={styles.wrapperLogoDescription}>
            <li className={styles.logoDH}>Venera Medical</li>
            <li className={styles.logoDL}>Wahlärztin in 1230 Wien</li>
          </ul>
        </div>

        {/* 2. КОНТАКТЫ (Desktop) — появляются плавно */}
        <AnimatePresence>
          {isDesktop && (
            <motion.ul
              key="desktop-contacts"
              className={styles.wrapperContactLinks}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <li>
                <a
                  className={styles.headerContactLink}
                  href="tel:+436767445330"
                >
                  <svg className={styles.contactIcon} width={24} height={24}>
                    <use xlinkHref={`${sprite}#icon-phone`}></use>
                  </svg>
                  +436767445330
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
                  info@dr-fineder.at
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
            </motion.ul>
          )}
        </AnimatePresence>

        {/* 3. КНОПКА (Всегда на месте) */}
        <a
          href="https://patient.latido.at/booking/select..."
          target="_blank"
          className={styles.headerBtn}
        >
          Termin buchen
        </a>

        {/* 4. БУРГЕР (Mobile) — рендерится после кнопки */}
        <AnimatePresence>
          {!isDesktop && (
            <motion.div
              key="mobile-burger"
              className={styles.wrapperBurgerMenu}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg className={styles.burgerIcon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-burger`}></use>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isDesktop && (
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
    </motion.header>
  );
}
