import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Burger.module.css";
import sprite from "../../icons.svg";
import logo from "../../../public/vite.svg";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Über mich",
    path: "/about",
    submenu: [{ name: "Kundenbewertung", path: "/about/kundenbewertung" }],
  },
  {
    name: "Behandlungsangebot",
    path: "/behandlungsangebote",
    submenu: [
      { name: "Kundenbewertung", path: "/behandlungsangebote/kundenbewertung" },
      { name: "Akupunktur", path: "/behandlungsangebote/akupunktur" },
      {
        name: "Regenerative & Ästhetische Medizin",
        path: "/behandlungsangebote/regenerative",
        // ВЛОЖЕННОЕ МЕНЮ (3-й уровень)
        submenu: [
          {
            name: "Botox Behandlung",
            path: "/behandlungsangebote/regenerative/botox",
          },
          {
            name: "Faltenbehandlung mit Hyaluronsäure",
            path: "/behandlungsangebote/regenerative/hyaluron",
          },
          {
            name: "Faltenbehandlung mit Radiesse®",
            path: "/behandlungsangebote/regenerative/radiesse",
          },
          {
            name: "Fadenlifting",
            path: "/behandlungsangebote/regenerative/fadenlifting",
          },
          {
            name: "Lippen aufspritzen",
            path: "/behandlungsangebote/regenerative/lippen",
          },
          {
            name: "Plasmalifting / PRP",
            path: "/behandlungsangebote/regenerative/prp",
          },
          {
            name: "Biorevitalisierung",
            path: "/behandlungsangebote/regenerative/biorevitalisierung",
          },
          {
            name: "Regenerative Medizin für Männer",
            path: "/behandlungsangebote/regenerative/men",
          },
        ],
      },
      { name: "IV-Therapie", path: "/behandlungsangebote/iv-therapie" },
      {
        name: "Vorsorgeuntersuchung",
        path: "/behandlungsangebote/vorsorgeuntersuchung",
      },
      { name: "Mounjaro®", path: "/behandlungsangebote/mounjaro" },
    ],
  },
  {
    name: "Meine Preise",
    path: "/prices",
    submenu: [
      {
        name: "PREISLISTE ÄSTHETISCHE MEDIZIN",
        path: "/prices/preisliste",
      },
    ],
  },
  { name: "Kontakt", path: "/kontact" },
];

export default function BurgerModal({ isOpen, onClose }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubmenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modalBurger}
      className={styles.modalBurgerContent}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
        <nav className={styles.mobileNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <div className={styles.linkWrapper}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={styles.link}
                  >
                    {item.name}
                  </NavLink>
                  {item.submenu && (
                    <button
                      className={`${styles.arrowBtn} ${
                        openMenus[item.name] ? styles.rotated : ""
                      }`}
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <svg width={16} height={10}>
                        <use xlinkHref={`${sprite}#icon-navigationArrow`}></use>
                      </svg>
                    </button>
                  )}
                </div>

                {/* Выпадающее меню 2 уровня */}
                <AnimatePresence>
                  {item.submenu && openMenus[item.name] && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={styles.submenu}
                    >
                      {item.submenu.map((sub) => (
                        <li key={sub.name} className={styles.submenuItem}>
                          <div className={styles.linkWrapper}>
                            <NavLink
                              to={sub.path}
                              onClick={onClose}
                              className={styles.subLink}
                            >
                              {sub.name}
                            </NavLink>
                            {sub.submenu && (
                              <button
                                className={`${styles.arrowBtnSub} ${
                                  openMenus[sub.name] ? styles.rotated : ""
                                }`}
                                onClick={() => toggleSubmenu(sub.name)}
                              >
                                <svg width={12} height={8}>
                                  <use
                                    xlinkHref={`${sprite}#icon-navigationArrow`}
                                  ></use>
                                </svg>
                              </button>
                            )}
                          </div>

                          {/* 3 уровень */}
                          <AnimatePresence>
                            {sub.submenu && openMenus[sub.name] && (
                              <motion.ul className={styles.nestedSubmenu}>
                                {sub.submenu.map((nested) => (
                                  <li key={nested.name}>
                                    <NavLink
                                      to={nested.path}
                                      onClick={onClose}
                                      className={styles.nestedLink}
                                    >
                                      {nested.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
        <a className={styles.linkMainPage} href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        <div className={styles.wrapperMiddleLists}>
          <div className={styles.wrapperAdress}>
            <p className={styles.titles}>Adresse</p>
            <ul className={styles.wrapperFooterList}>
              <li>
                <a
                  className={styles.adressLink}
                  target="_blank"
                  href="https://share.google/9JEPdosslf7r3zKoi"
                >
                  1030 Wien Fasangasse 44/3
                </a>
              </li>
              <li>
                <a
                  className={styles.adressLink}
                  target="_blank"
                  href="https://share.google/0XNr0sTZgtL5uHMvJ"
                >
                  1010 Wien Führichgaße 12
                </a>
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
    </Modal>
  );
}
