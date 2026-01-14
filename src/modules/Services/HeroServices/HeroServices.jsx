import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "./servicesContent.js";
import BtnWithImageYellow from "../../../components/Buttons/WithImageYellow/WithImageYellow";
import styles from "./HeroServices.module.css";
import useIsDesktop from "../../../hooks/useIsDesktop.js";

export default function HeroServices() {
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop(1024)

  // Получаем данные или берем пустой объект, если путь не найден
  const data = servicesData[pathname] || {};

  return (
    <section className={styles.heroServicesSection}>
      {/* AnimatePresence следит за сменой ключа (key) и запускает анимацию */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // Важно! При смене пути React перерисует блок с анимацией
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`container ${styles.HeroServicesContent}`}
        >
          <article className={styles.wrapperMain}>
            <div className={styles.wrapperTitle}>
              <h1 className={styles.title}>{data.title}</h1>
              <p className={styles.text}>{data.text}</p>
            </div>
            {isDesktop && <BtnWithImageYellow />}
          </article>

          {data.image && (
            <img src={data.image} alt={data.title} className={styles.mainImg} />
          )}
          {!isDesktop && <BtnWithImageYellow />}
        </motion.div>
      </AnimatePresence>

      {/* Условный рендеринг дополнительного блока */}
      {data.showExtraBlock && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container"
        >
          <p className={styles.textMore}>{data.textMore}</p>
        </motion.div>
      )}
    </section>
  );
}
