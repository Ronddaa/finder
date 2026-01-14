import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import titleIMG from "./titleIMG.avif";
import heroIMG from "./hero.avif";
import useIsDesktop from "../../../hooks/useIsDesktop";

// Описываем анимацию для контейнера (общие настройки)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Задержка между появлением каждого дочернего элемента
      delayChildren: 0.1,
    },
  },
};

// Описываем анимацию для текстовых блоков (всплытие снизу)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Анимация для главного фото (плавное появление сбоку)
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const isDesktop = useIsDesktop(1024);

  return (
    <section className={styles.heroSection}>
      <motion.div
        className={`container ${styles.heroContent}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <article className={styles.wrapperMainInfo}>
          <motion.h1 className={styles.mainTitle} variants={itemVariants}>
            <span className={styles.subTitle}>Dr. med. univ.</span>
            <span className={styles.nameTitle}>Sviatlana Fineder</span>

            <span className={styles.middleRow}>
              <motion.img
                src={titleIMG}
                alt="Venera Medical"
                className={styles.titleIMG}
                fetchPriority="high"
                loading="eager"
                width="158"
                height="123"
                whileHover={{ scale: 1.05 }} // Эффект при наведении на маленькое лого
              />
              <span className={styles.sideText}>
                <span>Fachärztliche</span>
                <span>Ordination für</span>
              </span>
            </span>

            <span className={styles.bottomTitle}>Allgemein- und</span>
            <span className={styles.bottomTitle}>Familienmedizin</span>
          </motion.h1>

          <motion.p className={styles.descriptionTop} variants={itemVariants}>
            Ästhetische Behandlungen · Regeneration · Longevity
          </motion.p>

          <motion.p className={styles.descriptionLow} variants={itemVariants}>
            Venus steht für natürliche Schönheit, Harmonie und Regeneration.
            Werte, die meine ärztliche Arbeit prägen.
          </motion.p>

          {isDesktop && (
            <motion.a
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
              target="_blank"
              className={styles.headerBtn}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Termin buchen
            </motion.a>
          )}
        </article>

        <motion.img
          src={heroIMG}
          className={styles.heroIMG}
          alt="Sviatlana Fineder"
          fetchPriority="high"
          loading="eager"
          width="648"
          height="720"
          variants={imageVariants}
        />

        {!isDesktop && (
          <motion.a
            href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            target="_blank"
            className={styles.headerBtn}
            variants={itemVariants}
          >
            Termin buchen
          </motion.a>
        )}
      </motion.div>
    </section>
  );
}
