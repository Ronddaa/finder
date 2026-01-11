import styles from "./Hero.module.css";
import titleIMG from "./titleIMG.avif";
import heroIMG from "./hero.avif";
import useIsDesktop from "../../hooks/useIsDesktop";

export default function Hero() {
  const isDesktop = useIsDesktop(1024);
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <article className={styles.wrapperMainInfo}>
          <h1 className={styles.mainTitle}>
            <span className={styles.subTitle}>Dr. med. univ.</span>
            <span className={styles.nameTitle}>Sviatlana Fineder</span>

            <span className={styles.middleRow}>
              <img
                src={titleIMG}
                alt="Venera Medical"
                className={styles.titleIMG}
                fetchPriority="high"
                loading="eager"
                width="158"
                height="123"
              />
              <span className={styles.sideText}>
                <span>Fachärztliche</span>
                <span>Ordination für</span>
              </span>
            </span>

            <span className={styles.bottomTitle}>Allgemein- und</span>
            <span className={styles.bottomTitle}>Familienmedizin</span>
          </h1>
          <p className={styles.descriptionTop}>
            Ästhetische Behandlungen · Regeneration · Longevity
          </p>
          <p className={styles.descriptionLow}>
            Venus steht für natürliche Schönheit, Harmonie und Regeneration.
            Werte, die meine ärztliche Arbeit prägen.
          </p>
          {isDesktop && (
            <a
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
              target="_blank"
              className={styles.headerBtn}
            >
              Termin buchen
            </a>
          )}
        </article>
        <img
          src={heroIMG}
          className={styles.heroIMG}
          alt="Sviatlana Fineder"
          fetchPriority="high"
          loading="eager"
          width="648"
          height="720"
        />
        {!isDesktop && (
          <a
            href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            target="_blank"
            className={styles.headerBtn}
          >
            Termin buchen
          </a>
        )}
      </div>
    </section>
  );
}
