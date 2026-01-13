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
          {
            name: "PREISLISTE ÄSTHETISCHE MEDIZIN",
            path: "/prices/preisliste",
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
    path: "/behandlungsangebote",
    submenu: [
      {
        name: "PREISLISTE ÄSTHETISCHE MEDIZIN",
        path: "/behandlungsangebote/preisliste",
      },
    ],
  },
  { name: "Kontakt", path: "/kontact" },
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
