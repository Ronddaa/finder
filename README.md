import { useEffect, useState } from "react";

export default function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkScreen(); // сразу при загрузке

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isDesktop;
}


import styles from "./Header.module.css";
import logo from "../../../public/vite.svg";
import sprite from '../../icons.svg';
// import useIsDesktop from "../../hooks/useIsDesctop";

export default function Header() {
    // const {isMobile, isDesctop} = 
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.wrapperLogo}>
          <img className={styles.logo} src={logo} alt="logo" />
          <ul className={styles.wrapperLogoDescription}>
            <li className={styles.logoDH}>Venera Medical</li>
            <li className={styles.logoDL}>Wahlärztin in 1230 Wien</li>
          </ul>
        </div>
        <ul className={styles.wrapperContactLinks}> // только на компьютерах
          <li>
            <a className={styles.headerContactLink} href="tel:+436767445330">
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
                <use xlinkHref={`${sprite}#icon-phone`}></use>
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
        <button className={styles.headerBtn}>Termin buchen</button>
        <div className={styles.wrapperBurgerMenu}> // только на телефоне
          <svg className={styles.contactIcon} width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-burger`}></use>
          </svg>
        </div>
      </div>
    </header>
  );
}
