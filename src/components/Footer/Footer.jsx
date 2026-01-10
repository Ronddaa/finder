import styles from "./Footer.module.css";
import logo from "../../../public/vite.svg";
import sprite from "../../icons.svg";
import useIsDesktop from "../../hooks/useIsDesktop.js";
import { NavLink } from "react-router-dom";
import EvaFooter from "./EvaFooter.jsx";

export default function Footer() {
  const isDesktop = useIsDesktop(1024);

  return (
      <footer className={styles.footer}>
          <EvaFooter />
      <div className={`container ${styles.footerContent}`}>
        <a className={styles.linkMainPage} href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        {isDesktop && (
          <nav className={styles.footerNav}>
            <p className={styles.titles}>Home</p>
            <ul className={styles.wrapperFooterList}>
              <li>
                <NavLink
                  to="/"
                  className={styles.footerNavogationLink}
                >Home</NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={styles.footerNavogationLink}
                >Über mich</NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={styles.footerNavogationLink}
                >Behandlungsangebot</NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={styles.footerNavogationLink}
                >Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        )}
        <div className={styles.wrapperMiddleLists}>
          <div className={styles.wrapperAdress}>
            <p className={styles.titles}>Adresse</p>
            <ul className={styles.wrapperFooterList}>
              <li>
                <a
                  className={styles.adressLink}
                  target="_blank"
                  href="https://share.google/9JEPdosslf7r3zKoi"
                >1030 Wien Fasangasse 44/3</a>
              </li>
              <li>
                <a
                  className={styles.adressLink}
                  target="_blank"
                  href="https://share.google/0XNr0sTZgtL5uHMvJ"
                >1010 Wien Führichgaße 12</a>
              </li>
            </ul>
          </div>
          <div className={styles.wrapperContacts}>
            <p className={styles.titles}>Kontakt</p>
            <ul className={styles.wrapperFooterList}>
              <li>
                <a
                  className={styles.footerContactLink}
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
                  className={styles.footerContactLink}
                  href="mailto:info@dr-fineder.at"
                >
                  <svg className={styles.contactIcon} width={24} height={24}>
                    <use xlinkHref={`${sprite}#icon-mail`}></use>
                  </svg>
                  info@dr-fineder.at
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.wrapperSocial}>
            <p className={styles.titles}>soziale Medien</p>
            <ul className={styles.wrapperSocialLinks}>
              <li>
                <a className={styles.footerContactLink} href="#">
                  <svg className={styles.contactIcon} width={42} height={42}>
                    <use xlinkHref={`${sprite}#icon-facebook`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a className={styles.footerContactLink} href="#">
                  <svg className={styles.contactIcon} width={42} height={42}>
                    <use xlinkHref={`${sprite}#icon-instagram`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a className={styles.footerContactLink} href="#">
                  <svg className={styles.contactIcon} width={42} height={42}>
                    <use xlinkHref={`${sprite}#icon-telegram`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapperLinks}>
          <p className={styles.titles}>Links</p>
          <ul className={styles.wrapperFooterList}>
            <li>
              <a href="#" target="_blank" className={styles.footerLinks}>
                Impressum
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.footerLinks}>
                Datenschutzerklärung
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.footerLinks}>
                Cookie-Richtlinie (EU)
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.footerLinks}>
                1010 Wien
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.footerLinks}>
                1030 Wien
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.cTextFooter}>2026 © Dr. Fineder</p>
    </footer>
  );
}
