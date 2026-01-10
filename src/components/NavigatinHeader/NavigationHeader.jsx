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
