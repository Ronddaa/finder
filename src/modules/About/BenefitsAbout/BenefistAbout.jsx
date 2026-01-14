import styles from "./BenefistAbout.module.css";
import sprite from "../../../icons.svg";

export default function BenefistAbout() {
  return (
    <section className={styles.benefistAboutSection}>
      <div className="container">
        <h2 className={styles.title}>Meine Vorteile</h2>
        <ul className={styles.wrapperCards}>
          <li className={`${styles.card} ${styles.card_1}`}>
            <svg className={styles.icon} width={72} height={72}>
              <use xlinkHref={`${sprite}#icon-medushi`}></use>
            </svg>
            <h3 className={styles.titleCard}>
              Professionelle <br /> Behandlung
            </h3>
            <div className={`${styles.wrapperText} ${styles.wrapperText_1}`}>
              <p className={styles.text}>
                Da jedes Gesicht und jede Haut anders ist, sind die Erfahrung
                des Behandlers und die Qualität der verwendeten Produkte
                entscheidend für ein ästhetisch hervorragendes Ergebnis. Daher
                verwende ich in meiner Praxis erstklassige österreichische
                Produkte: Hyaluronfiller von Belotero® in unterschiedlichen
                Konzentrationen
              </p>
            </div>
          </li>
          <li className={`${styles.card} ${styles.card_2}`}>
            <svg className={styles.icon} width={72} height={72}>
              <use xlinkHref={`${sprite}#icon-gradusnik`}></use>
            </svg>
            <h3 className={`${styles.titleCard} ${styles.titleCardWhite}`}>
              Geprüfte <br /> Markenprodukte
            </h3>
            <div className={styles.wrapperText}>
              <p className={styles.text}>
                Um bei Ihnen das beste Ergebnis mit langanhaltender
                Wirkungsdauer zu erzielen, verwende ich ausschließlich klinisch
                getestetes Botulinumtoxin und Hyaluronfiller der bekanntesten
                österreichische Hersteller Merz Aesthetics®. Diese sind seit
                vielen Jahren im Einsatz und haben sich millionenfach bewährt
              </p>
            </div>
          </li>
          <li className={`${styles.card} ${styles.card_3}`}>
            <svg className={styles.icon} width={72} height={72}>
              <use xlinkHref={`${sprite}#icon-chat`}></use>
            </svg>
            <h3 className={`${styles.titleCard} ${styles.titleCardWhite}`}>
              Individuelle <br /> Beratung
            </h3>
            <div className={styles.wrapperText}>
              <p className={styles.text}>
                In einem Aufklärungsgespräch gehe ich auf ihre individuellen
                Wünsche ein und besprechen das zu erwartende
                Behandlungsergebnis. Sie erfahren alles, was Sie über den Ablauf
                und die Nachsorge wissen sollten. Gespräche kann ich mit Ihnen
                in den Sprachen - Deutsch, Russisch. Polnisch, Englisch führen
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
