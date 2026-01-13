import styles from "./ProposForMedical.module.css";
import sprite from "../../../icons.svg";

export default function ProposForMedical() {
  return (
    <section className={styles.ProposForMedical}>
      <div className="container">
        <h2 className={styles.title}>Behandlungsangebote</h2>
        <ul className={styles.wrapperPropsList}>
          <li className={styles.elementProps}>
            <svg className={styles.contactIcon} width={111} height={97}>
              <use xlinkHref={`${sprite}#icon-heartplus`}></use>
            </svg>
            <article className={styles.wrapperInfo}>
              <h3 className={styles.titleElement}>Allgemeinmedizin</h3>
              <p className={styles.textElement}>
                Gerne bin ich Ihre erste Ansprechperson im Rahmen der allgemein-
                und familienmedizinischen Grundversorgung
              </p>
            </article>
            <a
              className={styles.defaultLink}
              target="_blank"
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            >
              weiterlesen
              <div className={styles.wrapperDefaultIcon}>
                <svg className={styles.defaultLinkIcon} width={15} height={8}>
                  <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                </svg>
              </div>
            </a>
          </li>
          <li className={styles.elementProps}>
            <svg className={styles.contactIcon} width={111} height={97}>
              <use xlinkHref={`${sprite}#icon-listik`}></use>
            </svg>
            <article className={styles.wrapperInfo}>
              <h3 className={styles.titleElement}>Ästetische Behandlungen</h3>
              <p className={styles.textElement}>
                Regenerative Verfahren mit Exosomen, Polynukleotiden, PRP,
                Fäden, Botulinum und Hyaluron
              </p>
            </article>
            <a
              className={styles.defaultLink}
              target="_blank"
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            >
              weiterlesen
              <div className={styles.wrapperDefaultIcon}>
                <svg className={styles.defaultLinkIcon} width={15} height={8}>
                  <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                </svg>
              </div>
            </a>
          </li>
          <li className={styles.elementProps}>
            <svg className={styles.contactIcon} width={111} height={97}>
              <use xlinkHref={`${sprite}#icon-fonar`}></use>
            </svg>
            <article className={styles.wrapperInfo}>
              <h3 className={styles.titleElement}>IV-Therapie</h3>
              <p className={styles.textElement}>
                Für mehr Energie, bessere Regeneration und ganzheitliche
                Longevity-Unterstützung
              </p>
            </article>
            <a
              className={styles.defaultLink}
              target="_blank"
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            >
              weiterlesen
              <div className={styles.wrapperDefaultIcon}>
                <svg className={styles.defaultLinkIcon} width={15} height={8}>
                  <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                </svg>
              </div>
            </a>
          </li>
          <li className={styles.elementProps}>
            <svg className={styles.contactIcon} width={111} height={97}>
              <use xlinkHref={`${sprite}#icon-caseplus`}></use>
            </svg>
            <article className={styles.wrapperInfo}>
              <h3 className={styles.titleElement}>Vorsorgeuntersuchung</h3>
              <p className={styles.textElement}>
                Jährliche Untersuchung zur Vermeidung und Früherkennung von
                Erkrankungen ab dem 19. Lebensjahr
              </p>
            </article>
            <a
              className={styles.defaultLink}
              target="_blank"
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            >
              weiterlesen
              <div className={styles.wrapperDefaultIcon}>
                <svg className={styles.defaultLinkIcon} width={15} height={8}>
                  <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                </svg>
              </div>
            </a>
          </li>
          <li className={styles.elementProps}>
            <svg className={styles.contactIcon} width={111} height={97}>
              <use xlinkHref={`${sprite}#icon-circlebtns`}></use>
            </svg>
            <article className={styles.wrapperInfo}>
              <h3 className={styles.titleElement}>Akupunktur</h3>
              <p className={styles.textElement}>
                In meiner Ordination biete ich auch Akupunkturbehandlungen an,
                um Beschwerden zu lindern und die Lebensqualität zu verbessern.
              </p>
            </article>
            <a
              className={styles.defaultLink}
              target="_blank"
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            >
              weiterlesen
              <div className={styles.wrapperDefaultIcon}>
                <svg className={styles.defaultLinkIcon} width={15} height={8}>
                  <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                </svg>
              </div>
            </a>
          </li>
          <li className={styles.elementProps}>
            <svg className={styles.contactIcon} width={111} height={97}>
              <use xlinkHref={`${sprite}#icon-bottleplus`}></use>
            </svg>
            <article className={styles.wrapperInfo}>
              <h3 className={styles.titleElement}>Mounjaro®</h3>
              <p className={styles.textElement}>
                Der smarteste, sichere Weg zu nachhaltiger Gewichtsreduktion
              </p>
            </article>
            <a
              className={styles.defaultLink}
              target="_blank"
              href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
            >
              weiterlesen
              <div className={styles.wrapperDefaultIcon}>
                <svg className={styles.defaultLinkIcon} width={15} height={8}>
                  <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
