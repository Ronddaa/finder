import styles from "./Header.module.css";
import logo from "../../../public/vite.svg";
import sprite from "../../icons.svg";
import useIsDesktop from "../../hooks/useIsDesctop.js";

export default function Header() {
  const isDesktop = useIsDesktop(1024);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.wrapperLogo}>
          <a href="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <ul className={styles.wrapperLogoDescription}>
            <li className={styles.logoDH}>Venera Medical</li>
            <li className={styles.logoDL}>Wahlärztin in 1230 Wien</li>
          </ul>
        </div>

        {/* Условие: показываем только на десктопе */}
        {isDesktop && (
          <ul className={styles.wrapperContactLinks}>
            <li className={styles.wrapperContactLinks}>
              <a className={styles.headerContactLink} href="tel:+436767445330">
                <svg className={styles.contactIcon} width={24} height={24}>
                  <use xlinkHref={`${sprite}#icon-phone`}></use>
                </svg>
                +436767445330
              </a>
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
          </ul>
        )}

        <a
          href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
          target="_blank"
          className={styles.headerBtn}
        >
          Termin buchen
        </a>

        {/* Условие: показываем только на мобильных (инверсия isDesktop) */}
        {!isDesktop && (
          <div className={styles.wrapperBurgerMenu}>
            <svg className={styles.burgerIcon} width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-burger`}></use>
            </svg>
          </div>
        )}
      </div>
    </header>
  );
}
