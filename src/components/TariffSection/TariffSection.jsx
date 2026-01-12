import styles from "./TariffSection.module.css";
import logo from "../../../public/vite.svg";

export default function TariffSection() {
  return (
    <section className={styles.tariffSection}>
      <div className="container">
        <h2 className={styles.title}>PAKETANGEBOTE</h2>
        <ul className={styles.wrapperTariffCards}>
          <li className={styles.cardElementOne}>
            <img
              src={logo}
              className={styles.logo}
              alt="logo"
              width={220}
              height={220}
            />
            <div className={styles.wrapperTitle}>
              <h3 className={styles.titleCard}>Vital paket</h3>
              <p className={styles.price}>480 €</p>
            </div>
            <article className={styles.wrapperArticle}>
              <h4 className={styles.nameCard}>Skin · Immunity · Energy</h4>
              <ul className={styles.wrapperListCard}>
                <li>Skin Booste</li>
                <li>Infusion Vitamin C IV (hochdosiert)</li>
              </ul>
              <a
                href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.headerBtn}
              >
                Termin buchen
              </a>
            </article>
          </li>
          <li className={styles.cardElementTwo}>
            <img
              src={logo}
              className={styles.logo}
              alt="logo"
              width={220}
              height={220}
            />
            <div className={styles.wrapperTitle}>
              <h3 className={styles.titleCard}>
                Full face contour <br />& radiance paket
              </h3>
              <p className={styles.price}>1.300 €</p>
            </div>
            <article className={styles.wrapperArticle}>
              <h4 className={styles.nameCard}>Lift · Contour · Skin Quality</h4>
              <ul className={styles.wrapperListCard}>
                <li>Botulinumtoxin – 3 Zonen</li>
                <li>Hyaluronsäure-Filler – 2 ml (Contouring)</li>
                <li>Polynukleotide</li>
              </ul>
              <a
                href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.headerBtn}
              >
                Termin buchen
              </a>
            </article>
          </li>
          <li className={styles.cardElementThree}>
            <img
              src={logo}
              className={styles.logo}
              alt="logo"
              width={220}
              height={220}
            />
            <div className={styles.wrapperTitle}>
              <h3 className={styles.titleCard}>Men’s <br /> power paket</h3>
              <p className={styles.price}>900 €</p>
            </div>
            <article className={styles.wrapperArticle}>
              <h4 className={styles.nameCard}>
                Focus · Strength · Liver Support
              </h4>
              <ul className={styles.wrapperListCard}>
                <li>Botulinumtoxin – obere Gesichtszonen</li>
                <li>Polynukleotide</li>
                <li>Glutathion IV</li>
              </ul>
              <a
                href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.headerBtn}
              >
                Termin buchen
              </a>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
